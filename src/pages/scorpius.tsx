import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './scorpius.css'

const missionBlocks = [
	{
		title: 'Delovanje merilnih senzorjev in telemetrije',
		detail:
			'Zanesljivo merjenje višine, tlaka, temperature, pospeškov, orientacije in GPS položaja ter pošiljanje prioritetnih telemetričnih podatkov na zemeljsko postajo.',
	},
	{
		title: 'Regenerativno pridobivanje električne energije',
		detail:
			'Merjenje napetosti in toka aerodinamičnega generatorja med spustom ter ocena, ali je pridobivanje energije iz gibanja zraka pri majhnih sistemih smiselno.',
	},
	{
		title: 'Varen in sleden pristanek',
		detail:
			'Jadralno padalo, krmiljeno s servo motorjem, omogoča stabilen spust, lažjo najdbo CanSata in pristajanje čim bližje ciljni točki.',
	},
]

const technology = [
	{
		title: 'Električna zasnova',
		detail:
			'Napajanje temelji na LiPo 2S (7,4 V), regulator AP63203 zagotavlja 3,3 V za elektroniko, U3V16F5 pa 5 V za servo motor. Sistem vključuje zaščito pred previsoko napetostjo generatorja.',
	},
	{
		title: 'Programska oprema',
		detail:
			'ESP32 izvaja inicializacijo, merjenje, filtriranje, beleženje, telemetrijo in krmiljenje padala. Uporablja se watchdog in transakcijski zapis z checksum za odpornost ob napakah.',
	},
	{
		title: 'RF povezava',
		detail:
			'Digi XBee XR 868 uporablja ISM pas 868 MHz in DigiMesh za zanesljivo dvosmerno komunikacijo. Podatkovna hitrost do 50 kbit/s omogoča telemetrijo v realnem času.',
	},
	{
		title: 'Sistem za obnovitev',
		detail:
			'Jadralno padalo iz ripstop najlona ustvarja vzgon in ne le zračni upor, zato CanSat ne pada navpično, temveč kontrolirano drsi proti območju pristanka.',
	},
]

const flightTimeline = [
	{ phase: '1. UVOD', description: 'Cilji odprave in znanstveno ozadje sekundarne misije pridobivanja energije.' },
	{ phase: '2. OPIS CANSATA', description: 'Oris odprave, električna zasnova, programska oprema, obnovitev in zemeljska postaja.' },
	{ phase: '3. NAČRTOVANJE PROJEKTA', description: 'Časovni načrt priprave CanSata, razdelitev vlog in tedensko usklajevanje ekipe.' },
	{ phase: '4. TESTIRANJE', description: 'Test padala, test vetrnega generatorja in načrt nadaljnjih integracijskih testov.' },
	{ phase: '5. NAČRT OBVEŠČANJA', description: 'Instagram, blog, predstavitve v živo in povezovanje z drugimi CanSat ekipami.' },
]

const team = [
	{ role: 'Ime ekipe', name: 'ScorpiusSat' },
	{ role: 'Mentor(ja)', name: 'Ema Škerl, Aleks Turk' },
	{ role: 'Tia', name: 'Vodja ekipe' },
	{ role: 'Neža', name: 'Programerka, 3D modeliranje' },
	{ role: 'Samo', name: 'Oblikovanje padala, ogrodja, antene' },
	{ role: 'Voranc', name: 'Iskanje komponent, elektrotehnik' },
	{ role: 'Luka', name: 'Programer, PR' },
]

const blogs = [
	{
		title: 'Blog 1: Začetek letošnjega CanSat projekta ScorpiusSat',
		detail:
			'V letošnjem letu smo se kot ekipa ScorpiusSat lotili izziva CanSat tekmovanja. Naš glavni cilj je bil razviti majhen satelit, ki med spuščanjem z višine meri atmosferske parametre in preizkusi sekundarno misijo regenerativnega pridobivanja električne energije. Vloge smo jasno razdelili, redna tedenska srečanja in komunikacija prek Discorda pa so omogočili napredek po načrtu.',
	},
	{
		title: 'Blog 2: Kako delamo na CanSatu',
		detail:
			'Naše delo temelji na kombinaciji mehanskega in elektronskega razvoja. Ohišje je iz steklenih vlaken, notranjost pa je na 3D tiskanih ABS nosilcih. Elektronski sistem z ESP32 zbira podatke senzorjev in krmili servo motor padala, telemetrija pa poteka prek Digi XBee modula 868 MHz. Programska oprema uporablja modularni večnitni pristop z varnostnimi mehanizmi.',
	},
	{
		title: 'Blog 3: Sekundarna misija – regenerativni vetrni generator',
		detail:
			'Sekundarna misija preizkuša pridobivanje električne energije med spustom. Na spodnji del satelita smo namestili OT3569 vetrni generator, ki kinetično energijo zraka pretvarja v električno. Merimo odvisnost moči od hitrosti vrtenja in gostote zraka, hkrati pa vpliv oblike padala in konfiguracije propelerja na stabilnost in izkoristek. Do zdaj smo izmerili do 8 V napetosti.',
	},
	{
		title: 'Blog 4: Naročilo PCB in izdelava elektronike',
		detail:
			'Za CanSat smo razvili lasten PCB, ki povezuje senzorje, generator in telemetrijski modul. Izbrali smo FR-4 laminat, predvideli pa tudi možnost fleksibilnih PCB-jev. Sistem vključuje stabilizacijo napetosti, zaščito pred previsoko napetostjo iz sekundarne misije ter merjenje toka in napetosti za spremljanje proizvodnje energije. Po naročilu PCB smo izvedli integracijske teste povezav in kompatibilnosti.',
	},
	{
		title: 'Blog 5: Kmalu',
		detail: 'Peti blog ekipe ScorpiusSat bo objavljen kmalu.',
	},
]

function ScorpiusSceneWrapper() {
	return (
		<BrowserOnly fallback={<div style={{ minHeight: 300 }} />}>
			{() => {
				const CansatScene = require('../components/scorpiusScene').default;
				return <CansatScene />;
			}}
		</BrowserOnly>
	);
}

export default function ScorpiusPage() {
	return (
		<div className="page">
			<ScorpiusSceneWrapper />
			<div className="grid-overlay" aria-hidden="true" />

			<header className="nav">
				<div className="brand">
					<img src="/img/scorpius/SCORPIUS-Logo-constellation-WHITE.svg" alt="Scorpius logo" />
					<span>SCORPIUS</span>
				</div>
				<div className="nav-links">
					<a href="#hero">Uvod</a>
					<a href="#who">Cilji</a>
					<a href="#mission">Odprava</a>
					<a href="#technology">Zasnova</a>
					<a href="#timeline">Kazalo</a>
					<a href="#philosophy">Načrtovanje</a>
					<a href="#team">Ekipa</a>
					<a href="#landing">Testiranje</a>
					<a href="#blogs">Blogi</a>
				</div>
			</header>

			<main>
				<section className="section hero" id="hero">
					<div className="section-content">
						<p className="eyebrow">CANSAT 2026</p>
						<img className="hero-title" src="/img/scorpisu/SCORPIUS-Title-detailed-COLORED.svg" alt="SCORPIUS" />
						<p className="lede">CanSat ekipa ScorpiusSat: zanesljiv spust, natančne meritve in varna obnovitev.</p>
						<div className="tags">
							<span>Ime ekipe: ScorpiusSat</span>
							<span>Mentor(ja): Ema Škerl, Aleks Turk</span>
							<span>Primarna + sekundarna misija</span>
						</div>
					</div>
					<img className="hero-stars" src="/img/scorpius/SCORPIUS-Stars-COLORED.svg" alt="" aria-hidden="true" />
				</section>

				<section className="section" id="who">
					<div className="section-content">
						<p className="eyebrow">UVOD</p>
						<h2>Cilji odprave: zanesljiva telemetrija, ocena proizvedene energije in varen pristanek sistema.</h2>
						<p className="body">
							Sekundarna misija temelji na uporabi propelerja kot aerodinamičnega generatorja, ki med spuščanjem
							pretvarja del kinetične energije zraka v električno energijo. Raziskava preverja povezavo med pogoji
							spusta, proizvedeno električno močjo in stabilnostjo sistema.
						</p>

						<div className="card-stack">
							<div className="stat-card">
								<h3 aria-label="1000 metrov">1000 m</h3>
								<p>načrtovana višina spusta za analizo vedenja sistema v realnih pogojih.</p>
							</div>
							<div className="stat-card">
								<h3>~167 s</h3>
								<p>ocenjen čas spuščanja pri navpični hitrosti približno 6 m/s.</p>
							</div>
							<div className="stat-card">
								<h3>~8 V</h3>
								<p>izmerjena napetost vetrnega generatorja v začetnem testiranju v šoli.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="section cards" id="mission">
					<div className="section-content">
						<p className="eyebrow">OPIS CANSATA</p>
						<h2>Primarna in sekundarna misija z usmerjenim jadralnim padalom in sprotnim merjenjem.</h2>
						<div className="card-grid">
							{missionBlocks.map((item) => (
								<article key={item.title} className="panel">
									<h3>{item.title}</h3>
									<p>{item.detail}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="section tech" id="technology">
					<div className="section-content">
						<p className="eyebrow">TEHNIČNA ZASNOVA</p>
						<h2>Elektronika, programska oprema in RF povezava za robustno delovanje med spustom.</h2>
						<div className="tech-grid">
							{technology.map((item) => (
								<article key={item.title} className="panel">
									<p className="label">{item.title}</p>
									<p>{item.detail}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="section timeline" id="timeline">
					<div className="section-content">
						<p className="eyebrow">KAZALO VSEBINE</p>
						<h2>Struktura poročila od uvoda do načrta obveščanja.</h2>
						<ol className="timeline-list">
							{flightTimeline.map((item, index) => (
								<li key={item.phase}>
									<div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
									<div>
										<p className="label">{item.phase}</p>
										<p>{item.description}</p>
									</div>
								</li>
							))}
						</ol>
					</div>
				</section>

				<section className="section philosophy" id="philosophy">
					<div className="section-content narrow">
						<p className="eyebrow">NAČRTOVANJE PROJEKTA</p>
						<h2>Jasna razdelitev vlog, tedenski sestanki in sprotno prilagajanje časovnice.</h2>
						<p className="body">
							Ekipa uporablja ganttov diagram, redno komunicira prek Discorda in izvaja fazni razvoj: od zasnove
							sekundarne misije in nabave komponent do izdelave prototipov, testiranja podsistemov ter priprave
							tehničnega poročila in aktivnosti za obveščanje javnosti.
						</p>
					</div>
				</section>

				<section className="section team" id="team">
					<div className="section-content">
						<p className="eyebrow">EKIPA</p>
						<h2>Posodobljeni podatki ekipe ScorpiusSat.</h2>
						<div className="card-grid">
							{team.map((member) => (
								<article key={member.role} className="panel">
									<p className="label">{member.role}</p>
									<p>{member.name}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="section landing" id="landing">
					<div className="section-content">
						<p className="eyebrow">TESTIRANJE IN OBVEŠČANJE</p>
						<h2>Padalo, vetrni generator in načrt komunikacije z javnostjo.</h2>
						<p className="body">
							Izvedeni so bili začetni testi padala in generatorja, sledijo integracijski testi elektronike,
							komunikacije in programske opreme. Za obveščanje uporabljamo Instagram, blog, predstavitve na dogodkih
							ter povezovanje z drugimi CanSat ekipami in osnovnimi šolami.
						</p>
						<div className="cta">
							<button type="button">Poglej načrt testiranj</button>
							<button type="button" onClick={() => (window.location.hash = 'blogs')}>
								Preberi naše bloge
							</button>
							<button type="button" className="ghost">
								Spremljaj obveščanje ekipe
							</button>
						</div>
					</div>
				</section>

				<section className="section cards" id="blogs">
					<div className="section-content">
						<p className="eyebrow">BLOGI</p>
						<h2>Preberi naše bloge o razvoju CanSata ScorpiusSat.</h2>
						<div className="card-grid">
							{blogs.map((blog) => (
								<article key={blog.title} className="panel">
									<h3>{blog.title}</h3>
									<p>{blog.detail}</p>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
