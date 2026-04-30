function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-head reveal">
        <p className="eyebrow">Contact & Join</p>
        <h2>Book Your Visit and Start Your Fitness Transformation</h2>
      </div>

      <div className="contact-grid">
        <article className="panel reveal">
          <h3>Visit Us</h3>
          <p>Ambala Fitness Gym</p>
          <p>Vijay Nagar, near C Lal Hospital, Tangri Road, near Baba Balkhnath Mandir, Ambala</p>
          <p>Reference area: Raja Park, Ambala Cantt, Ambala, Haryana 133001</p>
          <p>
            Phone: <a href="tel:7988228015">7988228015</a>
          </p>
          <p>
            Instagram:{' '}
            <a href="https://www.instagram.com/ambala_fitnessgym/" target="_blank" rel="noreferrer">
              @ambala_fitnessgym
            </a>
          </p>
          <p>Hours: 5:00 AM - 10:00 PM (Daily)</p>
        </article>

        <form className="join-form panel reveal" onSubmit={(event) => event.preventDefault()}>
          <h3>Join Form</h3>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />

          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="Your phone" required />

          <label htmlFor="goal">Fitness Goal</label>
          <input id="goal" name="goal" type="text" placeholder="Fat loss, strength, etc." required />

          <button type="submit" className="btn">
            Request Call Back
          </button>
        </form>
      </div>

      <div className="map-wrap reveal">
        <iframe
          title="Ambala Fitness Gym Map"
          loading="lazy"
          src="https://www.google.com/maps?q=Vijay%20Nagar%20Tangri%20Road%20Ambala&output=embed"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
