const testimonials = [
  {
    name: 'Rohit S.',
    text: 'The atmosphere is intense and motivating. I have gained strength and confidence in just a few months.',
  },
  {
    name: 'Neha K.',
    text: "Great trainers and clean setup. Women's fitness sessions helped me lose fat and stay consistent.",
  },
  {
    name: 'Amit P.',
    text: 'This gym keeps you focused. Serious training vibe with real support for transformation goals.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="section-head reveal">
        <p className="eyebrow">Success Stories</p>
        <h2>What Members Say About Ambala Fitness Gym</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card reveal" key={item.name}>
            <p>"{item.text}"</p>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
