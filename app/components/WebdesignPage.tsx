"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Neue Unternehmenswebsites",
    text: "Ein individueller digitaler Auftritt, der Ihre Leistungen verständlich vermittelt, Vertrauen aufbaut und Interessenten gezielt zur Anfrage führt.",
  },
  {
    number: "02",
    title: "Auffrischung bestehender Websites",
    text: "Gezielte gestalterische und inhaltliche Verbesserungen für Websites, deren Grundlage noch gut ist, deren Wirkung aber nicht mehr zum Unternehmen passt.",
  },
  {
    number: "03",
    title: "Kompletter Website-Relaunch",
    text: "Strategie, Struktur, Design und Technik werden neu gedacht, wenn die bestehende Website den heutigen Anforderungen nicht mehr gerecht wird.",
  },
  {
    number: "04",
    title: "Responsive Design",
    text: "Eine durchdachte Darstellung für Smartphone, Tablet und Desktop – mit klarer Bedienung, passenden Abständen und gut lesbaren Inhalten.",
  },
  {
    number: "05",
    title: "SEO-Grundoptimierung",
    text: "Saubere Überschriften, aussagekräftige Metadaten, verständliche Inhalte und eine technische Basis, die Suchmaschinen zuverlässig erfassen können.",
  },
  {
    number: "06",
    title: "Performance & technische Qualität",
    text: "Schnelle Ladezeiten, stabile Darstellung und eine sorgfältige Umsetzung sorgen für ein hochwertiges Nutzungserlebnis auf allen Geräten.",
  },
];

const careItems = [
  "Änderungen an Texten und Bildern",
  "Technische Wartung",
  "Sicherheits- und Funktionskontrollen",
  "Neue Seiten und Funktionen",
  "Langfristige persönliche Betreuung",
];

const processSteps = [
  { number: "01", title: "Kennenlernen und Bedarf", text: "Wir sprechen über Ihr Unternehmen, Ihre Zielgruppen und darüber, was die neue Website konkret erreichen soll." },
  { number: "02", title: "Konzept und Struktur", text: "Aus den Anforderungen entsteht eine klare Seitenstruktur mit nachvollziehbaren Inhalten und kurzen Wegen zur Anfrage." },
  { number: "03", title: "Individuelles Design", text: "WBS entwickelt eine visuelle Richtung, die zu Ihrem Unternehmen passt und nicht wie eine austauschbare Vorlage wirkt." },
  { number: "04", title: "Entwicklung", text: "Das freigegebene Design wird responsiv, performant und technisch sauber als moderne Website umgesetzt." },
  { number: "05", title: "Prüfung und Freigabe", text: "Inhalte, Funktionen und Darstellung werden auf unterschiedlichen Bildschirmgrößen geprüft und gemeinsam final abgestimmt." },
  { number: "06", title: "Veröffentlichung und Betreuung", text: "Nach Ihrer Freigabe geht die Website online. Auch danach bleibt WBS für Wartung, Änderungen und Weiterentwicklung erreichbar." },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`brand ${light ? "brand--light" : ""}`}
      href="/"
      aria-label="Zur Startseite"
      onClick={() => {
        if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {light ? (
        <span className="brand__letters">
          <span>W</span><b>B</b><span>S</span>
        </span>
      ) : (
        <Image className="brand__mark" src="/wbs-navigation-logo.png" alt="" width={96} height={35} priority />
      )}
      <span className="brand__name">WESNER BUSINESS SOLUTIONS</span>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WebdesignPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

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

  return (
    <>
      <div id="top" />

      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <Link className="desktop-nav__link" href="/webdesign" aria-current="page">Webdesign</Link>
            <div className="nav-menu">
              <Link className="desktop-nav__link nav-menu__trigger" href="/#loesungen">
                Lösungen <span aria-hidden="true">⌄</span>
              </Link>
              <div className="nav-dropdown" aria-label="Lösungen direkt auswählen">
                <Link href="/#solution-fleet"><small>01</small><span>Fleet Control</span></Link>
                <Link href="/#solution-time"><small>02</small><span>Zeiterfassung</span></Link>
                <Link href="/#solution-it"><small>03</small><span>IT-Lösungen</span></Link>
              </div>
            </div>
            <Link className="desktop-nav__link" href="/#projekte">Projekte</Link>
            <Link className="desktop-nav__link" href="/#ueber-wbs">Über WBS</Link>
          </nav>
          <Link className="nav-cta" href="/#kontakt">Erstgespräch <ArrowIcon /></Link>
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
        <nav className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} aria-label="Mobile Navigation">
          <Link className="mobile-nav__link" href="/webdesign" aria-current="page">Webdesign</Link>
          <Link className="mobile-nav__link" href="/#loesungen">Lösungen</Link>
          <Link className="mobile-nav__link" href="/#projekte">Projekte</Link>
          <Link className="mobile-nav__link" href="/#ueber-wbs">Über WBS</Link>
          <div className="mobile-nav__solutions">
            <Link href="/#solution-fleet">Fleet Control</Link>
            <Link href="/#solution-time">Zeiterfassung</Link>
            <Link href="/#solution-it">IT-Lösungen</Link>
          </div>
          <Link className="mobile-nav__cta mobile-nav__link" href="/#kontakt">Unverbindliches Erstgespräch</Link>
        </nav>
      </header>

      <main className="webdesign-page">
        <section className="webdesign-hero" aria-labelledby="webdesign-heading">
          <div className="section-shell webdesign-hero__grid">
            <div className="webdesign-hero__copy">
              <p className="eyebrow eyebrow--light" data-reveal>WEBDESIGN VON WBS</p>
              <h1 id="webdesign-heading" data-reveal>Websites, die <em>Vertrauen schaffen.</em></h1>
              <p className="webdesign-hero__intro" data-reveal>
                WBS entwickelt hochwertige Unternehmenswebsites, die Ihre Leistung klar positionieren, professionell wirken und Menschen sicher zur nächsten Entscheidung führen.
              </p>
              <div className="webdesign-hero__actions" data-reveal>
                <Link className="button button--gold" href="/#kontakt">Projekt besprechen <ArrowIcon /></Link>
                <a className="button button--ghost-light" href="#leistungen">Leistungen entdecken</a>
              </div>
            </div>

            <div className="webdesign-hero__visual" aria-hidden="true" data-reveal>
              <div className="webdesign-hero__halo" />
              <div className="webdesign-hero__frame">
                <div className="webdesign-hero__bar"><i /><i /><i /><span>WBS / DIGITALER AUFTRITT</span></div>
                <div className="webdesign-hero__canvas">
                  <span>STRATEGIE</span>
                  <strong>Eine Website mit<br />klarer Wirkung.</strong>
                  <div className="webdesign-hero__line" />
                  <div className="webdesign-hero__tiles"><i /><i /><i /></div>
                </div>
              </div>
              <div className="webdesign-hero__note webdesign-hero__note--top"><small>01</small> DESIGN</div>
              <div className="webdesign-hero__note webdesign-hero__note--bottom"><small>02</small> TECHNIK</div>
            </div>
          </div>
        </section>

        <section className="webdesign-services section" id="leistungen">
          <div className="section-shell">
            <div className="webdesign-heading">
              <div>
                <p className="eyebrow" data-reveal>LEISTUNGEN</p>
                <h2 data-reveal>Von der ersten Idee bis zur <em>starken Website.</em></h2>
              </div>
              <p data-reveal>
                Je nach Ausgangslage entsteht eine neue Website, eine gezielte Auffrischung oder ein vollständiger Relaunch. Immer mit einem klaren Konzept und einer Umsetzung, die langfristig funktioniert.
              </p>
            </div>
            <div className="webdesign-service-grid">
              {services.map((service) => (
                <article className="webdesign-service-card" key={service.number} data-reveal>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="webdesign-relaunch section">
          <div className="section-shell webdesign-relaunch__grid">
            <div className="webdesign-relaunch__intro">
              <p className="eyebrow eyebrow--light" data-reveal>AUFFRISCHUNG & RELAUNCH</p>
              <h2 data-reveal>Bestehendes verbessern, ohne den Blick für das Ganze zu verlieren.</h2>
              <p data-reveal>
                Nicht jede vorhandene Website muss vollständig ersetzt werden. WBS prüft, welche Grundlage sinnvoll weiterverwendet werden kann und wo ein konsequenter Neustart die bessere Entscheidung ist.
              </p>
            </div>
            <div className="webdesign-relaunch__problems" data-reveal>
              <p>TYPISCHE AUSGANGSLAGEN</p>
              <ul>
                <li><span>01</span><strong>Veraltetes Design</strong><small>Der Auftritt passt nicht mehr zur Qualität des Unternehmens.</small></li>
                <li><span>02</span><strong>Schwache mobile Darstellung</strong><small>Inhalte und Bedienung funktionieren auf Smartphones nicht überzeugend.</small></li>
                <li><span>03</span><strong>Unklare Inhalte</strong><small>Besucher erkennen Leistungen, Nutzen oder den nächsten Schritt nicht sofort.</small></li>
                <li><span>04</span><strong>Langsame Ladezeiten</strong><small>Technische Altlasten bremsen Nutzung, Wirkung und Sichtbarkeit.</small></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="webdesign-care section">
          <div className="section-shell webdesign-care__grid">
            <div className="webdesign-care__panel" data-reveal>
              <span>WBS</span>
              <div>
                <small>LANGFRISTIG GEDACHT</small>
                <strong>Verlässlich erreichbar.<br />Auch nach dem Launch.</strong>
              </div>
            </div>
            <div className="webdesign-care__copy">
              <p className="eyebrow" data-reveal>BETREUUNG & WEITERENTWICKLUNG</p>
              <h2 data-reveal>Sicherheit, Wartung und Weiterentwicklung aus einer Hand.</h2>
              <p data-reveal>
                Eine gute Website ist kein einmaliges Projekt. Inhalte verändern sich, Angebote wachsen und technische Anforderungen entwickeln sich weiter. WBS bleibt Ihr persönlicher Ansprechpartner und hält den digitalen Auftritt verlässlich aktuell.
              </p>
              <ul data-reveal>
                {careItems.map((item) => <li key={item}><span>✓</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="webdesign-process section" id="ablauf">
          <div className="section-shell">
            <div className="webdesign-heading webdesign-heading--process">
              <div>
                <p className="eyebrow" data-reveal>PROJEKTABLAUF</p>
                <h2 data-reveal>Transparent vom Erstgespräch bis zur <em>Veröffentlichung.</em></h2>
              </div>
              <p data-reveal>
                Sie wissen jederzeit, wo das Projekt steht, welche Entscheidung als Nächstes ansteht und was WBS gerade für Sie umsetzt.
              </p>
            </div>
            <ol className="webdesign-process__list">
              {processSteps.map((step) => (
                <li key={step.number} data-reveal>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="webdesign-cta section">
          <div className="section-shell webdesign-cta__inner" data-reveal>
            <p className="eyebrow eyebrow--light">UNVERBINDLICHE ANFRAGE</p>
            <h2>Bereit für einen stärkeren digitalen Auftritt?</h2>
            <p>
              Erzählen Sie kurz, was Sie vorhaben. Sie erhalten eine persönliche und ehrliche Einschätzung, welcher nächste Schritt für Ihre Website sinnvoll ist.
            </p>
            <Link className="button button--gold" href="/#kontakt">Unverbindlich anfragen <ArrowIcon /></Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell">
          <div className="footer__top">
            <Brand light />
            <p>Webdesign · IT-Lösungen · Digitalisierung</p>
            <a className="footer__top-link" href="#top" aria-label="Nach oben">↑</a>
          </div>
          <div className="footer__middle">
            <div><span>KONTAKT</span><a href="mailto:philipp.wesner@wesner-solutions.at">philipp.wesner@wesner-solutions.at</a></div>
            <div><span>VERNETZEN</span><a href="https://www.linkedin.com/in/philipp-wesner" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            <div><span>POSITIONIERUNG</span><p>Persönlich · stark vernetzt · lösungsorientiert</p></div>
          </div>
          <div className="footer__bottom">
            <span>© {currentYear} Wesner Business Solutions</span>
            <div><button type="button">Impressum</button><button type="button">Datenschutz</button></div>
            <span>Vertrauen · Mehrwert · Zukunft</span>
          </div>
        </div>
      </footer>
    </>
  );
}
