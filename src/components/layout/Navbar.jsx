import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-7 w-auto" />
        <span className="font-display text-ink text-lg tracking-tight">
          German Mecias
        </span>
      </div>

      <a
        href="#contact"
        className="font-sans text-sm text-muted hover:text-ink transition-colors duration-300"
      >
        Contacto
      </a>
    </motion.nav>
  )
}