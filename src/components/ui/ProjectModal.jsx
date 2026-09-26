import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-bg/95 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-6 right-6 text-muted hover:text-ink transition-colors"
          >
            <X size={28} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={
              project.format === 'vertical'
                ? 'w-full max-w-sm aspect-[9/16]'
                : 'w-full max-w-4xl aspect-video'
            }
          >
            <video
              key={project.videoUrl}
              src={project.videoUrl}
              poster={project.thumbnail}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover bg-black"
            />

            <div className="mt-4">
              <p className="font-display text-ink text-xl">{project.title}</p>
              <p className="text-muted text-sm mt-1">{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}