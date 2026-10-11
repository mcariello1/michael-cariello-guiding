
import "./TripReports.css";

const reports = [
  {
    title: "Skiing the Eastern Sierra",
    location: "CALIFORNIA · SIERRA NEVADA",
    category: "SKI MOUNTAINEERING",
    image: "/images/eastern_sierra/couloir.jpg",
    description:
      "Steep lines, long approaches, and spring days in California's high mountains.",
  },
  {
    title: "Exploring the High Sierra",
    location: "CALIFORNIA · SIERRA NEVADA",
    category: "ALPINE EXPLORATION",
    image: "/images/eastern_sierra/touring.jpg",
    description:
      "A collection of mountain experiences, remote terrain, and unforgettable days.",
  },
  {
    title: "Mountain Perspectives",
    location: "EASTERN SIERRA",
    category: "FROM THE FIELD",
    image: "/images/eastern_sierra/summit.jpg",
    description:
      "Photographs and stories from time spent exploring the mountains.",
  },
];

export default function TripReports() {
  return (
    <main className="tr-page">
      <section className="tr-heading">
        <div className="tr-container">
          <a href="/mountain-journal" className="tr-back">
            ← MOUNTAIN JOURNAL
          </a>

          <p className="tr-eyebrow">STORIES FROM THE FIELD</p>
          <h1>TRIP REPORTS.</h1>
          <p className="tr-intro">
            A collection of adventures, experiences, and stories
            from the mountains.
          </p>
        </div>
      </section>

      <section className="tr-reports">
        <div className="tr-container">
          <div className="tr-grid">
            {reports.map((report) => (
              <article className="tr-card" key={report.title}>
                <div className="tr-card-image">
                  <img src={report.image} alt={report.title} />
                </div>

                <div className="tr-card-details">
                  <span className="tr-eyebrow">{report.location}</span>
                  <h2>{report.title}</h2>
                  <p>{report.description}</p>
                  <span className="tr-category">{report.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
