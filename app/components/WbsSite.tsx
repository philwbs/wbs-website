"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import HeroBrowser from "./hero/HeroBrowser";

const navItems = [
  { label: "Webdesign", target: "webdesign" },
  { label: "Lösungen", target: "loesungen" },
  { label: "Projekte", target: "projekte" },
  { label: "Über WBS", target: "ueber-wbs" },
];

const heroWords = [
  "Vertrauen schaffen.",
  "Wirkung zeigen.",
  "Wachstum begleiten.",
];

const services = [
  {
    number: "01",
    title: "Webdesign & Websites",
    text: "Strategisch aufgebaut, hochwertig gestaltet und technisch sauber umgesetzt – damit aus Besuchern Anfragen werden.",
    tags: ["Konzept", "Design", "SEO-Basis", "Responsive"],
    featured: true,
  },
  {
    number: "02",
    title: "Betreuung & Weiterentwicklung",
    text: "Nach dem Launch bleibe ich erreichbar: für Inhalte, Optimierungen, Wartung und die nächsten Wachstumsschritte.",
    tags: ["Wartung", "Änderungen", "Sicherheit", "Support"],
  },
  {
    number: "03",
    title: "IT & Digitalisierung",
    text: "Über ein verlässliches Partnernetzwerk finden wir die Lösung, die zu Ihrem Unternehmen und Ihren Abläufen passt.",
    tags: ["IT-Betreuung", "Cloud", "Security", "Automatisierung"],
  },
];

const projects = [
  {
    category: "GASTRONOMIE",
    title: "Restaurant-Webdesign",
    copy: "Atmosphärischer Premium-Auftritt für Restaurants, Hotels und Cafés – klar aufgebaut, hochwertig gestaltet und auf Reservierungen ausgerichtet.",
    theme: "restaurant",
    browserTitle: "SALZ & FLAMME",
    browserSubtitle: "GENUSS, DER BLEIBT.",
    image: "/demo-restaurant.webp",
  },
  {
    category: "BAU & ERDBAU",
    title: "Website für Bauunternehmen",
    copy: "Eine kraftvolle Außendarstellung für Betriebe, die Kompetenz zeigen, Vertrauen schaffen und mehr qualifizierte Anfragen erhalten möchten.",
    theme: "construction",
    browserTitle: "HINTERBERGER",
    browserSubtitle: "BAUEN. BEWEGEN. BEGEISTERN.",
    image: "/demo-construction.webp",
  },
  {
    category: "IMMOBILIEN & ARCHITEKTUR",
    title: "Immobilien-Webdesign",
    copy: "Ruhige Premium-Präsentation für Makler, Architekten und Bauträger – mit klarer Nutzerführung und überzeugender Objektwirkung.",
    theme: "realestate",
    browserTitle: "RAUMWERK",
    browserSubtitle: "WO ZUKUNFT ZUHAUSE IST.",
    image: "/demo-realestate.webp",
  },
];

const solutionCards = [
  {
    eyebrow: "FLEET CONTROL",
    title: "Mehr Überblick über Fahrzeuge und Flotte.",
    text: "GPS, Fahrtenbuch, Geofencing und Tanküberwachung – ergänzt durch persönliche Installation und Einschulung.",
    visual: "fleet",
  },
  {
    eyebrow: "ZEITERFASSUNG",
    title: "Arbeitszeiten einfach und digital im Griff.",
    text: "Eine klare Lösung für Unternehmen, die Zeiterfassung unkompliziert organisieren und auswerten möchten.",
    visual: "time",
  },
  {
    eyebrow: "IT-LÖSUNGEN",
    title: "Die passende Technik. Der richtige Partner.",
    text: "WBS klärt Ihren Bedarf und verbindet Sie direkt mit Quansatech – für IT-Support, Microsoft 365, Cloud, Backup, Monitoring, IT-Sicherheit, Netzwerktechnik und individuelle Software.",
    visual: "it",
  },
];

const storySteps = [
  {
    number: "01",
    title: "Wir hören zu.",
    text: "Bevor eine Lösung empfohlen wird, geht es um Ihre Ziele, Abläufe und die Stellen, an denen heute Zeit oder Wirkung verloren geht.",
  },
  {
    number: "02",
    title: "Wir erkennen den Bedarf.",
    text: "WBS ordnet ein, was wirklich gebraucht wird – eine neue Website, ein digitaler Prozess oder die passende IT-Unterstützung.",
  },
  {
    number: "03",
    title: "Wir verbinden mit der passenden Lösung.",
    text: "Sie behalten einen persönlichen Ansprechpartner. WBS koordiniert die Umsetzung und bindet bei Bedarf starke Spezialisten aus dem Partnernetzwerk ein.",
  },
];

const faqItems = [
  {
    q: "Was kostet eine professionelle Website?",
    a: "Der Preis hängt von Umfang, Funktionen und vorhandenen Inhalten ab. Nach einem unverbindlichen Erstgespräch erhalten Sie ein klares Angebot – ohne Überraschungen und passend zu Ihrem tatsächlichen Bedarf.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Eine klassische Unternehmenswebsite ist meist innerhalb weniger Wochen realisierbar. Entscheidend sind Seitenumfang, Abstimmungen sowie die Verfügbarkeit von Texten und Bildern. Sie erhalten vor Projektstart einen transparenten Ablauf.",
  },
  {
    q: "Kann meine bestehende Website überarbeitet werden?",
    a: "Ja. Zuerst prüfen wir, ob ein gezielter Relaunch sinnvoll ist oder ob sich die bestehende Grundlage wirtschaftlich weiterentwickeln lässt. Ihre aktuelle Website bleibt bis zur Freigabe der neuen Version erreichbar.",
  },
  {
    q: "Übernimmt WBS auch Wartung und Änderungen?",
    a: "Ja. Nach dem Launch sind klar definierte Betreuungspakete möglich – von technischer Wartung bis zu laufenden inhaltlichen Änderungen. So bleibt Ihre Website aktuell, sicher und zuverlässig.",
  },
  {
    q: "Steht meine Website damit automatisch ganz oben bei Google?",
    a: "Niemand kann seriös Platz 1 garantieren. Jede Website erhält aber eine starke SEO-Grundlage: saubere Struktur, schnelle Ladezeiten, verständliche Inhalte, Metadaten und eine technisch gute Basis. Für nachhaltige Sichtbarkeit können anschließend gezielte SEO-Maßnahmen aufgebaut werden.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="WBS Startseite">
      <span className="brand__letters">
        <span>W</span><b>B</b><span>S</span>
      </span>
      <span className="brand__name">WESNER BUSINESS SOLUTIONS</span>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WbsSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroWord, setHeroWord] = useState(0);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [botChecked, setBotChecked] = useState(false);
  const [storyStep, setStoryStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(
      () => setHeroWord((current) => (current + 1) % heroWords.length),
      4800,
    );
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const consent = window.localStorage.getItem("wbs-cookie-choice");
    if (!consent) {
      const timeout = window.setTimeout(() => setCookieVisible(true), 900);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStoryStep(Number((entry.target as HTMLElement).dataset.storyStep ?? 0));
          }
        });
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 },
    );
    document.querySelectorAll("[data-story-step]").forEach((element) => storyObserver.observe(element));
    return () => storyObserver.disconnect();
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const navigateTo = (target: string) => {
    setMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chooseCookies = (choice: "essential" | "all") => {
    window.localStorage.setItem("wbs-cookie-choice", choice);
    setCookieVisible(false);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!botChecked) return;
    setFormSent(true);
  };

  return (
    <>
      <div id="top" />

      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <button type="button" onClick={() => navigateTo("webdesign")}>
              Webdesign
            </button>
            <div className="nav-menu">
              <button
                className="nav-menu__trigger"
                type="button"
                aria-haspopup="true"
                onClick={() => navigateTo("loesungen")}
              >
                Lösungen <span aria-hidden="true">⌄</span>
              </button>
              <div className="nav-dropdown" aria-label="Lösungen direkt auswählen">
                <button type="button" onClick={() => navigateTo("solution-fleet")}>
                  <small>01</small><span>Fleet Control</span>
                </button>
                <button type="button" onClick={() => navigateTo("solution-time")}>
                  <small>02</small><span>Zeiterfassung</span>
                </button>
                <button type="button" onClick={() => navigateTo("solution-it")}>
                  <small>03</small><span>IT-Lösungen</span>
                </button>
              </div>
            </div>
            <button type="button" onClick={() => navigateTo("projekte")}>
              Projekte
            </button>
            <button type="button" onClick={() => navigateTo("ueber-wbs")}>
              Über WBS
            </button>
          </nav>
          <button className="nav-cta" type="button" onClick={() => navigateTo("kontakt")}>
            Erstgespräch <ArrowIcon />
          </button>
          <button
            className={`menu-button ${menuOpen ? "menu-button--open" : ""}`}
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => navigateTo(item.target)}>
              {item.label}
            </button>
          ))}
          <div className="mobile-nav__solutions">
            <button type="button" onClick={() => navigateTo("solution-fleet")}>Fleet Control</button>
            <button type="button" onClick={() => navigateTo("solution-time")}>Zeiterfassung</button>
            <button type="button" onClick={() => navigateTo("solution-it")}>IT-Lösungen</button>
          </div>
          <button className="mobile-nav__cta" type="button" onClick={() => navigateTo("kontakt")}>
            Unverbindliches Erstgespräch
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__backdrop" aria-hidden="true" />

          <div className="hero__grid section-shell">
            <div className="hero__content">
              <p className="eyebrow eyebrow--light" data-reveal>
                WESNER BUSINESS SOLUTIONS · ÖSTERREICH
              </p>

              <h1 id="hero-heading" className="wbs-hero-title" data-reveal>
                <span className="wbs-hero-title__static">Websites, die</span>
                <span className="wbs-hero-rotator" aria-live="polite">
                  {heroWords.map((word, index) => (
                    <span
                      key={word}
                      className={`wbs-hero-rotator__word ${index === heroWord ? "is-active" : ""}`}
                      aria-hidden={index !== heroWord}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>

              <p className="hero__lead" data-reveal>
                Persönlich entwickelt. Strategisch durchdacht. Ergänzt durch digitale
                Lösungen und ein starkes Partnernetzwerk für Ihr Unternehmen.
              </p>

              <div className="hero__actions" data-reveal>
                <button className="button button--gold" type="button" onClick={() => navigateTo("kontakt")}>
                  Projekt unverbindlich besprechen <ArrowIcon />
                </button>
                <button className="button button--ghost" type="button" onClick={() => navigateTo("projekte")}>
                  Projekte entdecken
                </button>
              </div>

              <div className="hero__trust" data-reveal>
                <span>Direkter Ansprechpartner</span>
                <span>Klare Abläufe</span>
                <span>Langfristige Betreuung</span>
              </div>
            </div>

            <HeroBrowser />
          </div>

          <button className="scroll-cue" type="button" aria-label="Inhalte entdecken" onClick={() => navigateTo("webdesign")}>
            <span>Entdecken</span><i />
          </button>
        </section>

        <section className="statement section" id="webdesign">
          <div className="section-shell">
            <p className="eyebrow" data-reveal>WOFÜR WBS STEHT</p>
            <div className="statement__grid">
              <h2 data-reveal>
                Nicht einfach eine Website.
                <br />
                <em>Ein Auftritt, der für Sie arbeitet.</em>
              </h2>
              <div className="statement__copy" data-reveal>
                <p>
                  Eine gute Website muss in wenigen Sekunden Orientierung geben,
                  Vertrauen aufbauen und den nächsten Schritt leicht machen.
                </p>
                <p>
                  WBS verbindet klare Strategie mit hochwertigem Design – und
                  bleibt auch nach dem Start persönlich an Ihrer Seite.
                </p>
                <button className="text-link" type="button" onClick={() => navigateTo("kontakt")}>
                  Website-Projekt besprechen <ArrowIcon />
                </button>
              </div>
            </div>
            <div className="value-row" data-reveal>
              <div><strong>01</strong><span>Persönlich beraten</span></div>
              <div><strong>02</strong><span>Stark vernetzt</span></div>
              <div><strong>03</strong><span>Lösungsorientiert</span></div>
              <div><strong>04</strong><span>Langfristig betreut</span></div>
            </div>
          </div>
        </section>

        <section className="services section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow" data-reveal>LEISTUNGEN</p>
                <h2 data-reveal>Von der Idee bis zur <em>laufenden Betreuung.</em></h2>
              </div>
              <p data-reveal>
                Ein Ansprechpartner, klare Schritte und Lösungen, die nicht nur
                gut aussehen, sondern zum Unternehmen passen.
              </p>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article
                  className={`service-card ${service.featured ? "service-card--featured" : ""}`}
                  key={service.title}
                  data-reveal
                  role="button"
                  tabIndex={0}
                  aria-label={`${service.title} anfragen`}
                  onClick={() => navigateTo("kontakt")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") navigateTo("kontakt");
                  }}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="service-card__top">
                    <span>{service.number}</span>
                    {service.featured && <b>FOKUS</b>}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-card__tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <span className="service-card__arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projekte">
          <div className="section-shell">
            <div className="section-heading section-heading--projects">
              <div>
                <p className="eyebrow eyebrow--light" data-reveal>PROJEKTE & DEMO-KONZEPTE</p>
                <h2 data-reveal>So kann Ihr nächster <em>Webauftritt wirken.</em></h2>
              </div>
              <p data-reveal>
                Die ersten Branchenkonzepte zeigen Stil, Aufbau und Anspruch.
                Echte Kundenprojekte ergänzen das Portfolio nach Veröffentlichung.
              </p>
            </div>
            <div className="project-stack">
              {projects.map((project, index) => (
                <article className={`project-card project-card--${project.theme}`} key={project.title} data-reveal>
                  <div className="project-card__info">
                    <span>
    <strong>0{index + 1}</strong>
    <small>{project.category}</small>
</span>
                    <h3>{project.title}</h3>
                    <p>{project.copy}</p>
                    <button type="button" onClick={() => navigateTo("kontakt")}>
                      Ähnliches Projekt anfragen <ArrowIcon />
                    </button>
                  </div>
                  <div className="browser-mockup" aria-label={`Demo-Website ${project.browserTitle}`}>
                    <div className="browser-mockup__bar">
                      <i /><i /><i /><span>demo.wesner-solutions.at</span>
                    </div>
                    <div
                      className="browser-mockup__site"
                      style={{
                        backgroundImage: `linear-gradient(90deg, rgba(8, 9, 9, .9), rgba(8, 9, 9, .16)), url("${project.image}")`,
                      }}
                    >
                      <div className="demo-nav">
                        <b>{project.browserTitle}</b>
                        <span>Leistungen&nbsp;&nbsp;&nbsp; Projekte&nbsp;&nbsp;&nbsp; Kontakt</span>
                      </div>
                      <div className="demo-copy">
                        <small>DEMO-KONZEPT</small>
                        <strong>{project.browserSubtitle}</strong>
                        <span>Strategisch. Hochwertig. Persönlich.</span>
                        <i />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="project-note" data-reveal>
              Transparenz ist Teil der Marke: Diese Entwürfe sind als Demo-Konzepte
              gekennzeichnet und keine erfundenen Kundenreferenzen.
            </p>
          </div>
        </section>

        <section className="solutions section" id="loesungen">
          <div className="section-shell">
            <div className="section-heading section-heading--solutions">
              <div>
                <p className="eyebrow" data-reveal>DIGITALE LÖSUNGEN</p>
                <h2 data-reveal>Wenn mehr gebraucht wird als <em>eine neue Website.</em></h2>
              </div>
              <p data-reveal>
                WBS hört zu, erkennt den Bedarf und verbindet Sie mit der passenden
                Lösung – ohne dass Sie selbst fünf Anbieter koordinieren müssen.
              </p>
            </div>

            <div className="solution-story">
              <div className="solution-story__sticky">
                <div className="solution-story__intro">
                  <p className="eyebrow eyebrow--light">GEMEINSAM ZUR PASSENDEN LÖSUNG</p>
                  <h3>
                    Ihre Herausforderung
                    <br />
                    <em>wird unser Ausgangspunkt.</em>
                  </h3>
                  <p>
                    Kein Produkt von der Stange. Erst verstehen, dann gezielt
                    verbinden und die Umsetzung persönlich begleiten.
                  </p>
                </div>
                <div className="solution-story__track" aria-hidden="true">
                  <span style={{ top: `${12 + storyStep * 38}%` }} />
                </div>
                <div className="solution-story__result" aria-live="polite">
                  <small>SCHRITT {storyStep + 1}</small>
                  <h3 key={`story-title-${storyStep}`}>{storySteps[storyStep].title}</h3>
                  <p key={`story-copy-${storyStep}`}>{storySteps[storyStep].text}</p>
                  <div className="solution-story__progress" aria-hidden="true">
                    {storySteps.map((step, index) => (
                      <i className={index <= storyStep ? "is-active" : ""} key={step.number} />
                    ))}
                  </div>
                </div>
                <div className="solution-story__mobile-steps">
                  {storySteps.map((step) => (
                    <article key={`mobile-${step.number}`}>
                      <small>{step.number}</small>
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="solution-story__markers" aria-hidden="true">
                {storySteps.map((step, index) => (
                  <span data-story-step={index} key={step.number} />
                ))}
              </div>
            </div>

            <div className="solution-grid">
              {solutionCards.map((card, index) => (
                <article
                  className="solution-card"
                  id={`solution-${card.visual}`}
                  key={card.title}
                  data-reveal
                  role="button"
                  tabIndex={0}
                  aria-label={`${card.eyebrow}: Bedarf besprechen`}
                  onClick={() => navigateTo("kontakt")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") navigateTo("kontakt");
                  }}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className={`solution-visual solution-visual--${card.visual}`}>
                    {card.visual === "fleet" && (
                      <div className="fleet-photo" />
                    )}
                    {card.visual === "time" && (
                      <div className="time-panel">
                        <small>HEUTE · PHILIPP W.</small>
                        <span>08<span className="time-colon">:</span>03</span>
                        <b>Arbeitszeit läuft</b>
                        <div className="time-progress"><i /></div>
                        <strong>LIVE</strong>
                      </div>
                    )}
                    {card.visual === "it" && (
                      <div
                        className="partner-network"
                        role="img"
                        aria-label="WBS verbindet Sie mit Quansatech. Von dort führt der Leistungsweg weiter zu Cloud, Security und Support."
                      >
                        <svg className="partner-network__paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                          <defs>
                            <marker id="partner-network-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                              <path d="M0 0L8 4L0 8Z" />
                            </marker>
                          </defs>
                          <path d="M23 50H30" />
                          <path d="M66 50L80 22" />
                          <path d="M80 22L84 51" />
                          <path d="M84 65L62 80" />
                        </svg>
                        <b className="partner-network__wbs">WBS</b>
                        <b className="partner-network__partner">QUANSATECH</b>
                        <i className="partner-network__service partner-network__service--cloud">CLOUD</i>
                        <i className="partner-network__service partner-network__service--security">SECURITY</i>
                        <i className="partner-network__service partner-network__service--support">SUPPORT</i>
                      </div>
                    )}
                  </div>
                  <span className="solution-card__eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="solution-card__link" aria-hidden="true">
                    Bedarf besprechen <ArrowIcon />
                  </span>
                </article>
              ))}
            </div>
            <div
              className="network-banner"
              data-reveal
              role="button"
              tabIndex={0}
              onClick={() => navigateTo("kontakt")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") navigateTo("kontakt");
              }}
            >
              <div className="network-banner__mark">W</div>
              <div>
                <p className="eyebrow eyebrow--light">WBS × QUANSATECH</p>
                <h3>Ein Ansprechpartner. <em>Ein starkes IT-Netzwerk dahinter.</em></h3>
              </div>
              <p>
                WBS bleibt Ihre persönliche Schnittstelle. Quansatech bringt bei
                IT-Infrastruktur, Cloud, Backup, Security, Monitoring und Support
                die technische Kompetenz in die Umsetzung.
              </p>
              <span className="network-banner__cta">
                IT-Bedarf besprechen <ArrowIcon />
              </span>
            </div>
          </div>
        </section>

<section className="about section" id="ueber-wbs">
  <div className="section-shell about__grid">
    <div className="about__portrait" data-reveal />

    <div className="about__copy">
      <p className="eyebrow" data-reveal>
        ÜBER WBS
      </p>

      <h2 data-reveal>
        Nicht der nächste anonyme Anbieter.
        <br />
        <em>Ihr persönlicher Lösungspartner.</em>
      </h2>

      <p className="about__lead" data-reveal>
        „Wenn ein Unternehmen digital besser aufgestellt werden soll,
        soll es heißen: Ruf den Wesner an – der kümmert sich.“
      </p>

      <p data-reveal>
        Ich bin Philipp Wesner, Gründer von Wesner Business Solutions.
        Meine Stärke liegt darin, Menschen, Unternehmen und die richtigen
        Lösungen zusammenzubringen. Dabei zählt für mich nicht der schnelle
        Verkauf, sondern eine Zusammenarbeit, die langfristig funktioniert.
      </p>

      <div className="about__values" data-reveal>
        <span>Persönliche Betreuung</span>
        <span>Starkes Partnernetzwerk</span>
        <span>Klare Lösungen</span>
        <span>Langfristige Zusammenarbeit</span>
      </div>

      <div className="about__signature" data-reveal>
        <strong>Philipp Wesner</strong>
        <span>Gründer & persönlicher Ansprechpartner</span>
      </div>
    </div>
  </div>
        </section>

        <section className="process section">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow" data-reveal>SO LÄUFT ES AB</p>
                <h2 data-reveal>Ein klarer Weg von der Idee <em>bis zum Ergebnis.</em></h2>
              </div>
              <p data-reveal>Sie behalten jederzeit den Überblick und wissen, was als Nächstes passiert.</p>
            </div>
            <div className="process-track">
              {[
                ["01", "Zuhören", "Wir klären Ziele, Zielgruppe, Inhalte und den tatsächlichen Bedarf."],
                ["02", "Konzipieren", "Sie erhalten eine klare Struktur und einen visuellen Entwurf."],
                ["03", "Umsetzen", "Die Website wird responsiv, schnell und sauber aufgebaut."],
                ["04", "Weitergehen", "Nach der Freigabe bleibt WBS für Betreuung und Optimierung erreichbar."],
              ].map(([number, title, text], index) => (
                <article key={title} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                  <span>{number}</span><i /><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="section-shell faq__grid">
            <div className="faq__intro">
              <p className="eyebrow" data-reveal>HÄUFIGE FRAGEN</p>
              <h2 data-reveal>Was Sie vor dem Start <em>wissen sollten.</em></h2>
              <p data-reveal>
                Ihre Frage ist nicht dabei? Im Erstgespräch klären wir offen, ob und
                wie WBS Sie sinnvoll unterstützen kann.
              </p>
            </div>
            <div className="faq__list" data-reveal>
              {faqItems.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary><span>{item.q}</span><i /></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="kontakt">
          <div className="section-shell contact__shell">
            <div className="contact__intro">
              <p className="eyebrow eyebrow--light" data-reveal>UNVERBINDLICHE ANFRAGE</p>
              <h2 data-reveal>Bereit für einen Auftritt, der <em>etwas auslöst?</em></h2>
              <p data-reveal>
                Erzählen Sie kurz, was Sie vorhaben. Ich melde mich persönlich,
                höre zu und sage Ihnen ehrlich, welcher nächste Schritt sinnvoll ist.
              </p>
              <div className="contact__person" data-reveal>
                <div>PW</div>
                <p><strong>Philipp Wesner</strong><span>Ihr persönlicher Ansprechpartner</span></p>
              </div>
              <a href="mailto:philipp.wesner@wesner-solutions.at" data-reveal>
                philipp.wesner@wesner-solutions.at
              </a>
            </div>
            <div className="contact__form-wrap" data-reveal>
              {formSent ? (
                <div className="form-success" role="status">
                  <span>✓</span>
                  <h3>Vielen Dank für Ihre Anfrage.</h3>
                  <p>
                    Die Demo funktioniert. Vor der Veröffentlichung wird das Formular
                    noch mit dem echten E-Mail-Versand verbunden.
                  </p>
                  <button type="button" onClick={() => setFormSent(false)}>Weitere Anfrage erfassen</button>
                </div>
              ) : (
                <form onSubmit={submitForm}>
                  <div className="form-heading">
                    <span>PROJEKT STARTEN</span>
                    <h3>Was dürfen wir für Sie lösen?</h3>
                  </div>
                  <div className="field-row">
                    <label>
                      <span>Ihr Name *</span>
                      <input name="name" autoComplete="name" placeholder="Vor- und Nachname" required />
                    </label>
                    <label>
                      <span>Unternehmen</span>
                      <input name="company" autoComplete="organization" placeholder="Firmenname" />
                    </label>
                  </div>
                  <div className="field-row">
                    <label>
                      <span>E-Mail-Adresse *</span>
                      <input type="email" name="email" autoComplete="email" placeholder="name@unternehmen.at" required />
                    </label>
                    <label>
                      <span>Telefon</span>
                      <input type="tel" name="phone" autoComplete="tel" placeholder="+43 ..." />
                    </label>
                  </div>
                  <label>
                    <span>Worum geht es? *</span>
                    <select name="interest" required defaultValue="">
                      <option value="" disabled>Bitte auswählen</option>
                      <option>Neue Website</option>
                      <option>Website-Relaunch</option>
                      <option>Website-Betreuung</option>
                      <option>IT & digitale Lösungen</option>
                      <option>Fleet Control</option>
                      <option>Zeiterfassung</option>
                      <option>Ich möchte mich beraten lassen</option>
                    </select>
                  </label>
                  <label>
                    <span>Erzählen Sie kurz von Ihrem Vorhaben *</span>
                    <textarea name="message" rows={5} placeholder="Was möchten Sie verbessern oder erreichen?" required />
                  </label>
                  <input className="honeypot" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
                  <label className="robot-check">
                    <input type="checkbox" checked={botChecked} onChange={(event) => setBotChecked(event.target.checked)} />
                    <span className="robot-check__box">{botChecked ? "✓" : ""}</span>
                    <span>Ich bin kein Roboter</span>
                    <b>WBS<br /><small>SECURE</small></b>
                  </label>
                  <label className="privacy-check">
                    <input type="checkbox" required />
                    <span>Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *</span>
                  </label>
                  <button className="button button--gold form-submit" type="submit" disabled={!botChecked}>
                    Anfrage unverbindlich senden <ArrowIcon />
                  </button>
                  <p className="form-note">Persönliche Rückmeldung · Keine automatische Verkaufsstrecke</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell">
          <div className="footer__top">
            <Brand light />
            <p>Webdesign · IT-Lösungen · Digitalisierung</p>
            <button type="button" onClick={() => navigateTo("top")} aria-label="Nach oben">↑</button>
          </div>
          <div className="footer__middle">
            <div>
              <span>KONTAKT</span>
              <a href="mailto:philipp.wesner@wesner-solutions.at">philipp.wesner@wesner-solutions.at</a>
            </div>
            <div>
              <span>VERNETZEN</span>
              <a href="https://www.linkedin.com/in/philipp-wesner" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
            <div>
              <span>POSITIONIERUNG</span>
              <p>Persönlich · stark vernetzt · lösungsorientiert</p>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {currentYear} Wesner Business Solutions</span>
            <div>
              <button type="button">Impressum</button>
              <button type="button">Datenschutz</button>
            </div>
            <span>Vertrauen · Mehrwert · Zukunft</span>
          </div>
        </div>
      </footer>

      {cookieVisible && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie-Einstellungen">
          <div>
            <span>DATENSCHUTZ & COOKIES</span>
            <p>
              Diese Demo verwendet nur notwendige lokale Speicherungen. Analyse- oder
              Marketingdienste werden erst nach Ihrer Zustimmung aktiviert.
            </p>
          </div>
          <div className="cookie-banner__actions">
            <button type="button" onClick={() => chooseCookies("essential")}>Nur notwendige</button>
            <button type="button" onClick={() => chooseCookies("all")}>Alle akzeptieren</button>
          </div>
        </div>
      )}
    </>
  );
}
