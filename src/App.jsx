import './App.css'

function App() {
  return (
    <div className="site">

      <header className="navbar">

        <div className="brand">
          <img
            src="/logo.png"
            alt="Michael Cariello Mountain Guide"
            className="logo"
          />

          <div className="brand-text">
            <span className="name">MICHAEL CARIELLO</span>
            <span className="title">MOUNTAIN GUIDE</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#trips">TRIPS</a>
          <a href="#destinations">DESTINATIONS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

      </header>

      <main className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="eyebrow">
            SKI <span>•</span> ROCK <span>•</span> ALPINE
          </p>

          <h1>
            Adventures in
            <br />
            wild places.
          </h1>

          <div className="divider"></div>

          <p className="hero-description">
            Private and small-group mountain
            <br />
            adventures in the Sierra Nevada
            <br />
            and beyond.
          </p>

          <a className="hero-button" href="#trips">
            EXPLORE TRIPS
            <span className="arrow">→</span>
          </a>

        </div>

        <div className="scroll-indicator">⌄</div>

      </main>

    </div>
  )
}

export default App