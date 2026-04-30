import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Transformation from './components/Transformation'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [members, setMembers] = useState(0)
  const [coaches, setCoaches] = useState(0)
  const [sessions, setSessions] = useState(0)

  useEffect(() => {
    document.title = 'Ambala Fitness Gym | Transform Your Body'

    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timers = []

    const animateCounter = (target, setter) => {
      let value = 0
      const increment = Math.ceil(target / 60)
      const timer = setInterval(() => {
        value += increment
        if (value >= target) {
          value = target
          clearInterval(timer)
        }
        setter(value)
      }, 25)

      timers.push(timer)
    }

    animateCounter(1200, setMembers)
    animateCounter(6, setCoaches)
    animateCounter(14, setSessions)

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />

        <section className="section stat-band">
          <article className="stat-card reveal">
            <h3>{members}+</h3>
            <p>Member Transformations Driven</p>
          </article>
          <article className="stat-card reveal">
            <h3>{coaches}</h3>
            <p>Focused Training Coaches</p>
          </article>
          <article className="stat-card reveal">
            <h3>{sessions}</h3>
            <p>Hours Open Daily</p>
          </article>
        </section>

        <About />
        <Programs />
        <Gallery />
        <Transformation />
        <Testimonials />
        <Contact />
      </main>

      <a href="#contact" className="floating-cta" aria-label="Quick join button">
        Join Now
      </a>
      <Footer />
    </div>
  )
}

export default App
