import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import instagramIcon from '../../assets/icons/instagram.svg'

const aspectByFormat = {
  vertical: 'aspect-[9/16]',
  horizontal: 'aspect-video',
}

export default function ProjectCard({ project, onOpen }) {
  const aspect = aspectByFormat[project.format] || 'aspect-[9/16]'

  return (
    <div>
      <motion.button
        onClick={() => onOpen(project)}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className={`relative w-full ${aspect} overflow-hidden bg-surface text-left group`}
      >
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-bg/70 flex flex-col justify-between p-4"
        >
          <div className="flex justify-end">
            <div className="w-9 h-9 rounded-full border border-accent flex items-center justify-center">
              <Play size={14} className="text-accent fill-accent ml-0.5" />
            </div>
          </div>

          <div>
            <p className="font-display text-ink text-lg leading-tight">
              {project.title}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wide text-muted border border-muted/40 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.button>

      {project.instagramUrl && (
        <a
          href={project.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver insights en Instagram"
          className="flex items-center justify-center gap-1.5 mt-2 py-1.5 text-accent hover:opacity-70 transition-opacity duration-300"
        >
          <img
            src={instagramIcon}
            alt=""
            className="w-3.5 h-3.5"
            style={{ filter: 'invert(64%) sepia(45%) saturate(400%) hue-rotate(0deg)' }}
          />
          <span className="text-[10px] font-sans tracking-wide uppercase">
            Insights
          </span>
        </a>
      )}
    </div>
  )
}