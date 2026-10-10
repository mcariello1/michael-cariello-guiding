
import { useState } from "react";
import "./EasternSierraTrip.css";

const imageBase = "/images/eastern-sierra";

const objectives = [
  {
    title: "Classic Ski Mountaineering",
    category: "TECHNICAL DESCENTS",
    image: `${imageBase}/couloir.jpg`,
    description:
      "Steep couloirs, high alpine summits, and technical descents through some of California's most dramatic mountain terrain.",
  },
  {
    title: "Backcountry Exploration",
    category: "ALPINE TOURING",
    image: `${imageBase}/touring.jpg`,
    description:
      "Long approaches, remote basins, and rewarding days traveling through the heart of the Eastern Sierra.",
  },
  {
    title: "Custom Mountain Objectives",
    category: "PERSONALIZED ADVENTURES",
    image: `${imageBase}/summit.jpg`,
    description:
      "Thoughtfully planned mountain days built around experience, conditions, and individual goals.",
  },
];

const tripReports = [
  {
    title: "Eastern Sierra Lines",
    location: "California",
    image: `${imageBase}/couloir.jpg`,
    description: "A collection of steep descents and mountain experiences.",
  },
  {
    title: "Spring in the High Sierra",
    location: "Sierra Nevada",
    image: `${imageBase}/touring.jpg`,
    description: "Exploring high alpine terrain during the spring season.",
  },
  {
    title: "Days in the Mountains",
    location: "Eastern Sierra",
    image: `${imageBase}/summit.jpg`,
    description: "Photos and stories from time spent in the range.",
  },
];

function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`es-photo ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function EasternSierraTrip() {
  return (
    <main className="es-page">
      <section className="es-hero">
        <Photo
          src={`${imageBase}/hero.jpg`}
          alt="Ski mountaineering in the Eastern Sierra"
          className="es-hero-image"
        />
        <div className="es-hero-shade" />

        <div className="es-hero-content es-container">
          <p className="es-eyebrow">CALIFORNIA · SIERRA NEVADA</p>
          <h1>
            EASTERN
            <br />
            SIERRA
          </h1>
          <p className="es-hero-subtitle">SKI MOUNTAINEERING</p>
          <p className="es-hero-tagline">
            Classic lines. Big mountains. Endless possibilities.
          </p>
          <a className="es-button" href="#explore">
            EXPLORE THE RANGE <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className="es-scroll" href="#explore">
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      <section id="explore" className="es-intro es-section">
        <div className="es-container es-intro-grid">
          <div>
            <p className="es-eyebrow">THE RANGE</p>
            <h2>
              A LANDSCAPE
              <br />
              BUILT FOR
              <br />
              <em>ADVENTURE.</em>
            </h2>
          </div>
          <div className="es-intro-copy">
            <p>
              Rising dramatically above the Owens Valley, the Eastern Sierra
              offers some of the most compelling ski mountaineering terrain
              in North America.
            </p>
            <p>
              From long spring tours to steep alpine couloirs, the range
              rewards those willing to travel farther, climb higher,
              and explore beyond the familiar.
            </p>
            <p>
              This is a collection of mountain experiences, photography,
              and opportunities to explore the Sierra on skis.
            </p>
          </div>
        </div>
      </section>

      <section className="es-objectives es-section">
        <div className="es-container">
          <div className="es-section-heading">
            <div>
              <p className="es-eyebrow">EXPLORE THE POSSIBILITIES</p>
              <h2>THE EXPERIENCE.</h2>
            </div>
            <p>
              From open alpine bowls to technical descents, every day
              in the Sierra offers something different.
            </p>
          </div>

          <div className="es-card-grid">
            {objectives.map((item, index) => (
              <article className="es-objective-card" key={item.title}>
                <Photo src={item.image} alt={item.title} />
                <div className="es-card-shade" />
                <div className="es-card-content">
                  <span className="es-card-number">
                    0{index + 1} / {item.category}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="es-quote-section">
        <div className="es-container">
          <p className="es-eyebrow">THE MOUNTAIN EXPERIENCE</p>
          <blockquote>
            "The best lines are the ones you earn."
          </blockquote>
          <p>
            A personal perspective on exploring mountains through
            ski mountaineering.
          </p>
        </div>
      </section>

      <section id="trip-reports" className="es-journal es-section">
        <div className="es-container">
          <div className="es-section-heading">
            <div>
              <p className="es-eyebrow">FROM THE FIELD</p>
              <h2>MOUNTAIN JOURNAL.</h2>
            </div>
            <p>
              A growing collection of photographs, ski descents,
              and stories from the Eastern Sierra.
            </p>
          </div>

          <div className="es-journal-grid">
            {tripReports.map((report) => (
              <article className="es-journal-card" key={report.title}>
                <Photo src={report.image} alt={report.title} />
                <div className="es-journal-details">
                  <span className="es-eyebrow">{report.location}</span>
                  <h3>{report.title}</h3>
                  <p>{report.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="es-journal-note">
            Individual trip reports and photo galleries coming soon.
          </p>
        </div>
      </section>

      <section id="guiding" className="es-guiding es-section">
        <div className="es-container es-guiding-grid">
          <div>
            <p className="es-eyebrow">GUIDED ADVENTURES</p>
            <h2>
              YOUR NEXT
              <br />
              OBJECTIVE
              <br />
              <em>STARTS HERE.</em>
            </h2>
          </div>
          <div className="es-guiding-copy">
            <p>
              Interested in exploring the Eastern Sierra on skis?
              Get in touch to discuss your experience, objectives,
              and potential mountain adventures.
            </p>
            <p>
              Guided trips, when offered, are arranged and operated
              through Alpenglow Expeditions and are subject to
              applicable permits, conditions, and availability.
            </p>
            <a
              className="es-button"
              href="mailto:YOUR_EMAIL@example.com?subject=Eastern%20Sierra%20Ski%20Mountaineering"
            >
              START A CONVERSATION <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
