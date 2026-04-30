import { useState } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'transform', label: 'Transform' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="topbar">
      <a href="#home" className="brand" aria-label="Ambala Fitness Gym Home">
        <span className="brand-mark">AF</span>
        <span>
          <strong>Ambala Fitness Gym</strong>
          <small>Train Hard. Transform Faster.</small>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href="tel:7988228015" className="btn btn-sm" onClick={handleLinkClick}>
          Book a Visit
        </a>
      </nav>
    </header>
  )
}

export default Navbar
