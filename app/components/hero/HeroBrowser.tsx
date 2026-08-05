"use client";

import { useEffect, useState } from "react";
import { heroIndustrySites, type HeroIndustrySite } from "../../data/heroSites";
import "./HeroBrowser.css";

function DemoSite({ site, active }: { site: HeroIndustrySite; active: boolean }) {
  return (
    <article className={`industry-site industry-site--${site.theme} ${active ? "is-active" : ""}`} aria-hidden={!active}>
      <div className="industry-site__hero" style={{ backgroundImage: `url("${site.image}")` }}>
        <div className="industry-site__overlay" />
        <header className="industry-site__nav">
          <b>{site.brand}</b>
          <span>Leistungen&nbsp;&nbsp;&nbsp; Über uns&nbsp;&nbsp;&nbsp; Kontakt</span>
          <i aria-hidden="true">DE</i>
        </header>
        <div className="industry-site__copy">
          <small>{site.eyebrow}</small>
          <h3>{site.title}<em>{site.titleAccent}</em></h3>
          <p>{site.description}</p>
          <span className="industry-site__cta">{site.cta} <i aria-hidden="true">↗</i></span>
        </div>
      </div>
      <div className="industry-site__proof">
        {site.stats.map((stat, index) => <span key={stat}><small>0{index + 1}</small>{stat}</span>)}
      </div>
      <div className="industry-site__services">
        <div><small>UNSERE KOMPETENZ</small><strong>Qualität, die sichtbar wird.</strong></div>
        {site.services.map((service, index) => <span key={service}><small>0{index + 1}</small>{service}</span>)}
      </div>
    </article>
  );
}

export default function HeroBrowser() {
  const [activeSite, setActiveSite] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActiveSite((current) => (current + 1) % heroIndustrySites.length);
    }, 7200);
    return () => window.clearInterval(interval);
  }, []);

  const currentSite = heroIndustrySites[activeSite];

  return (
    <div className="hero-showcase" data-reveal>
      <div className="hero-showcase__ambient" aria-hidden="true" />
      <div className="hero-browser" aria-label={`Browser-Vorschau: ${currentSite.industry}`}>
        <div className="hero-browser__chrome" aria-hidden="true">
          <div className="hero-browser__window-actions"><i /><i /><i /></div>
          <div className="hero-browser__tab"><span>{currentSite.tabLabel}</span><i>×</i></div>
          <div className="hero-browser__toolbar">
            <span>‹</span><span>›</span><span>↻</span><div><i />{currentSite.url}</div><span>⋯</span>
          </div>
        </div>
        <div className="hero-browser__viewport">
          {heroIndustrySites.map((site, index) => <DemoSite key={site.id} site={site} active={index === activeSite} />)}
        </div>
      </div>
      <div className="hero-showcase__footer">
        <p aria-live="polite"><span /> LIVE WEBSITE · {currentSite.industry.toUpperCase()}</p>
        <div className="hero-showcase__controls" aria-label="Branche auswählen">
          {heroIndustrySites.map((site, index) => (
            <button key={site.id} className={index === activeSite ? "is-active" : ""} type="button" aria-label={`${site.industry} anzeigen`} aria-pressed={index === activeSite} onClick={() => setActiveSite(index)}>
              <span>{site.industry}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
