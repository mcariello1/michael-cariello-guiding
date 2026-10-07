import './Trips.css'

function Trips() {
  return (
    <div className="trips-page">

      <header className="trips-header">
        <a href="/" className="trips-brand">
  <img
    src="/logo.png"
    alt="Michael Cariello Mountain Guide"
    className="trips-logo"
  />

  <div className="trips-brand-text">
    <span className="trips-name">MICHAEL CARIELLO</span>
    <span className="trips-title">MOUNTAIN GUIDE</span>
  </div>
</a>

        <nav>
          <a href="/">HOME</a>
          <a href="/trips">TRIPS</a>
          <a href="/#about">ABOUT</a>
          <a href="/#contact">CONTACT</a>
        </nav>
      </header>

      <main className="trips-content">

        <p className="trips-eyebrow">GUIDED ADVENTURES</p>

        <h1>Trips</h1>

        <p className="trips-intro">
          Climbing, skiing and alpine adventures in wild places.
        </p>

        <a
  href="/trips/mediterranean-coastal-climbing"
  className="trip-card"
>
  <div className="trip-card-image">
    <img
      src="/italy.jpg"
      alt="Mediterranean Coastal Climbing"
    />
  </div>

  <div className="trip-card-content">

    <p className="trip-card-location">
      AMALFI COAST · ITALY
    </p>

    <h2>
      Mediterranean
      <br />
      Coastal Climbing
    </h2>

    <p className="trip-card-tagline">
      Climb above the Mediterranean.
    </p>

    <div className="trip-card-details">
      <span>ROCK CLIMBING</span>
      <span>•</span>
      <span>ITALY</span>
    </div>

    <span className="trip-card-link">
      EXPLORE TRIP →
    </span>

  </div>
</a>

      </main>

    </div>
  )
}

export default Trips