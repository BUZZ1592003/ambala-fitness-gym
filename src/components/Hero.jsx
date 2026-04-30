function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content reveal">
        <p className="eyebrow">Ambala's Destination for Real Fitness</p>
        <h1>Transform Your Body at Ambala Fitness Gym</h1>
        <p className="hero-sub">
          Build strength, burn fat, and become unstoppable with focused coaching, serious training
          energy, and a powerful gym community.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn">
            Join Now
          </a>
          <a href="https://www.instagram.com/ambala_fitnessgym/" target="_blank" rel="noreferrer" className="btn btn-outline">
            Follow @ambala_fitnessgym
          </a>
        </div>
        <div className="meta-strip">
          <span>Early Morning to Late Night</span>
          <span>Vijay Nagar, Tangri Road, Ambala</span>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="energy-orb"></div>
        <div className="hero-card">
          <h3>Transformation Starts Here</h3>
          <p>Discipline. Strength. Results.</p>
          <ul>
            <li>Weight Training Zones</li>
            <li>Personal Coaching</li>
            <li>Fat Loss Programs</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
