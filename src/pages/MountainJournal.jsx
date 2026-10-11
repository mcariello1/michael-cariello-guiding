
import "./MountainJournal.css";

const journalSections = [
  {
    title: "TRIP REPORTS",
    subtitle: "STORIES FROM THE FIELD",
    description:
      "Stories from ski descents, alpine climbs, expeditions, and memorable days in the mountains.",
    image: "/images/eastern_sierra/couloir.jpg",
    link: "/mountain-journal/trip-reports",
  },
  {
    title: "PHOTO CATALOG",
    subtitle: "PLACES & PERSPECTIVES",
    description:
      "A visual collection of mountain ranges, ski lines, climbing areas, and landscapes explored around the world.",
    image: "/images/eastern_sierra/summit.jpg",
    link: "/mountain-journal/photo-catalog",
  },
];

export default function MountainJournal() {
  return (
    <main className="mj-page">
      <section className="mj-hero">
        <div className="mj-hero-image" />
        <div className="mj-hero-overlay" />

        <div className="mj-hero-content">
          <p className="mj-eyebrow">STORIES · PHOTOGRAPHY · EXPLORATION</p>
          <h1>
            MOUNTAIN
            <br />
            JOURNAL.
          </h1>
          <p className="mj-hero-description">
            A visual record of mountains explored, lines skied,
            and experiences collected along the way.
          </p>
          <a href="#collections" className="mj-button">
            EXPLORE THE JOURNAL ↗
          </a>
        </div>
      </section>

      <section id="collections" className="mj-collections">
        <div className="mj-container">
          <div className="mj-section-heading">
            <p className="mj-eyebrow">FROM THE MOUNTAINS</p>
            <h2>THE COLLECTIONS.</h2>
            <p>
              Experiences told through stories, photographs,
              and the places that make them memorable.
            </p>
          </div>

          <div className="mj-card-grid">
            {journalSections.map((section, index) => (
              <a
                href={section.link}
                className="mj-card"
                key={section.title}
              >
                <img src={section.image} alt={section.title} />
                <div className="mj-card-overlay" />
                <div className="mj-card-content">
                  <span className="mj-card-number">
                    0{index + 1} / {section.subtitle}
                  </span>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <span className="mj-card-link">
                    EXPLORE COLLECTION ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
