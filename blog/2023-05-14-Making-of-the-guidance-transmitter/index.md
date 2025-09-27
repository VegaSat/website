---
slug: making-of-the-guidance-transmitter
title: Making of the guidance transmitter
authors: [ jaka-kovac ]
tags: [ 2023 ]
---

Today we'll write about how we made on-ground transmitters for the direction of our CanSat to the target landing location.

{/*truncate */}

To begin with, let's explain our system in more detail. We will position 3 transmitters to known locations in advance of the takeoff. Because they all will transmit FM signal on the same frequency only one will get correctly received. Assume that is the signal transmitted by the closest transmitter. We want to go towards the target, so we have to push our can away from the transmitter.

Since all locations of the transmitters will be chosen in advance and will be programmed in the controller we calculate the azimuth of the trust. With the help of the onboard compass, we can determine what power each of the 3 guiding motors has to move at.

We devised our work into 3 parts.



<details>
    <summary>Part 1 - Design internal circuitry for pulse generation</summary>

    Once it was inevitable to use a transmitter, we immediately started planning our form of signal. We had 3 main ideas, either 3 distinct ASCII letters, 3 binary digits (like 1010 1010, 1100 1100, 1111 0000), or a square wave at 3 different frequencies. We decided on the latter because it's easy to generate even without a microcontroller (more on that note later) and has a hardware pulse counter. Hopefully, it won't hog the processor. The frequencies chosen were 600 Hz, 800 Hz and 1000 Hz; which is way less than a maximum of 40 MHz.

    Since we want to have the ground transmitter done we still decided to use Arduino Nano as the signal source, but have plans to migrate to a 555-timer circuit if we end up with enough time.

    To power everything we decided to use REV batteries with XT30 plug as we have multiple of them from another competition (https://firstglobal.si/). They output 12 V which means we can directly power the Arduino with it. With DIP switches you can select what frequency it transmits. We didn't yet know what we'll use for the radio transmitter, so we made our output signal line level (amplitude is 1 V) and we added a voltage divider to lower Arduino's 5 V to 1 V.

    The circuit is accessible [here](circuit.png) and the code is [here](pcnt.h).
</details>


<details>
    <summary>Part 2 - Design antenna</summary>

    2nd big part of the work was to design an antenna. First, we tried a dipole. It worked, tho range was an obvious problem. We decided to build something more directional. Yagi-Uda antennas are perfect for that. We build dual polarised Yagi-Uda antenna since then it's less important how it's directed.

    We model our antenna in MMANA software since it's quite simple to use, has many tutorials online and for what we needed is free to use. The model can be found [here](antenna.png). The 3D emission diagram is found [here](emission.png). We will build it out of measuring tape, PVC pipe, hot glue and zip ties.
</details>

<details>
    <summary>Part 3 - Choose the right transmitter</summary>

    We chose SYN115 since that's what we already had on hand. 
</details>
