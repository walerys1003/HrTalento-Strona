import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { raw } from 'hono/html'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Serve static assets (CSS, portal screenshots, founder photo) from /static/*
app.use('/static/*', serveStatic({ root: './public' }))

const BODY = /* html */ `
<a href="#top" class="skip-link">Przejdź do treści</a>

<!-- ============ NAV ============ -->
<nav class="nav" role="navigation" aria-label="Główna">
  <div class="nav-inner">
    <a class="brand" href="#top">
      <div class="mono-mark"><span>HR</span><span>T</span></div>
      <div>
        <div class="brand-name"><b>HR</b>/Talento <span style="color:var(--mute)">Group</span></div>
        <div class="brand-sub">Talent infrastructure · PL</div>
      </div>
    </a>
    <div class="nav-links">
      <a href="#manifest"><span>01</span>Manifest</a>
      <a href="#portals"><span>02</span>Portale</a>
      <a href="#engine"><span>03</span>AI Engine</a>
      <a href="#founder"><span>04</span>Founder</a>
      <a href="#roadmap"><span>05</span>Roadmap</a>
    </div>
    <div class="nav-right">
      <div class="live"><span class="live-dot"></span>Live build · Q1 2027</div>
      <a class="btn" href="#cta">Kontakt <span class="btn-arrow">→</span></a>
      <button class="nav-toggle" id="navToggle" aria-label="Otwórz menu" aria-expanded="false" aria-controls="mobileMenu">≡</button>
    </div>
  </div>
</nav>

<!-- ============ MOBILE MENU ============ -->
<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <button class="mm-close" id="mmClose" aria-label="Zamknij menu">✕</button>
  <a href="#manifest"><span>01</span>Manifest</a>
  <a href="#portals"><span>02</span>Portale</a>
  <a href="#engine"><span>03</span>AI Engine</a>
  <a href="#founder"><span>04</span>Founder</a>
  <a href="#roadmap"><span>05</span>Roadmap</a>
  <a class="btn" href="#cta">Kontakt →</a>
</div>

<!-- ============ TICKER ============ -->
<div class="ticker" aria-hidden="true">
  <div class="ticker-track">
    <span><b>◆</b> MED · <em>153 000</em> lekarzy w PL</span>
    <span><b>◆</b> MED · <em>63 dni</em> średni czas obsadzenia</span>
    <span><b>◆</b> TSL · <em>150 000</em> brakujących kierowców</span>
    <span><b>◆</b> TSL · <em>9 500 zł</em> / dzień przestoju</span>
    <span><b>◆</b> DEV · <em>56%</em> firm bez IT</span>
    <span><b>◆</b> DEV · <em>4,5 mies.</em> średnia rekrutacja</span>
    <span><b>◆</b> HORECA · <em>60-70%</em> rotacji rocznie</span>
    <span><b>◆</b> HORECA · <em>30,50 zł</em> brutto/h min.</span>
    <span><b>◆</b> AI PATCH ENGINE v3 · <em>connected</em></span>
    <span><b>◆</b> MED · <em>153 000</em> lekarzy w PL</span>
    <span><b>◆</b> MED · <em>63 dni</em> średni czas obsadzenia</span>
    <span><b>◆</b> TSL · <em>150 000</em> brakujących kierowców</span>
    <span><b>◆</b> TSL · <em>9 500 zł</em> / dzień przestoju</span>
    <span><b>◆</b> DEV · <em>56%</em> firm bez IT</span>
    <span><b>◆</b> DEV · <em>4,5 mies.</em> średnia rekrutacja</span>
    <span><b>◆</b> HORECA · <em>60-70%</em> rotacji rocznie</span>
    <span><b>◆</b> HORECA · <em>30,50 zł</em> brutto/h min.</span>
    <span><b>◆</b> AI PATCH ENGINE v3 · <em>connected</em></span>
  </div>
</div>

<!-- ============ HERO ============ -->
<header id="top" class="hero">
  <div class="wrap">
    <div class="hero-grid">

      <div class="hero-l">
        <div class="eyebrow-row">
          <span class="flag-pl" aria-label="Polska"></span>
          <span class="eyebrow"><b>HR/TALENTO</b> · POLSKI AI-FIRST EKOSYSTEM REKRUTACYJNY</span>
          <span class="eyebrow" style="margin-left:auto">EST. 2026 — LAUNCH Q1 2027</span>
        </div>

        <h1>
          Talent <span class="ital">infrastructure</span><br>
          dla branż, które <span class="highlight">nie mają czasu</span> <span class="sans">na rekrutację.</span>
        </h1>

        <p class="hero-lede">
          Cztery wertykalne portale. Cztery branże w kryzysie kadrowym. Jeden silnik AI.<br>
          <b>HR Talento</b> to nie kolejny job board. To <b>warstwa AI</b> nad rekrutacją medycyny, transportu, IT i HoReCa — branż, w których generyczne portale dawno przestały działać.
        </p>

        <div class="hero-cta">
          <a class="btn" href="#portals">Zobacz 4 portale <span class="btn-arrow">→</span></a>
          <a class="btn ghost" href="#engine">AI Patch Engine v3 ⌬</a>
        </div>

        <div class="hero-stats">
          <div class="hstat">
            <div class="n" data-count="4">04<sup>×</sup></div>
            <div class="l">Wertykalne<br>portale</div>
          </div>
          <div class="hstat">
            <div class="n" data-count="509">509K<sup>+</sup></div>
            <div class="l">Aktywnych<br>specjalistów (TAM)</div>
          </div>
          <div class="hstat">
            <div class="n">Q1<sup>27</sup></div>
            <div class="l">Production<br>launch all four</div>
          </div>
          <div class="hstat">
            <div class="n">1×</div>
            <div class="l">AI Patch<br>Engine v3</div>
          </div>
        </div>
      </div>

      <!-- Hero right: Editorial brief card -->
      <aside class="hero-r">
        <div class="brief">
          <div class="brief-h">
            <span class="lab">Project brief · v1.0</span>
            <span class="id">PRJ-HRT-2026-Q4</span>
          </div>
          <div class="brief-row"><span class="k">Type</span><span class="v">AI-first vertical recruitment ecosystem</span></div>
          <div class="brief-row"><span class="k">Scope</span><span class="v"><b>4 portale</b> · <b>4 branże</b> · jeden silnik AI</span></div>
          <div class="brief-row"><span class="k">Thesis</span><span class="v">Generyczne portale (Pracuj, OLX, NoFluff) <em>nie skalują się w niszach</em>, w których czas obsadzenia &gt; 45 dni i koszt rotacji liczony w setkach tysięcy.</span></div>
          <div class="brief-row"><span class="k">Stack</span><span class="v">Next.js · RAG · LLM matching · GeoLocation · GitHub · NIL · CDL</span></div>
          <div class="brief-row"><span class="k">Status</span><span class="v"><b>W budowie</b> · alpha builds aktywne · launch Q1 2027</span></div>
          <div class="brief-foot">
            <span>Last sync 28.06.26 · 14:32 UTC</span>
            <span>● Active</span>
          </div>
        </div>

        <div class="diagram">
          <div class="diagram-h"><span>Dystrybucja zapytań · ostatnie 30 dni</span><b>● LIVE</b></div>
          <div class="dia-node"><div class="l"><i></i> MedTalento.pl</div><span class="pct">34.2%</span></div>
          <div class="dia-flow">│</div>
          <div class="dia-node"><div class="l"><i></i> TSLTalento.pl</div><span class="pct">21.7%</span></div>
          <div class="dia-flow">│</div>
          <div class="dia-node"><div class="l"><i></i> DevTalento.pl</div><span class="pct">28.4%</span></div>
          <div class="dia-flow">│</div>
          <div class="dia-node"><div class="l"><i></i> HoReCaTalento.pl</div><span class="pct">15.7%</span></div>
          <div class="dia-flow">│ ▼</div>
          <div class="dia-node eng"><div class="l"><i></i> AI PATCH ENGINE v3</div><span class="pct">100%</span></div>
        </div>
      </aside>

    </div>
  </div>
</header>

<!-- ============ MANIFEST ============ -->
<section class="manifest" id="manifest">
  <div class="wrap">
    <div class="manifest-grid">
      <div>
        <div class="label">Manifest · 01</div>
        <div class="eyebrow" style="margin-top:24px">Wspólny mianownik</div>
      </div>
      <div>
        <h2>
          Cztery różne branże. <em>Ten sam problem —</em>
          <span class="lim">za wolno,</span>
          <span class="lim">za drogo,</span>
          <span class="lim">za mało precyzyjnie.</span>
        </h2>
      </div>
    </div>

    <div class="manifest-foot">
      <div class="mf-item">
        <div class="n">/ 01</div>
        <h4>Nie konkurujemy z Pracuj.pl.</h4>
        <p>Generyczne agregatory traktują kierowcę C+E tak samo jak juniora marketingu. Wertykalizacja to nasz fundament — każdy portal mówi językiem swojej branży, rozumie jej certyfikaty, zmianowość i strukturę kosztu.</p>
      </div>
      <div class="mf-item">
        <div class="n">/ 02</div>
        <h4>AI nie jako buzzword. AI jako warstwa.</h4>
        <p>Semantyczne dopasowanie kandydat→oferta, RAG na CV i opisach stanowisk, konwersacyjne wyszukiwanie. Wszystko zbudowane na własnym silniku <b>AI Patch Engine v3</b> — wspólnym dla czterech portali.</p>
      </div>
      <div class="mf-item">
        <div class="n">/ 03</div>
        <h4>Bezpośredni dostęp.</h4>
        <p>Zero pośrednictwa „prowizja 25% rocznej pensji”. Pracodawca rozmawia z kandydatem — algorytm tylko podstawia <em>właściwych</em> kandydatów na pierwszej stronie.</p>
      </div>
      <div class="mf-item">
        <div class="n">/ 04</div>
        <h4>Polska, 2027.</h4>
        <p>Budujemy infrastrukturę talentu dla polskiego rynku — z danymi NIL, TLP, raportami MFR. To nie kopia Indeed. To produkt zbudowany w Krakowie, na potrzeby polskich szpitali, restauracji, software house'ów i firm transportowych.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ MARQUEE ============ -->
<div class="marq" aria-hidden="true">
  <div class="marq-track">
    <span>AI-first</span><span class="dot"></span>
    <span><em>Polska 2027</em></span><span class="dot"></span>
    <span>HR infrastructure</span><span class="dot"></span>
    <span><em>4 verticals · 1 engine</em></span><span class="dot"></span>
    <span>Built in Kraków</span><span class="dot"></span>
    <span>AI-first</span><span class="dot"></span>
    <span><em>Polska 2027</em></span><span class="dot"></span>
    <span>HR infrastructure</span><span class="dot"></span>
    <span><em>4 verticals · 1 engine</em></span><span class="dot"></span>
    <span>Built in Kraków</span><span class="dot"></span>
  </div>
</div>

<!-- ============ THE FOUR — PORTALS ============ -->
<section class="portals" id="portals">

  <div class="section-head">
    <div class="wrap">
      <div class="section-head-row">
        <h3>The Four. <em>Cztery wertykały</em></h3>
        <div class="meta">
          /02 · PORTAL DEEP-DIVE<br>
          <b>4 portale</b> · jeden ekosystem<br>
          launch <b>Q1 2027</b>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== PORTAL 01 — MEDTALENTO ===== -->
  <article class="portal med" data-num="01" id="medtalento">
    <div class="wrap">
      <div class="portal-grid">
        <div class="portal-info">
          <span class="badge"><span class="sym">⌂</span> VERTICAL · 01 / 04 <span class="live-dot"></span></span>
          <div class="accent-bar"></div>
          <h2 class="portal-name">Med<em>Talento</em><span class="tld">.pl</span></h2>
          <div class="portal-url"><span class="live-dot"></span>medtalento.pl · <span style="color:var(--lime)">Q1 2027</span></div>

          <p class="portal-pitch">
            Najtrudniejsza branża w kraju. Pielęgniarki, lekarze, ratownicy, fizjoterapeuci — sektor, w którym wakat to nie KPI, tylko ryzyko utraty kontraktu z NFZ.
          </p>

          <p class="portal-body">
            Polski system ochrony zdrowia operuje na <b>153 tys. aktywnych lekarzy</b> i <b>245 tys. pielęgniarek</b> — i wciąż brakuje <b>150 tys. pielęgniarek</b>, żeby dorównać średniej OECD. Średni czas obsadzenia wakatu medycznego wynosi <b>63 dni</b>, a koszt nieobsadzonego etatu to <b>4 500 – 9 000 zł</b> miesięcznie strat dla placówki. MedTalento.pl to portal zbudowany od zera z myślą o tej rzeczywistości: integracja z bazą NIL, weryfikacja PWZ, oferty dla rezydentów, kontrakty B2B dla lekarzy, dyżury, zastępstwa, pełne etaty.
          </p>

          <div class="portal-stats">
            <div class="pstat"><div class="n">153K<sup>+</sup></div><div class="l">Lekarzy<br>w PL</div></div>
            <div class="pstat"><div class="n">245K<sup>+</sup></div><div class="l">Pielęgniarek<br>aktywnych</div></div>
            <div class="pstat"><div class="n">150K<sup>−</sup></div><div class="l">Brakuje<br>do OECD</div></div>
            <div class="pstat"><div class="n">63<sup>dni</sup></div><div class="l">Średni czas<br>obsadzenia wakatu</div></div>
          </div>

          <div class="portal-features">
            <div class="ft-h">▸ AI features · MedTalento</div>
            <ul>
              <li><b>NIL Sync:</b> automatyczna weryfikacja numeru PWZ i specjalizacji w Naczelnej Izbie Lekarskiej</li>
              <li><b>RAG na ofertach:</b> semantyczne dopasowanie „pediatra · NFZ · Mazowieckie · zmiana nocna”</li>
              <li><b>AI Match Score:</b> ocena 0–100 zgodności kandydat ↔ placówka</li>
              <li><b>Konwersacyjne wyszukiwanie:</b> „pokaż mi dyżury w Krakowie powyżej 120 zł/h”</li>
              <li><b>Resident pipeline:</b> ścieżka dla rezydentów + specjalizacja preferencyjna</li>
              <li><b>Shift planner AI:</b> rekomendacje grafiku dyżurów w oparciu o historię kandydata</li>
            </ul>
          </div>

          <div class="portal-stack">
            <span class="chip acc">Next.js 15</span>
            <span class="chip">RAG</span>
            <span class="chip">NIL API</span>
            <span class="chip">PWZ verify</span>
            <span class="chip">PostgreSQL + pgvector</span>
            <span class="chip">GPT-4o + Claude 3.5</span>
          </div>
        </div>

        <div>
          <div class="portal-media">
            <div class="frame-bar">
              <div class="dots"><i></i><i></i><i></i></div>
              <div class="url-bar">medtalento.pl <b>· production preview</b></div>
              <div class="frame-meta">v0.8 · alpha</div>
            </div>
            <div class="shot full"><picture><source srcset="/static/assets/medtalento.webp" type="image/webp"><img src="/static/assets/medtalento.jpg" alt="Zrzut ekranu portalu MedTalento.pl — panel rekrutera z dopasowaniami AI i pipeline kandydatów medycznych" width="1024" height="496" loading="lazy" decoding="async"></picture></div>
            <div class="overlay">
              <span>● LIVE PREVIEW · medtalento.pl</span>
              <span>AI MATCHING — ENABLED</span>
            </div>
          </div>

          <div class="portal-ai">
            <div class="ai-card">
              <div class="lab"><span>AI · Module 01</span><b>● ACTIVE</b></div>
              <h5>Verified Talent Pool</h5>
              <p>Ponad 4 tys. zweryfikowanych lekarzy z PWZ. Brak pośredników, brak duplikatów, jeden profil = jeden specjalista.</p>
              <div class="pulse"></div>
            </div>
            <div class="ai-card">
              <div class="lab"><span>AI · Module 02</span><b>● ACTIVE</b></div>
              <h5>Time-to-hire ↓ 4×</h5>
              <p>AI matching skraca obsadzanie wakatu z 63 do ~15 dni. Mniejszy koszt nieobsadzonego etatu dla szpitala.</p>
              <div class="pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>

  <!-- ===== PORTAL 02 — TSLTALENTO ===== -->
  <article class="portal tsl" data-num="02" id="tsltalento">
    <div class="wrap">
      <div class="portal-grid reverse">

        <div>
          <div class="portal-media">
            <div class="frame-bar">
              <div class="dots"><i></i><i></i><i></i></div>
              <div class="url-bar">tsltalento.pl <b>· production preview</b></div>
              <div class="frame-meta">v0.7 · alpha</div>
            </div>
            <div class="shot"><picture><source srcset="/static/assets/tsltalento.webp" type="image/webp"><img src="/static/assets/tsltalento.jpg" alt="Zrzut ekranu portalu TSLTalento.pl — mobilny widok ofert pracy dla kierowców z dopasowaniem geolokalizacyjnym" width="1024" height="496" loading="lazy" decoding="async"></picture></div>
            <div class="overlay">
              <span>● 4 287 OFERT · 1 247 FIRM</span>
              <span>QUICK APPLY · 1 CLICK</span>
            </div>
          </div>

          <div class="portal-ai">
            <div class="ai-card">
              <div class="lab"><span>AI · Module 03</span><b>● ACTIVE</b></div>
              <h5>GeoMatch + Route AI</h5>
              <p>Dopasowanie kierowca ↔ trasa przez geolokację, dostępność CDL, ADR/HDS, system zmianowy 3/1, 4/2 — automatycznie.</p>
              <div class="pulse"></div>
            </div>
            <div class="ai-card">
              <div class="lab"><span>AI · Module 04</span><b>● ACTIVE</b></div>
              <h5>Mobile-first PWA</h5>
              <p>97% kierowców aplikuje z telefonu w trasie. Działa offline, 1-click Apply, formularz pod kciuk.</p>
              <div class="pulse"></div>
            </div>
          </div>
        </div>

        <div class="portal-info">
          <span class="badge"><span class="sym">⊟</span> VERTICAL · 02 / 04 <span class="live-dot"></span></span>
          <div class="accent-bar" style="background:#4A90E2"></div>
          <h2 class="portal-name">TSL<em>Talento</em><span class="tld">.pl</span></h2>
          <div class="portal-url"><span class="live-dot"></span>tsltalento.pl · <span style="color:var(--lime)">Q1 2027</span></div>

          <p class="portal-pitch">
            „Zarabiaj więcej. Jedź tam, gdzie chcesz.” Portal pracy zbudowany pod kciuk kierowcy, nie pod biurko HR-owca.
          </p>

          <p class="portal-body">
            Polska transportowa to <b>największy europejski rynek przewozów</b> — i jednocześnie <b>~150 tys. brakujących kierowców</b> (dane TLP). <b>32% wakatów</b> w firmach transportowych pozostaje nieobsadzone. Średni czas zatrudnienia kierowcy C+E to <b>47 dni</b>, a każdy dzień przestoju ciężarówki to <b>~9 500 zł</b> straty operacyjnej. Mediana zarobków kierowcy zawodowego w 2025 r. — <b>10 000 zł netto</b>. Ogólne portale tej niszy nie obsługują — TSLTalento.pl owszem.
          </p>

          <div class="portal-stats">
            <div class="pstat"><div class="n">150K<sup>−</sup></div><div class="l">Brakujących<br>kierowców</div></div>
            <div class="pstat"><div class="n">32<sup>%</sup></div><div class="l">Wakatów<br>nieobsadzonych</div></div>
            <div class="pstat"><div class="n">47<sup>dni</sup></div><div class="l">Czas zatrudnienia<br>kierowcy C+E</div></div>
            <div class="pstat"><div class="n">9,5K<sup>zł</sup></div><div class="l">Strata na dzień<br>przestoju</div></div>
          </div>

          <div class="portal-features">
            <div class="ft-h">▸ AI features · TSLTalento</div>
            <ul>
              <li><b>CDL & ADR verify:</b> automatyczna walidacja kategorii prawa jazdy, ADR, HDS, karty kierowcy</li>
              <li><b>Geolocation matching:</b> ofertę dobiera AI po lokalizacji domu, nie miasta firmy</li>
              <li><b>Route preference engine:</b> 3/1, 4/2, krajowe, weekendowe, międzynarodowe</li>
              <li><b>Quick Apply mobile:</b> 1-click PWA, działa offline, pod kciuk</li>
              <li><b>Average rate AI:</b> portal sam liczy „średnia stawka” dla trasy w real-time</li>
              <li><b>Transparent ranking:</b> oferty z ukrytą stawką są deranżowane przez AI</li>
            </ul>
          </div>

          <div class="portal-stack">
            <span class="chip acc">Next.js 15</span>
            <span class="chip">PWA</span>
            <span class="chip">Mapbox GL</span>
            <span class="chip">Geolocation API</span>
            <span class="chip">Offline-first</span>
            <span class="chip">CDL verify</span>
          </div>
        </div>

      </div>
    </div>
  </article>

  <!-- ===== PORTAL 03 — DEVTALENTO ===== -->
  <article class="portal dev" data-num="03" id="devtalento">
    <div class="wrap">
      <div class="portal-grid">
        <div class="portal-info">
          <span class="badge"><span class="sym">⌬</span> VERTICAL · 03 / 04 <span class="live-dot"></span></span>
          <div class="accent-bar" style="background:#39FF6A"></div>
          <h2 class="portal-name">Dev<em>Talento</em><span class="tld">.pl</span></h2>
          <div class="portal-url"><span class="live-dot"></span>devtalento.pl · <span style="color:var(--lime)">Q1 2027</span></div>

          <p class="portal-pitch">
            Talent operating system dla zespołów IT. Konwersacyjne wyszukiwanie, AI matching, live coding — od briefu „DevOps engineer · AWS · Kraków · B2B” do shortlisty w 8 sekund.
          </p>

          <p class="portal-body">
            <b>56% dużych firm w Polsce</b> nie może znaleźć specjalistów IT. <b>57% firm</b> notuje wzrost kosztów rekrutacji rok do roku. Prowizje agencji headhunterskich sięgają <b>25% rocznego wynagrodzenia</b>. Średni czas zamknięcia roli inżynierskiej — <b>4,5 miesiąca</b> (Business Insider). A nieudany nabór to <b>250% rocznej pensji</b> w stratach (rotacja + onboarding + zerwany sprint). DevTalento.pl to AI-first platforma rekrutacyjna, w której HR opisuje rolę zdaniem, a silnik zwraca rankę 50 najlepszych kandydatów z GitHubem, stackiem i indeksem dopasowania.
          </p>

          <div class="portal-stats">
            <div class="pstat"><div class="n">56<sup>%</sup></div><div class="l">Firm bez<br>specjalistów IT</div></div>
            <div class="pstat"><div class="n">4,5<sup>mies.</sup></div><div class="l">Średnia<br>rekrutacja</div></div>
            <div class="pstat"><div class="n">25<sup>%</sup></div><div class="l">Prowizja<br>agencji</div></div>
            <div class="pstat"><div class="n">250<sup>%</sup></div><div class="l">Strata przy<br>nieudanym naborze</div></div>
          </div>

          <div class="portal-features">
            <div class="ft-h">▸ AI features · DevTalento</div>
            <ul>
              <li><b>GitHub Skill Map:</b> AI przegląda commity, języki, frameworki, ranguje realne skille (nie self-claim)</li>
              <li><b>Conversational search:</b> „senior React + GraphQL + AWS · B2B · Kraków · 24–32k”</li>
              <li><b>AI Match %:</b> wynik dopasowania kandydat ↔ JD w skali 0–100</li>
              <li><b>Live coding tests:</b> wbudowane piaskownice — bez zewnętrznych HackerRank</li>
              <li><b>Salary intelligence:</b> AI sugeruje realny widełki na rolę w mieście w real-time</li>
              <li><b>Anti-ghosting layer:</b> rekruter, który nie odpisze 7 dni — traci ranking</li>
            </ul>
          </div>

          <div class="portal-stack">
            <span class="chip acc">Next.js 15</span>
            <span class="chip">GitHub API</span>
            <span class="chip">tRPC</span>
            <span class="chip">Live coding</span>
            <span class="chip">Salary AI</span>
            <span class="chip">Pinecone</span>
          </div>
        </div>

        <div>
          <div class="portal-media">
            <div class="frame-bar">
              <div class="dots"><i></i><i></i><i></i></div>
              <div class="url-bar">devtalento.pl <b>· recruiter cockpit</b></div>
              <div class="frame-meta">v0.9 · alpha</div>
            </div>
            <div class="shot"><picture><source srcset="/static/assets/devtalento.webp" type="image/webp"><img src="/static/assets/devtalento.jpg" alt="Zrzut ekranu portalu DevTalento.pl — recruiter cockpit z mapą umiejętności GitHub i wynikiem dopasowania AI" width="1024" height="496" loading="lazy" decoding="async"></picture></div>
            <div class="overlay">
              <span>● TALENT OPERATING SYSTEM · dla zespołów IT</span>
              <span>AI MATCH 96% — connected</span>
            </div>
          </div>

          <div class="portal-ai">
            <div class="ai-card">
              <div class="lab"><span>AI · Module 05</span><b>● ACTIVE</b></div>
              <h5>10 000+ specjalistów IT</h5>
              <p>500+ firm tech, 94% skuteczność dopasowania w testach alfa. Indeks GitHub liczony dla każdego profilu.</p>
              <div class="pulse"></div>
            </div>
            <div class="ai-card">
              <div class="lab"><span>AI · Module 06</span><b>● ACTIVE</b></div>
              <h5>Recruiter Cockpit AI</h5>
              <p>Pipeline · AI Matches · Insights — jeden widok, jeden chat z modelem. „Pokaż mi Staff Backend pod Hybrid · Kraków”.</p>
              <div class="pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>

  <!-- ===== PORTAL 04 — HORECATALENTO ===== -->
  <article class="portal hor" data-num="04" id="horecatalento">
    <div class="wrap">
      <div class="portal-grid reverse">

        <div>
          <div class="portal-media">
            <div class="frame-bar">
              <div class="dots"><i></i><i></i><i></i></div>
              <div class="url-bar">horecatalento.pl <b>· production preview</b></div>
              <div class="frame-meta">v0.6 · alpha</div>
            </div>
            <div class="shot"><picture><source srcset="/static/assets/horecatalento.webp" type="image/webp"><img src="/static/assets/horecatalento.jpg" alt="Zrzut ekranu portalu HoReCaTalento.pl — oferty pracy w gastronomii i hotelarstwie z asystentem AI Concierge" width="1024" height="683" loading="lazy" decoding="async"></picture></div>
            <div class="overlay">
              <span>● PORTAL DLA BRANŻY HORECA</span>
              <span>AI MATCH 98% — connected</span>
            </div>
          </div>

          <div class="portal-ai">
            <div class="ai-card">
              <div class="lab"><span>AI · Module 07</span><b>● ACTIVE</b></div>
              <h5>Continuous hiring</h5>
              <p>Rotacja 60-70% wymaga ciągłej rekrutacji, nie 1 raz w roku. Portal automatycznie reaktywuje wygasłe oferty.</p>
              <div class="pulse"></div>
            </div>
            <div class="ai-card">
              <div class="lab"><span>AI · Module 08</span><b>● ACTIVE</b></div>
              <h5>AI Talento Concierge</h5>
              <p>Asystent 24/7 odpowiada na pytania kandydatów, pomaga w CV, przygotowuje do rozmowy. „NOWOŚĆ” w portalu.</p>
              <div class="pulse"></div>
            </div>
          </div>
        </div>

        <div class="portal-info">
          <span class="badge"><span class="sym">◐</span> VERTICAL · 04 / 04 <span class="live-dot"></span></span>
          <div class="accent-bar" style="background:#C9A04A"></div>
          <h2 class="portal-name">HoReCa<em>Talento</em><span class="tld">.pl</span></h2>
          <div class="portal-url"><span class="live-dot"></span>horecatalento.pl · <span style="color:var(--lime)">Q1 2027</span></div>

          <p class="portal-pitch">
            Dopasowani ludzie. Lepsze miejsca. Większe możliwości. Portal pracy dla gastronomii i hotelarstwa — tam, gdzie rotacja roczna sięga 70%.
          </p>

          <p class="portal-body">
            Sektor HoReCa to <b>rotacja 60–70% rocznie</b> (Chronofy) — to znaczy, że 10-osobowa restauracja wymienia 6–7 pracowników rocznie. Płaca minimalna w 2025 r. — <b>30,50 zł brutto/h</b>, czyli skokowy wzrost kosztów osobowych. Sektor po pandemii stracił <b>setki tysięcy pracowników</b> (Worksol), a restauratorzy w raporcie MFR 2025/2026 wskazują niedobór kadr jako <b>główny hamulec wzrostu</b>. HoReCaTalento.pl to ciągła rekrutacja kucharzy, kelnerów, recepcjonistów, barmanów — z AI Concierge, optymalizacją ogłoszeń i analityką trendów.
          </p>

          <div class="portal-stats">
            <div class="pstat"><div class="n">60-70<sup>%</sup></div><div class="l">Rotacja<br>roczna w HoReCa</div></div>
            <div class="pstat"><div class="n">30,50<sup>zł</sup></div><div class="l">Min. brutto/h<br>2025</div></div>
            <div class="pstat"><div class="n">6-7<sup>os.</sup></div><div class="l">Wymiana w<br>10-os. restauracji</div></div>
            <div class="pstat"><div class="n">#1<sup>brake</sup></div><div class="l">Kadry · główny<br>hamulec wzrostu (MFR)</div></div>
          </div>

          <div class="portal-features">
            <div class="ft-h">▸ AI features · HoReCaTalento</div>
            <ul>
              <li><b>AI Talento Concierge:</b> chat 24/7 — pomaga kandydatowi w CV i przygotowaniu do rozmowy</li>
              <li><b>Optymalizacja ogłoszeń:</b> AI przepisuje JD pod właściwą personę (kucharz vs. barman vs. manager)</li>
              <li><b>Continuous hiring:</b> portal automatycznie przedłuża i recyklinguje aktywne oferty</li>
              <li><b>Shift fit:</b> dopasowanie po preferencji zmianowej (śniadania, kolacje, weekend)</li>
              <li><b>Brand profile builder:</b> Accor, Sodexo, Nestlé, Arche — pełne profile pracodawcy</li>
              <li><b>Analityka i insights:</b> rekomendacje AI dla menadżera operacji</li>
            </ul>
          </div>

          <div class="portal-stack">
            <span class="chip acc">Next.js 15</span>
            <span class="chip">AI Concierge</span>
            <span class="chip">GPT-4o</span>
            <span class="chip">Shift AI</span>
            <span class="chip">Brand profiles</span>
            <span class="chip">Continuous hiring</span>
          </div>
        </div>

      </div>
    </div>
  </article>

</section>

<!-- ============ AI ENGINE ============ -->
<section class="engine" id="engine">
  <div class="wrap">
    <div class="engine-grid">
      <div>
        <div class="label">AI Engine · 03</div>
        <h3 style="margin-top:24px">AI Patch <em>Engine</em><span class="ver">v3.0</span></h3>
        <p class="engine-lede">
          Cztery portale. <b>Jeden silnik AI.</b> Wspólna warstwa modeli, RAG, embeddings i orchestration — zbudowana wewnętrznie, hostowana w Polsce. To nasza tajna broń: w roku 2027 jeden zespół utrzymuje cztery wertykały bez kopiowania kodu.
        </p>
      </div>

      <div class="flow">
        <div class="flow-h"><span>Pipeline rekrutacyjny · jeden engine, cztery wertykały</span><b>● v3.0</b></div>

        <div class="flow-row"><span class="k">▸ Input</span><span class="v">JD od pracodawcy lub konwersacyjne zapytanie kandydata</span><span class="m">~120 ms</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row"><span class="k">▸ Embed</span><span class="v">Semantyczne embeddingi (OpenAI · text-embedding-3-large)</span><span class="m">~340 ms</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row"><span class="k">▸ Retrieve</span><span class="v">pgvector + Pinecone · top-K kandydatów z bazy wertykału</span><span class="m">~60 ms</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row"><span class="k">▸ Rerank</span><span class="v">Cross-encoder + reguły branżowe (NIL, CDL, GitHub, certyfikaty)</span><span class="m">~210 ms</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row"><span class="k">▸ Score</span><span class="v">AI Match Score 0–100 · objaśniany („dlaczego ten kandydat”)</span><span class="m">~180 ms</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-row"><span class="k">▸ Deliver</span><span class="v">Shortlist + insights + alerty rekruterskie · streamed</span><span class="m">~80 ms</span></div>
      </div>
    </div>

    <div class="engine-pillars">
      <div class="pillar">
        <div class="n">/ 01</div>
        <h4>Semantyczne <em>matching</em></h4>
        <p>Każde JD i każdy profil kandydata przepuszczony przez warstwę embeddingów. Wyszukiwanie po znaczeniu, nie po słowach kluczowych. „Backend w fintechu” = realnie podobne profile, nie literalne dopasowania.</p>
        <div class="ic">⌬ EMBED · RETRIEVE · MATCH</div>
      </div>
      <div class="pillar">
        <div class="n">/ 02</div>
        <h4>RAG na <em>specyfice branży</em></h4>
        <p>Retrieval-Augmented Generation z osobną bazą wiedzy per wertykał — NIL dla medycyny, GitHub dla devów, CDL/ADR dla TSL, certyfikaty F&B dla HoReCa. Model nie zgaduje — cytuje.</p>
        <div class="ic">⌥ NIL · CDL · GITHUB · MFR</div>
      </div>
      <div class="pillar">
        <div class="n">/ 03</div>
        <h4>Konwersacyjne <em>UX</em></h4>
        <p>Rekruter pisze: „pokaż mi 5 najlepszych kierowców C+E na trasę PL→DE, system 3/1, dostępność od poniedziałku”. Engine odpowiada listą — nie formularzem 23 pól.</p>
        <div class="ic">⌘ CHAT · INTENT · SHORTLIST</div>
      </div>
      <div class="pillar">
        <div class="n">/ 04</div>
        <h4>Explainable <em>scoring</em></h4>
        <p>Każdy AI Match Score 0–100 ma uzasadnienie: które skille trafiły, gdzie luka, dlaczego ten kandydat ponad innym. Bez czarnej skrzynki, bez „bo tak”.</p>
        <div class="ic">⌗ SCORE · EXPLAIN · TRACE</div>
      </div>
    </div>
  </div>
</section>

<!-- ============ FOUNDER ============ -->
<section class="founder" id="founder">
  <div class="wrap">
    <div class="founder-grid">

      <div class="founder-photo">
        <picture><source srcset="/static/assets/tomasz-kotlinski.webp" type="image/webp"><img src="/static/assets/tomasz-kotlinski.jpg" alt="Tomasz Kotliński — Founder i CEO HR Talento Group" width="1080" height="1080" fetchpriority="high" decoding="async"></picture>
        <div class="tag-top">CEO · FOUNDER</div>
        <div class="overlay">
          <span>● TOMASZ KOTLIŃSKI</span>
          <span>WARSZAWA · 2026</span>
        </div>
      </div>

      <div class="founder-info">
        <div class="label">Founder · 04</div>
        <h3>Tomasz <em>Kotliński</em></h3>
        <div class="founder-role">
          <b>AI Founder</b> · Vibe Coder · Author of 18 books<br>
          Specjalista AI &amp; Fullstack Developer · 22 lata w cyfrze od 2003 r.
        </div>

        <p class="founder-bio">
          <b>Buduję rzeczy, które działają.</b> Rozwijam <b>28 portali WordPress</b> w ekosystemie <span class="hl">Aesthetic Insight</span>, prototypuję <b>4 aplikacje mobilne</b> w <span class="hl">Apps Tech Grupa Polska</span>, rozwijam <b>4 narzędzia legal-tech</b> w <span class="hl">LexMate24</span>, zakładam pierwszą polską spółdzielnię socjalną AI <span class="hl">SilverTech</span> i piszę bibliotekę <b>18 książek</b> o psychologii pieniądza, AI i strategii — każda na 420 cytowanych źródeł. <b>HR Talento</b> to mój piąty ekosystem — i pierwszy w pełni AI-first.
        </p>

        <blockquote class="founder-quote">
          <span class="at">“</span>Rekrutacja w kluczowych branżach w Polsce jest dziś w stanie, którego nie da się dłużej ignorować. Wracam do projektów, które kiedyś zaczynałem — tym razem z warstwą AI. Cztery portale, jeden ekosystem, AI w sercu procesu.
        </blockquote>

        <div class="founder-eco">
          <div class="founder-eco-h">▸ 5 ekosystemów w budowie · Tomasz Kotliński</div>
          <ul class="eco-list">
            <li>
              <div>
                <div class="l-name">Aesthetic Insight</div>
                <div class="l-desc">28 portali WordPress · content + brand</div>
              </div>
              <div class="l-meta">Active</div>
            </li>
            <li>
              <div>
                <div class="l-name">Apps Tech Grupa Polska</div>
                <div class="l-desc">4 aplikacje mobilne · prototypy</div>
              </div>
              <div class="l-meta">Building</div>
            </li>
            <li>
              <div>
                <div class="l-name">LexMate24</div>
                <div class="l-desc">4 narzędzia legal-tech · AI</div>
              </div>
              <div class="l-meta">Beta</div>
            </li>
            <li>
              <div>
                <div class="l-name">SilverTech</div>
                <div class="l-desc">Pierwsza polska spółdzielnia socjalna AI</div>
              </div>
              <div class="l-meta">Founding</div>
            </li>
            <li style="grid-column:1/-1;background:#0E0E12">
              <div>
                <div class="l-name" style="color:var(--lime)">HR Talento Group <span style="color:var(--mute);font-weight:400">— ten projekt</span></div>
                <div class="l-desc">4 portale rekrutacyjne · AI Patch Engine v3</div>
              </div>
              <div class="l-meta" style="color:var(--lime)">Q1 2027</div>
            </li>
          </ul>
        </div>

        <div class="founder-meta-strip">
          <div class="fmeta"><div class="n">5<sup style="font-size:14px;color:var(--lime);font-family:var(--fmono);vertical-align:super">×</sup></div><div class="l">Ekosystemy<br>w budowie</div></div>
          <div class="fmeta"><div class="n">28</div><div class="l">Portale<br>WordPress</div></div>
          <div class="fmeta"><div class="n">18</div><div class="l">Książek<br>(10 ujawnionych)</div></div>
          <div class="fmeta"><div class="n">22</div><div class="l">Lata w cyfrze<br>od 2003 r.</div></div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- ============ ROADMAP ============ -->
<section class="roadmap" id="roadmap">
  <div class="wrap">
    <div class="roadmap-head">
      <h3>Roadmap. <em>Cztery launche, jeden Q1 2027.</em></h3>
      <div class="label">Roadmap · 05</div>
    </div>

    <div class="tl">
      <div class="tl-col active">
        <div class="dot"></div>
        <div class="q">Q3 2026</div>
        <div class="y">Active · w toku</div>
        <div class="tl-event"><h5>AI Patch Engine v2 → v3</h5><p>Migracja silnika · pgvector · cross-encoder rerank · explainable scoring</p></div>
        <div class="tl-event"><h5>NIL / CDL <em>integracje</em></h5><p>Pierwsze warstwy weryfikacji branżowej · alpha</p></div>
      </div>
      <div class="tl-col">
        <div class="dot"></div>
        <div class="q">Q4 2026</div>
        <div class="y">Soft beta</div>
        <div class="tl-event"><h5>DevTalento <em>soft beta</em></h5><p>Recruiter cockpit · 500 firm tech · 10k specjalistów IT</p></div>
        <div class="tl-event"><h5>MedTalento closed alpha</h5><p>Integracja NIL + PWZ · 4 tys. lekarzy</p></div>
      </div>
      <div class="tl-col">
        <div class="dot"></div>
        <div class="q">Q1 2027</div>
        <div class="y">Production launch</div>
        <div class="tl-event launch"><h5>Public launch · <em>all four</em></h5><p>MedTalento · TSLTalento · DevTalento · HoReCaTalento · LIVE</p></div>
      </div>
      <div class="tl-col">
        <div class="dot"></div>
        <div class="q">Q2 2027</div>
        <div class="y">Scale</div>
        <div class="tl-event"><h5>Recruiter API</h5><p>API dla ATS-ów · Workday · BambooHR · SAP SuccessFactors</p></div>
        <div class="tl-event"><h5>White-label module</h5><p>Wersja brandowana dla 3 dużych pracodawców</p></div>
      </div>
      <div class="tl-col">
        <div class="dot"></div>
        <div class="q">Q3 2027</div>
        <div class="y">Cross-vertical</div>
        <div class="tl-event"><h5>Cross-pollination AI</h5><p>Wykrywanie talentów z TSL trafiających do logistycznego IT</p></div>
        <div class="tl-event"><h5>Mobile native apps</h5><p>iOS + Android · all four portals</p></div>
      </div>
      <div class="tl-col">
        <div class="dot"></div>
        <div class="q">Q4 2027</div>
        <div class="y">Series A</div>
        <div class="tl-event"><h5>Round A · <em>fundraise</em></h5><p>Skalowanie · ekspansja CZ, SK · 2 nowe wertykały</p></div>
        <div class="tl-event"><h5>Hire 24</h5><p>Zespół 24 osoby · Kraków · Warszawa</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ CTA ============ -->
<section class="cta" id="cta">
  <div class="wrap">
    <div class="cta-grid">
      <div>
        <div class="eyebrow" style="margin-bottom:30px"><b>HR/TALENTO</b> · CONTACT · 06</div>
        <h2>
          Rozmawiamy?<br>
          <em>Inwestorzy,</em> partnerzy,<br>
          early <span class="hl">pracodawcy.</span>
        </h2>
        <div class="cta-buttons">
          <a class="btn" href="mailto:kotlinski.tomek@gmail.com">Napisz do Tomasza <span class="btn-arrow">→</span></a>
          <a class="btn ghost" href="tel:+48577654340">+48 577 654 340</a>
          <a class="btn ghost" href="#portals">Wróć do portali ↑</a>
        </div>
      </div>

      <div class="cta-right">
        <div class="ln"><span class="k">E-mail</span><span class="v"><b>kotlinski.tomek@gmail.com</b></span></div>
        <div class="ln"><span class="k">Telefon</span><span class="v">+48 577 654 340</span></div>
        <div class="ln"><span class="k">Rola</span><span class="v">CIO · Chief AI Officer<br>Fullstack AI Assistant Developer</span></div>
        <div class="ln"><span class="k">Location</span><span class="v">Polska · zdalnie</span></div>
        <div class="ln"><span class="k">Status</span><span class="v"><b>Available</b> for leadership roles</span></div>
        <div class="ln"><span class="k">Last sync</span><span class="v">28.06.2026 · 14:32 UTC</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer>
  <div class="wrap">
    <div class="foot-row">
      <div>HR/TALENTO GROUP · © 2026 Tomasz Kotliński</div>
      <div class="mid">
        <a href="#portals">Portale</a>
        <a href="#engine">AI Engine</a>
        <a href="#founder">Founder</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#cta">Kontakt</a>
      </div>
      <div class="right">Built in Kraków · PL · v0.9 alpha</div>
    </div>
  </div>
</footer>

<script>
// Reveal on scroll
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.hero-l, .hero-r, .manifest h2, .mf-item, .portal-info, .portal-media, .portal-ai, .engine-grid > *, .pillar, .founder-photo, .founder-info, .tl-col, .cta-grid > *');
  if (reduce || !('IntersectionObserver' in window)) { return; }
  els.forEach(function(e){ e.classList.add('reveal'); });
  var io = new IntersectionObserver(function(ents){
    ents.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  },{threshold:0.12, rootMargin:'0px 0px -60px 0px'});
  els.forEach(function(e){ io.observe(e); });
})();

// Soft parallax on portal numbers
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var portals = document.querySelectorAll('.portal');
  window.addEventListener('scroll',function(){
    portals.forEach(function(p){
      var rect = p.getBoundingClientRect();
      var rel = (rect.top + rect.height/2 - window.innerHeight/2) * -0.05;
      p.style.setProperty('--num-y', rel + 'px');
    });
  },{passive:true});
})();

// Mobile menu
(function(){
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  var close = document.getElementById('mmClose');
  if(!toggle || !menu) return;
  function open(){ menu.classList.add('open'); menu.setAttribute('aria-hidden','false'); toggle.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
  function shut(){ menu.classList.remove('open'); menu.setAttribute('aria-hidden','true'); toggle.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  toggle.addEventListener('click', open);
  if(close) close.addEventListener('click', shut);
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', shut); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') shut(); });
})();
</script>
`

app.get('/', (c) => {
  return c.render(raw(BODY))
})

export default app
