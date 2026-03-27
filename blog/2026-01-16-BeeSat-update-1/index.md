---
title: Naš CanSat počasi nastaja
slug: nas-cansat-pocasi-nastaja
authors: [lin-cadez, jure-grcar]
tags: [2026-beesat]
image: /img/beesat/cansat-development2.png
---

Naš CanSat je zasnovan kot modularna enota, ki omogoča zbiranje atmosferskih
podatkov in izvedbo avtonomnega pristanka. Večina strukture je izdelana s
3D-tiskanjem, saj ta način izdelave omogoča enostavno proizvodnjo, nizko maso in
hitro izdelavo novih prototipov.
<hr></hr>

<!-- truncate -->
<div class="sideBySide">
<img src="/img/beesat/3dmodel.png"></img>

# Sestava CanSata
Naš CanSat je v osnovi samo zložljiv FPV dron. Če bi želeli bi ga lahko upravljali celo z daljincem za drone. 
CanSat je sestavljen iz treh ločenih delov. V spodnjem delu so nameščene elektronske
komponente. V srednjem delu je prostor, skozi katerega tečejo vse žice in kamor se med vzponom zložijo ročice drona, ki držijo motorčke. V zadnjem, zgornjem delu se nahaja ta GPS modul in servo motor, ki aktivira spustitev ročic.
</div>

# Razporeditev komponent
Komponente so razporejene vertikalno znotraj strukture. Kot že prej omenjeno - v zgornjem delu je nameščen
servo mehanizem za postavitev ročic drona v položaj letenja. Pod njim se nahajata flight controller (FC) in electronic speed controller (ESC), ki sta odgovorna za delovanje in napajanje motorčkov. Čisto na dnu se nahaja baterija, pod njo pa še naš PCB, ki je bil izdelan po meri in RF modulom.

# Dimenzije in materiali
Ohišje je cilindrične oblike s premerom 66 mm in višino 115mm, kar je skladno z omejitvami
tekmovanja. CanSat je sestavljen iz treh delov, natisnjenih iz PLA plastike, ki so med seboj povezanih s kovinskimi vijaki.
