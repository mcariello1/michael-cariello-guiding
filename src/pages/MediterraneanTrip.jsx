import './MediterraneanTrip.css'

function MediterraneanTrip() {
  return (
    <div className="med-trip">

      <section className="med-hero">
        <video
  className="med-hero-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/amalfi-hero.mp4" type="video/mp4" />
</video>
        <div className="med-hero-overlay"></div>

        <div className="med-hero-content">

          <p className="med-location">
            AMALFI COAST · ITALY
          </p>

          <h1>
            Mediterranean
            <br />
            Coastal Climbing
          </h1>

          <p className="med-subtitle">
            Climb above the Mediterranean.
          </p>

          <div className="med-summary">

            <div>
              <span>DURATION</span>
              <strong>7 Days</strong>
            </div>

            <div>
              <span>GROUP</span>
              <strong>Small Group</strong>
            </div>

            <div>
              <span>SEASON</span>
              <strong>Spring / Fall</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>Southern Italy</strong>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default MediterraneanTrip