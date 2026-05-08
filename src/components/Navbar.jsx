import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'skills', label: 'Skills' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="hero"
          smooth
          duration={600}
          className="cursor-pointer font-mono text-cyan-400 font-semibold text-lg tracking-wide hover:text-white transition-colors"
        >
          SJ<span className="text-white">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                offset={-64}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer font-medium tracking-wide"
                activeClass="text-cyan-400"
                spy
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer font-medium py-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
