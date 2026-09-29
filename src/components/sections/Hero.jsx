import { motion } from 'framer-motion'
import { useTimecode } from '../../hooks/useTimecode'
import SocialLinks from '../ui/SocialLinks'
import heroIcon from '../../assets/hero-icon.png'

export default function Hero() {
  const timecode = useTimecode()

  return (
    <section className="relative min-h-screen bg-bg overflow-hidden flex items-center">

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12 md:gap-8">

        {/* Columna de texto */}
        <div className="flex-1 w-full">

          {/* Rol / kicker */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-muted font-sans text-sm tracking-wide mb-4"
          >
            Editor, productor y realizador audiovisual
          </motion.p>

          {/* Título con wipe reveal */}
          <div className="relative overflow-hidden">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-ink text-5xl md:text-7xl leading-[1.05]"
            >
              Meciás German
            </motion.h1>

            {/* Barra de corte / wipe */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              style={{ originX: 0 }}
              className="absolute inset-0 bg-accent"
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-muted font-sans text-base md:text-lg mt-6 max-w-md"
          >
            Narrativa visual, ritmo y color para marcas y creadores.
          </motion.p>

          <SocialLinks delay={1.5} />
          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8"
          >
            
            <a
              href="#reels"
              className="inline-flex items-center gap-2 border border-accent text-accent font-sans text-sm tracking-wide px-6 py-3 hover:bg-accent hover:text-bg transition-colors duration-300"
            >
              Ver trabajos
            </a>
          </motion.div>

      
          
        </div>

        {/* Columna del ícono grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <img
            src={heroIcon}
            alt=""
            className="w-48 h-48 md:w-96 md:h-96"
          />
        </motion.div>

      </div>

      {/* Timecode, esquina inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-12 font-sans text-xs text-muted tracking-widest"
      >
        {timecode}
      </motion.div>
    </section>
  )
}