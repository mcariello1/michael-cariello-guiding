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

<a
  href="/trips/eastern-sierra-ski-mountaineering"
  className="trip-card"
>
  <div className="trip-card-image">
    <img
      src="/images/eastern_sierra/hero.jpg"
      alt="Eastern Sierra Ski Mountaineering"
    />
  </div>

  <div className="trip-card-content">
    <p className="trip-card-location">
      EASTERN SIERRA · CALIFORNIA
    </p>

    <h2>
      Eastern Sierra
      <br />
      Ski Mountaineering
    </h2>

    <p className="trip-card-tagline">
      Big mountains. Classic lines. Endless possibilities.
    </p>

    <div className="trip-card-details">
      <span>SKI MOUNTAINEERING</span>
      <span>•</span>
      <span>CALIFORNIA</span>
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