const programs = [
  'Weight Training',
  'Fat Loss Coaching',
  'Personal Training',
  "Women's Fitness",
  'Strength Building',
  'General Fitness',
]

function Programs() {
  return (
    <section id="programs" className="section programs">
      <div className="section-head reveal">
        <p className="eyebrow">Programs & Services</p>
        <h2>Train with Intensity, Purpose, and Expert Direction</h2>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card reveal" key={program}>
            <h3>{program}</h3>
            <p>
              Focused sessions designed to build performance, consistency, and visible body
              transformation.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Programs
