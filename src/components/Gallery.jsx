const galleryItems = [
  {
    title: 'Heavy Lifting Energy',
    type: 'Photo',
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.instagram.com/ambala_fitnessgym/',
  },
  {
    title: 'Member Grind Sessions',
    type: 'Reel',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.instagram.com/ambala_fitnessgym/reels/',
  },
  {
    title: 'Strength Floor Vibes',
    type: 'Photo',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.instagram.com/ambala_fitnessgym/',
  },
  {
    title: 'Transformation Momentum',
    type: 'Reel',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    url: 'https://www.instagram.com/ambala_fitnessgym/reels/',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="section-head reveal">
        <p className="eyebrow">Gallery & Reels</p>
        <h2>See the Real Gym Energy from @ambala_fitnessgym</h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="gallery-card reveal">
            <img src={item.image} alt={`${item.title} at Ambala Fitness Gym`} loading="lazy" />
            <div className="gallery-overlay">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>Open on Instagram</p>
            </div>
          </a>
        ))}
      </div>

      <div className="insta-cta reveal">
        <a href="https://www.instagram.com/ambala_fitnessgym/" target="_blank" rel="noreferrer" className="btn">
          Follow us on Instagram @ambala_fitnessgym
        </a>
      </div>
    </section>
  )
}

export default Gallery
