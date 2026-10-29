import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { photos } from '../../data/photos'
import { useLanguage } from '../../context/LanguageContext'

export default function PhotoGallery() {
  const { language, t } = useLanguage()
  const [selected, setSelected] = useState(null)

  // cerrar el visor con la tecla Escape
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section id="fotografia" className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-ink text-3xl md:text-4xl">
          {t.photos.title}
        </h2>
        <p className="text-muted text-sm mt-2">{t.photos.description}</p>
      </motion.div>

      {/* Columnas tipo galería: respeta la proporción de cada foto */}
      <div className="columns-2 md:columns-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.id}
            onClick={() => setSelected(photo)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative block w-full mb-3 md:mb-4 overflow-hidden bg-surface break-inside-avoid"
          >
            <img
              src={photo.src}
              alt={photo.alt[language]}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {photo.caption[language] && (
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                <p className="font-display text-ink text-sm">
                  {photo.caption[language]}
                </p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Visor en grande */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-bg/95 flex flex-col items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute top-6 right-6 text-muted hover:text-ink transition-colors"
            >
              <X size={28} />
            </button>

            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              src={selected.src}
              alt={selected.alt[language]}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {selected.caption[language] && (
              <p className="text-muted text-sm mt-4 text-center">
                {selected.caption[language]}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}