"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, type PortfolioProject } from "../data/projects";

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`brand ${light ? "brand--light" : ""}`}
      href="/"
      aria-label="Zur Startseite"
    >
      <Image className="brand__mark" src="/wbs-navigation-logo.png" alt="" width={96} height={35} priority={!light} />
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

function PreviewPage({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  return (
    <div className={`portfolio-preview portfolio-preview--${project.theme} ${compact ? "portfolio-preview--compact" : ""}`}>
      <section className="portfolio-preview__hero">
        <Image
          className="portfolio-preview__hero-image"
          src={project.image}
          alt=""
          fill
          sizes={compact ? "(max-width: 700px) 72vw, 210px" : "(max-width: 1080px) 100vw, 56vw"}
        />
        <div className="portfolio-preview__nav">
          <b>{project.browserTitle}</b>
          <span>Leistungen&nbsp;&nbsp; Projekte&nbsp;&nbsp; Kontakt</span>
        </div>
        <div className="portfolio-preview__headline">
          <small>DEMO-KONZEPT</small>
          <strong>{project.browserSubtitle}</strong>
          <span>Strategisch. Hochwertig. Persönlich.</span>
        </div>
      </section>
      <section className="portfolio-preview__content">
        <small>{project.previewEyebrow}</small>
        <strong>{project.previewHeading}</strong>
        <div className="portfolio-preview__services">
          {project.previewItems.map((item, index) => (
            <span key={item}><i>0{index + 1}</i><b>{item}</b></span>
          ))}
        </div>
      </section>
      <section className="portfolio-preview__tiles" aria-hidden="true">
        <i /><i /><i />
      </section>
    </div>
  );
}

function ProjectPreview({ project, index }: { project: PortfolioProject; index: number }) {
  const animationStyle = { "--project-preview-delay": `${1.6 + index * 1.15}s` } as CSSProperties;

  return (
    <div className="portfolio-devices" id={`${project.slug}-vorschau`} style={animationStyle}>
      <div className="portfolio-device portfolio-device--desktop" aria-label={`Desktop-Vorschau von ${project.name}`}>
        <div className="portfolio-device__browserbar"><i /><i /><i /><span>{project.slug}.demo</span></div>
        <div className="portfolio-device__viewport"><PreviewPage project={project} /></div>
      </div>
      <div className="portfolio-device portfolio-device--phone" aria-label={`Smartphone-Vorschau von ${project.name}`}>
        <div className="portfolio-device__speaker" />
        <div className="portfolio-device__viewport"><PreviewPage project={project} compact /></div>
        <div className="portfolio-device__home" />
      </div>
      <span className="portfolio-devices__light" aria-hidden="true" />
    </div>
  );
}

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5%" },
    );

    document.querySelectorAll("[data-project-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="top" />
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <Link className="desktop-nav__link" href="/webdesign">Webdesign</Link>
            <div className="nav-menu">
              <Link className="desktop-nav__link nav-menu__trigger" href="/#loesungen">Lösungen <span aria-hidden="true">⌄</span></Link>
              <div className="nav-dropdown" aria-label="Lösungen direkt auswählen">
                <Link href="/#solution-fleet"><small>01</small><span>Fleet Control</span></Link>
                <Link href="/#solution-time"><small>02</small><span>Zeiterfassung</span></Link>
                <Link href="/#solution-it"><small>03</small><span>IT-Lösungen</span></Link>
              </div>
            </div>
            <Link className="desktop-nav__link" href="/projekte" aria-current="page">Projekte</Link>
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
          <Link className="mobile-nav__link" href="/webdesign">Webdesign</Link>
          <Link className="mobile-nav__link" href="/#loesungen">Lösungen</Link>
          <Link className="mobile-nav__link" href="/projekte" aria-current="page">Projekte</Link>
          <Link className="mobile-nav__link" href="/#ueber-wbs">Über WBS</Link>
          <div className="mobile-nav__solutions">
            <Link href="/#solution-fleet">Fleet Control</Link>
            <Link href="/#solution-time">Zeiterfassung</Link>
            <Link href="/#solution-it">IT-Lösungen</Link>
          </div>
          <Link className="mobile-nav__cta mobile-nav__link" href="/#kontakt">Unverbindliches Erstgespräch</Link>
        </nav>
      </header>

      <main className="portfolio-page">
        <section className="portfolio-hero" aria-labelledby="portfolio-heading">
          <div className="portfolio-hero__orb" aria-hidden="true" />
          <div className="section-shell portfolio-hero__inner">
            <p className="eyebrow eyebrow--light" data-project-reveal>PROJEKTE & DEMO-KONZEPTE</p>
            <h1 id="portfolio-heading" data-project-reveal>Digitale Auftritte, die <em>Haltung zeigen.</em></h1>
            <p className="portfolio-hero__intro" data-project-reveal>
              Fünf Branchen, fünf eigenständige Richtungen und ein gemeinsamer Anspruch: Websites, die Unternehmen klar positionieren und auf jedem Bildschirm überzeugen.
            </p>
            <div className="portfolio-hero__meta" data-project-reveal>
              <span><b>05</b> ausgewählte Konzepte</span>
              <span><b>100%</b> responsive gedacht</span>
              <span><b>WBS</b> individuell entwickelt</span>
            </div>
          </div>
        </section>

        <section className="portfolio-list" aria-label="Projektübersicht">
          {portfolioProjects.map((project, index) => (
            <article className={`portfolio-project portfolio-project--${project.theme}`} key={project.slug}>
              <div className="section-shell portfolio-project__grid">
                <div className="portfolio-project__copy" data-project-reveal>
                  <div className="portfolio-project__index"><span>0{index + 1}</span><i /></div>
                  <div className="portfolio-project__labels">
                    <span>{project.industry}</span><span>{project.projectType}</span>
                  </div>
                  <h2>{project.name}</h2>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label="Besondere Leistungen">
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <a className="portfolio-project__link" href={`#${project.slug}-vorschau`}>
                    Projekt entdecken <ArrowIcon />
                  </a>
                </div>
                <div className="portfolio-project__visual" data-project-reveal>
                  <ProjectPreview project={project} index={index} />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="portfolio-note section">
          <div className="section-shell portfolio-note__inner" data-project-reveal>
            <span>TRANSPARENT PRÄSENTIERT</span>
            <h2>Demo-Konzept heute. <em>Starkes Projekt morgen.</em></h2>
            <p>Die gezeigten Arbeiten sind bewusst als Demo-Projekte gekennzeichnet. Sie zeigen den gestalterischen und technischen Anspruch von WBS – ohne erfundene Kunden oder Ergebnisse.</p>
            <Link className="button button--gold" href="/#kontakt">Eigenes Projekt besprechen <ArrowIcon /></Link>
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
