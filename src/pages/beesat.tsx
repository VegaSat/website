export default function BeeSat() {
  return (
    <html lang="sl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BeeSat — CanSat Slovenija 2025</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header class="site-header">
          <div class="header-inner">
            <a href="#" class="logo">
              <span class="logo-text">Bee<span class="logo-primary">Sat</span></span>
            </a>
            <nav class="site-nav">
              <a href="#misija" class="nav-link">Misija</a>
              <a href="#tehnologija" class="nav-link">Tehnologija</a>
              <a href="#casovnica" class="nav-link">Časovnica</a>
              <a href="#blog" class="nav-link">Blog</a>
            </nav>
            <a
              href="https://www.instagram.com/team.beesat/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-small"
            >
              Instagram
            </a>
          </div>
        </header>

        <main class="page">
          <section class="hero">
            <div class="hero-bg"></div>
            <div class="hero-content">
              <div class="badge">
                <span class="badge-dot"></span>
                <span class="badge-text">CanSat Slovenija 2025</span>
              </div>
              <h1 class="hero-title">
                <span>Bee<span class="logo-primary">Sat</span></span>
              </h1>
              <p class="hero-subtitle">Avtonomni pristanek. Brez padala.</p>
              <p class="hero-lead">
                Razvijamo inovativen CanSat, ki se ob padanju spremeni v avtonomni dron in varno
                pristane na določeno lokacijo. Revolucija v tehnologiji avtonomnega pristanka satelitov.
              </p>
              <div class="hero-actions">
                <a href="#misija" class="btn btn-primary">Naša misija</a>
                <a
                  href="https://www.instagram.com/team.beesat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline"
                >
                  Sledite nam
                </a>
              </div>
            </div>
          </section>

          <section id="misija" class="section">
            <div class="container">
              <div class="section-header">
                <span class="section-kicker">Naša misija</span>
                <h2 class="section-title">Drugačen način pristanka</h2>
                <p class="section-text">
                  Naša odprava je zasnovana kot dvostopenjska misija z uporabo CanSat-a, ki združuje
                  zbiranje atmosferskih podatkov in avtonomno pristajanje na določeno lokacijo.
                </p>
              </div>

              <div class="grid cards">
                <div class="card">
                  <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket w-6 h-6 text-primary"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div>
                  <h3>Avtonomni pristanek</h3>
                  <p>
                    Po izpustu servo mehanizem sproži odpiranje ročic z motorji, ki spremenijo
                    CanSat v popolnoma avtonomni dron.
                  </p>
                </div>
                <div class="card">
                  <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-6 h-6 text-primary"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
                  <h3>Natančna navigacija</h3>
                  <p>
                    GPS modul Beitian BN-180 in barometrični senzor BME680 zagotavljata
                    natančno določanje lokacije in višine.
                  </p>
                </div>
                <div class="card">
                  <div class="card-icon"><div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu w-6 h-6 text-primary"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg></div></div>
                  <h3>Modularna zasnova</h3>
                  <p>
                    ESP32 mikrokontroler, PCB po meri in flight controller Speedy Bee 405 V5
                    omogočajo enostavno nadgradnjo sistema.
                  </p>
                </div>
                <div class="card">
                  <div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio w-6 h-6 text-primary"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg></div>
                  <h3>Telemetrija v realnem času</h3>
                  <p>
                    RF modul APC220 na 70cm bandu prenaša podatke na zemeljsko postajo z dinamičnim
                    sistemom za boljši sprejem signala.
                  </p>
                </div>
              </div>

              <div class="grid stats">
                <div class="stat">
                  <div class="stat-value">~1000m</div>
                  <div class="stat-label">Višina izpusta</div>
                </div>
                <div class="stat">
                  <div class="stat-value">70cm</div>
                  <div class="stat-label">RF band</div>
                </div>
                <div class="stat">
                  <div class="stat-value">90-120s</div>
                  <div class="stat-label">Čas padanja</div>
                </div>
              </div>
            </div>
          </section>

          <section id="tehnologija" class="section section-alt">
            <div class="container">
              <div class="section-header">
                <span class="section-kicker">Tehnologija</span>
                <h2 class="section-title">Napredna tehnična zasnova</h2>
                <p class="section-text">
                  Modularna arhitektura temelji na kombinaciji ESP32 mikrokontrolerja, PCB-ja
                  izdelanega po meri in flight controllerja za stabilno avtonomno letenje.
                </p>
              </div>

              <div class="grid tech-grid">
                <div class="spec">
                  <h3>Krmilni sistem</h3>
                  <div class="spec-row">
                    <span>Mikrokontroler</span>
                    <strong>ESP32</strong>
                  </div>
                  <div class="spec-row">
                    <span>Flight Controller</span>
                    <strong>Speedy Bee 405 V5</strong>
                  </div>
                  <div class="spec-row">
                    <span>ESC</span>
                    <strong>OX3255A</strong>
                  </div>
                  <div class="spec-row">
                    <span>Motorji</span>
                    <strong>XSpeed 12 magnetov, 5500 rpm</strong>
                  </div>
                </div>
                <div class="spec">
                  <h3>Senzorji</h3>
                  <div class="spec-row">
                    <span>GPS modula</span>
                    <strong>2x Beitian BN-180</strong>
                  </div>
                  <div class="spec-row">
                    <span>Barometer</span>
                    <strong>BME680</strong>
                  </div>
                  <div class="spec-row">
                    <span>Meritve</span>
                    <strong>Tlak, višina, pozicija</strong>
                  </div>
                </div>
                <div class="spec">
                  <h3>Komunikacija</h3>
                  <div class="spec-row">
                    <span>RF modul</span>
                    <strong>APC220</strong>
                  </div>
                  <div class="spec-row">
                    <span>Band</span>
                    <strong>70cm</strong>
                  </div>
                  <div class="spec-row">
                    <span>Hitrost</span>
                    <strong>Do 19200 bps</strong>
                  </div>
                  <div class="spec-row">
                    <span>Sprejem signala</span>
                    <strong>Dinamičen sistem</strong>
                  </div>
                </div>
                <div class="spec">
                  <h3>Napajanje</h3>
                  <div class="spec-row">
                    <span>Glavna baterija</span>
                    <strong>4S Li-Po 850mAh</strong>
                  </div>
                  <div class="spec-row">
                    <span>Napetost</span>
                    <strong>12V - 16.8V</strong>
                  </div>
                  <div class="spec-row">
                    <span>Rezervna</span>
                    <strong>Coin cell baterija</strong>
                  </div>
                </div>
              </div>

              <div class="software">
                <h3>Programska oprema</h3>
                <div class="grid software-grid">
                  <div>
                    <h4>CanSat programska oprema</h4>
                    <p>
                      C++ koda na ESP32 mikrokontrolerju omogoča neprekinjeno zbiranje
                      senzorskih podatkov, prenos telemetrije in sprožitev
                      avtonomnega letalnega sistema ob zaznavi prostega padanja.
                    </p>
                    <div class="tags">
                      <span class="tag">C++</span>
                      <span class="tag">Arduino IDE</span>
                      <span class="tag">PlatformIO</span>
                    </div>
                  </div>
                  <div>
                    <h4>Zemeljska postaja</h4>
                    <p>
                      Java aplikacija z grafičnim vmesnikom (GUI) za sprejem in obdelavo
                      podatkov, prikaz telemetrije v realnem času ter izvoz v CSV format za nadaljnjo
                      analizo.
                    </p>
                    <div class="tags">
                      <span class="tag">Java</span>
                      <span class="tag">GUI</span>
                      <span class="tag">CSV Export</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="casovnica" class="section">
            <div class="container narrow">
              <div class="section-header">
                <span class="section-kicker">Časovnica</span>
                <h2 class="section-title">Potek projekta</h2>
                <p class="section-text">
                  Spremljajte napredek našega CanSat projekta od začetne zasnove do končne izvedbe.
                </p>
              </div>

              <div class="timeline">
                <div class="timeline-line"></div>

                <div class="timeline-item">
                  <span class="timeline-dot"></span>
                  <div class="timeline-card complete">
                    <span class="timeline-kicker">Faza 1</span>
                    <h3>Zasnova in načrtovanje</h3>
                    <p>Definicija misije in arhitekture sistema.</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot"></span>
                  <div class="timeline-card complete">
                    <span class="timeline-kicker">Faza 2</span>
                    <h3>Konceptualiziranje sistema (avtonomni pristanek)</h3>
                    <p>
                      Brez padala, ročice z motorji, ideja drona.
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot"></span>
                  <div class="timeline-card complete">
                    <span class="timeline-kicker">Faza 3</span>
                    <h3>Zasnova in izdelava PCB v1</h3>
                    <p>
                      Okrogel PCB z vsemi potrebnimi komponentami in povezavami.
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot complete"></span>
                  <div class="timeline-card complete">
                    <span class="timeline-kicker">Faza 4</span>
                    <h3>3D zasnova ohišja</h3>
                    <p>
                      3D modeliranje ohišja pravih dimenzij. Reševanje prostorskih težav.
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot complete"></span>
                  <div class="timeline-card complete">
                    <span class="timeline-kicker">Faza 5</span>
                    <h3>Načrt zemeljske postaje<h3>
                    <p>
                      Načrt in izdelava zemeljske postaje. ESP32, RF modul in rotator antene. Izdelava GUI-ja.
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot active"></span>
                  <div class="timeline-card active">
                    <span class="timeline-kicker">Faza 6</span>
                    <h3>Test osnovnega leta drona</h3>
                    <p>Stabilen let drona v testnem ohišju.</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot muted"></span>
                  <div class="timeline-card">
                    <span class="timeline-kicker">Faza 7</span>
                    <h3>Zasnova in izdelava PCB v2<h3>
                    <p>
                      Prilagoditec PCB-ja na prostorske omejitve, preureditev razporeditve komponent.
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <span class="timeline-dot muted"></span>
                  <div class="timeline-card">
                    <span class="timeline-kicker">Faza 8</span>
                    <h3>Test detekcije prostega pada<h3>
                    <p>
                      Določitev praga za potrditev padanja in odprtje rokic z motorji. 
                    </p>
                  </div>
                </div>

                
                <div class="timeline-item">
                  <span class="timeline-dot muted"></span>
                  <div class="timeline-card">
                    <span class="timeline-kicker">Faza 9</span>
                    <h3>Celotni integracijski test<h3>
                    <p>
                      Test pod realnimi pogoji. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="blog" class="section">
            <div class="container">
              <div class="section-header">
                <span class="section-kicker">Novice</span>
                <h2 class="section-title">Blog</h2>
                <p class="section-text">Spremljajte naš napredek in najnovejše novice o projektu BeeSat.</p>
              </div>

              <article class="blog-card">
                <div class="blog-media">
                  <img src="/img/beesat/cansat-development2.png" alt="Razvoj CanSat - 3D modeliranje" />
                </div>
                <div class="blog-body">
                  <div class="blog-meta">Januar 2026</div>
                  <h3>Naš CanSat počasi nastaja</h3>
                  <p>
                    Spoznajte modularno zasnovo našega CanSata, 3D-tiskanje ohišja in razporeditev
                    elektronskih komponent.
                  </p>
                  <a href="/blog/nas-cansat-pocasi-nastaja" class="blog-link">Preberi več</a>
                </div>
              </article>
            </div>
          </section>

        </main>

        <footer class="site-footer">
          <div class="footer-inner">
            <div>
              <a href="#" class="logo">
                <span class="logo-text">Bee</span>
                <span class="logo-text logo-primary">Sat</span>
              </a>
              <p class="footer-text">CanSat Slovenija 2025</p>
            </div>
            <nav class="footer-nav">
              <a href="#misija">Misija</a>
              <a href="#tehnologija">Tehnologija</a>
              <a href="#casovnica">Časovnica</a>
            </nav>
            <a
              href="https://www.instagram.com/team.beesat/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link"
            >
              @team.beesat
            </a>
          </div>
          <div class="footer-bottom">
            <p>© 2026 Ekipa BeeSat. Vsi pravice pridržane.</p>
            <p>Projekt je del tekmovanja CanSat Slovenija, ki ga organizira ESERO Slovenija.</p>
          </div>
        </footer>
      </body>
    </html>);
};
