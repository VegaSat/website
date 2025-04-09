#include "driver/gpio.h"
#include "driver/ledc.h"
#include "driver/pcnt.h"
#include "driver/periph_ctrl.h"
#include "esp_attr.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/portmacro.h"
#include "freertos/queue.h"
#include "freertos/task.h"
#include "soc/pcnt_struct.h"
#include <Arduino.h>
#include <stdio.h>

xQueueHandle pcnt_evt_queue;              // A queue to handle pulse counter events
pcnt_isr_handle_t user_isr_handle = NULL; // user's ISR service handle

typedef struct {
    int unit;                // the PCNT unit that originated an interrupt
    uint32_t status;         // information on the event type that caused the interrupt
    unsigned long timeStamp; // The time the event occured
} pcnt_evt_t;

static void IRAM_ATTR pcnt_intr_handler(void *arg) {
    unsigned long currentMillis = millis(); // Time at instant ISR was called
    uint32_t intr_status = PCNT.int_st.val;
    int i = 0;
    pcnt_evt_t evt;
    portBASE_TYPE HPTaskAwoken = pdFALSE;

    for (i = 0; i < PCNT_UNIT_MAX; i++) {
        if (intr_status & (BIT(i))) {
            evt.unit = i;
            /* Save the PCNT event type that caused an interrupt
               to pass it to the main program */
            evt.status = PCNT.status_unit[i].val;
            evt.timeStamp = currentMillis;
            PCNT.int_clr.val = BIT(i);
            xQueueSendFromISR(pcnt_evt_queue, &evt, &HPTaskAwoken);
            if (HPTaskAwoken == pdTRUE) {
                portYIELD_FROM_ISR();
            }
        }
    }
}

/* Initialize PCNT functions for one channel:
 *  - configure and initialize PCNT with pos-edge counting
 *  - set up the input filter
 *  - set up the counter events to watch
 * Variables:
 * UNIT - Pulse Counter #, INPUT_SIG - Signal Input Pin, INPUT_CTRL - Control Input Pin,
 * Channel - Unit input channel, H_LIM - High Limit, L_LIM - Low Limit,
 * THRESH1 - configurable limit 1, THRESH0 - configurable limit 2,
 */
void pcnt_init_channel(pcnt_unit_t PCNT_UNIT, int PCNT_INPUT_SIG_IO, int PCNT_INPUT_CTRL_IO = PCNT_PIN_NOT_USED, pcnt_channel_t PCNT_CHANNEL = PCNT_CHANNEL_0, int PCNT_H_LIM_VAL = 19, int PCNT_L_LIM_VAL = -20, int PCNT_THRESH1_VAL = 50, int PCNT_THRESH0_VAL = -50) {
    /* Prepare configuration for the PCNT unit */
    pcnt_config_t pcnt_config;
    // Set PCNT input signal and control GPIOs
    pcnt_config.pulse_gpio_num = PCNT_INPUT_SIG_IO;
    pcnt_config.ctrl_gpio_num = PCNT_INPUT_CTRL_IO;
    pcnt_config.channel = PCNT_CHANNEL;
    pcnt_config.unit = PCNT_UNIT;
    // What to do on the positive / negative edge of pulse input?
    pcnt_config.pos_mode = PCNT_COUNT_INC; // Count up on the positive edge
    pcnt_config.neg_mode = PCNT_COUNT_DIS; // Keep the counter value on the negative edge
    // What to do when control input is low or high?
    pcnt_config.lctrl_mode = PCNT_MODE_REVERSE; // Reverse counting direction if low
    pcnt_config.hctrl_mode = PCNT_MODE_KEEP;    // Keep the primary counter mode if high
    // Set the maximum and minimum limit values to watch
    pcnt_config.counter_h_lim = PCNT_H_LIM_VAL;
    pcnt_config.counter_l_lim = PCNT_L_LIM_VAL;

    /* Initialize PCNT unit */
    pcnt_unit_config(&pcnt_config);
    /* Configure and enable the input filter */
    pcnt_set_filter_value(PCNT_UNIT, 100);
    pcnt_filter_enable(PCNT_UNIT);

    /* Set threshold 0 and 1 values and enable events to watch */
    // pcnt_set_event_value(PCNT_UNIT, PCNT_EVT_THRES_1, PCNT_THRESH1_VAL);
    // pcnt_event_enable(PCNT_UNIT, PCNT_EVT_THRES_1);
    // pcnt_set_event_value(PCNT_UNIT, PCNT_EVT_THRES_0, PCNT_THRESH0_VAL);
    // pcnt_event_enable(PCNT_UNIT, PCNT_EVT_THRES_0);
    /* Enable events on zero, maximum and minimum limit values */
    pcnt_event_enable(PCNT_UNIT, PCNT_EVT_ZERO);
    pcnt_event_enable(PCNT_UNIT, PCNT_EVT_H_LIM);
    // pcnt_event_enable(PCNT_UNIT, PCNT_EVT_L_LIM);

    /* Initialize PCNT's counter */
    pcnt_counter_pause(PCNT_UNIT);
    pcnt_counter_clear(PCNT_UNIT);
    /* Register ISR handler and enable interrupts for PCNT unit */
    pcnt_isr_register(pcnt_intr_handler, NULL, 0, &user_isr_handle);
    pcnt_intr_enable(PCNT_UNIT);

    /* Everything is set up, now go to counting */
    pcnt_counter_resume(PCNT_UNIT);
    pcnt_counter_resume(PCNT_UNIT_1);
}

/* Count RPM Function - takes first timestamp and last timestamp,
number of pulses, and pulses per revolution */
int getFreq(int firstTime, int lastTime, int pulseTotal) {
    int timeDelta = (lastTime - firstTime); // lastTime - firstTime
    if (timeDelta <= 0) {                   // This means we've gotten something wrong
        return -1;
    }
    return ((1000 * pulseTotal) / timeDelta);
}

int getTransmitter() {
    /* Initialize PCNT event queue and PCNT functions */
    pcnt_evt_queue = xQueueCreate(10, sizeof(pcnt_evt_t));
    pcnt_init_channel(PCNT_UNIT_0, 4); // Initialize Unit 0 to pin 4
    int FREQ0 = -1;                    // Fan 0 RPM
    int lastStamp0 = 0;                // for previous time stamp for fan 0

    pcnt_evt_t evt;
    portBASE_TYPE res;
    for (;;) {
        /* Wait for the event information passed from PCNT's interrupt handler.
         * Once received, decode the event type and print it on the serial monitor.
         */
        res = xQueueReceive(pcnt_evt_queue, &evt, 1000 / portTICK_PERIOD_MS);
        if (res == pdTRUE) {
            // Serial.printf("Event PCNT unit[%d]; Status: %u\n", evt.unit, evt.status);
            if (evt.unit == 0) { // Fan 0 - TURN THIS BLOCK INTO A FUNCTION THAT TAKES THE FAN OBJECT
                if (lastStamp0 == 0) {
                    lastStamp0 = evt.timeStamp;
                }
                FREQ0 = getFreq(lastStamp0, evt.timeStamp, 20);
                if (FREQ0 == -1) {
                    // Serial.printf("RPM Calc error detected!\n");
                    continue;
                }
                lastStamp0 = evt.timeStamp;
            }

            // Serial.printf("Frequency 0: %d Hz\n", FREQ0);

            if (FREQ0 > 550 && FREQ0 < 650) {
                if (user_isr_handle) {
                    // Free the ISR service handle.
                    esp_intr_free(user_isr_handle);
                    user_isr_handle = NULL;
                }
                return 1;
            } else if (FREQ0 > 750 && FREQ0 < 850) {
                if (user_isr_handle) {
                    // Free the ISR service handle.
                    esp_intr_free(user_isr_handle);
                    user_isr_handle = NULL;
                }
                return 2;
            } else if (FREQ0 > 950 && FREQ0 < 1050) {
                if (user_isr_handle) {
                    // Free the ISR service handle.
                    esp_intr_free(user_isr_handle);
                    user_isr_handle = NULL;
                }
                return 3;
            } else {
                if (user_isr_handle) {
                    // Free the ISR service handle.
                    esp_intr_free(user_isr_handle);
                    user_isr_handle = NULL;
                }
                return -1;
            }
        }
    }
}