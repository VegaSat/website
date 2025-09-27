---
slug: testing-our-cansat
title: Testing our cansat
authors: [ lovro-govekar ]
tags: [ 2023 ]
---

On Tuesday, 20. 6. our team visited the Aerodium vertical wind tunnel in Logatec, who have kindly allowed us to test our CanSat in their facility. Our parachute performed exceptionally well, but unfortunately, we ran into some issues with the battery so we couldn’t test our motors.

{/* truncate */}
![Team member holding cansat in wind tunnel](IMG_2114.jpg)
![Team picture 1](IMG_2129.jpg)
![Team picture 1](IMG_2137.jpg)

The next day, we went on a trip to a military air base near Cerklje ob Krki, intending to test our locator and guidance systems, as well as the primary mission hardware and software. The test started off quite badly, as the L293D IC controlling our motors died and we had no spares, so we had no guidance.
![Military officer helipg us fix our cansat](IMG_2143.jpg)

With that in mind, we set off to ascend to a kilometer aboard a Bell 206 helicopter of the Slovenian army. With help from two very kind soldiers, we successfully dropped the CanSat. Due to its small size, we were, unfortunately, unable to watch it descend.
![Team member standing with our cansat v1 the last time we saw it](IMG_2154.jpg)

Here is where the real trouble began. Due to a malfunction in the ground station antenna, we received no data from the CanSat during its flight. But OK, it's a missed opportunity for a proper test, or so we thought. The bad news didn't end there. As we set off to recover our CanSat, we quickly realized the transmitter onboard had stopped transmitting. We had no way to find our CanSat using radios, and after three hours of sweeping the airfield, we gave up. We concluded that the antenna on the APC220 transmitter must have broken off during the harsh landing.
![A person driving a car on inactive runway looking for our cansat in the surrounding fields](20230621_151904.jpg)

We are now left without a CanSat, four days before we leave for Spain. But we will make it, we always have. This experience taught us many important lessons, which we are taking into consideration as we build CanSat #2. Our design has changed. Instead of four horizontal PCBs, which needed to be inter-connected, introducing multiple points of failure, we designed two vertical PCBs, independent of each other, thus reducing many points where our CanSat could fail. Besides getting rid of janky connections between PCBs, we also repositioned our antenna so that it takes up less space and can be additionally braced and reinforced. We also put the buzzer on a separate PCB, with its own battery. The motors now also have a switch to turn them off during testing.
![Messy workspace after rebuilding cansat in a day](20230622_131249.jpg)

Despite our bad luck yesterday, we'd like to thank both Aerodium Logatec and the Slovenian army for helping us with our tests and teaching us many important lessons.
