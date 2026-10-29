import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-ink text-lg tracking-tight">
          Siena Studios
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={toggleLanguage}
          className="text-muted hover:text-ink transition-colors duration-300 text-sm font-sans tracking-wide flex items-center"
        >
            {language === 'es' ? (
    <>
      <img src="src/assets/icons/argentina.svg" className="w-5 h-5" />
      <span>ES</span>
    </>
  ) : (
    <>
      <img src="src/assets/icons/united-states-flag.svg" className="w-5 h-5" />
      <span>EN</span>
    </>
  )}
        </button>

        <a
          href="#contact"
          className="font-sans text-sm text-muted hover:text-ink transition-colors duration-300"
        >
          {t.nav.contact}
        </a>
      </div>
    </motion.nav>
  )
}