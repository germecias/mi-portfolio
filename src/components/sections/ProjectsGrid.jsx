import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { sections } from '../../data/sections'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsGrid({ sectionId = 'reels', onOpenProject }) {
  const section = sections.find((s) => s.id === sectionId)
  const sectionProjects = projects.filter((p) => p.sectionId === sectionId)

  if (!section || sectionProjects.length === 0) return null

  return (
    <section id="reels" className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-ink text-3xl md:text-4xl">
          {section.label}
        </h2>
        <p className="text-muted text-sm mt-2">{section.description}</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {sectionProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <ProjectCard project={project} onOpen={onOpenProject} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}