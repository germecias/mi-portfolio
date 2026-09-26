import { motion } from 'framer-motion'
import { MessageCircle, Layers, Sparkles, Check } from 'lucide-react'
import { processSteps, processStats } from '../../data/process'

const icons = [MessageCircle, Layers, Sparkles, Check]

export default function Process() {
  return (
    <section className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Kicker */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-10"
      >
        <span className="w-8 h-px bg-accent" />
        <span className="text-muted font-sans text-xs tracking-widest uppercase">
          02 / Cómo trabajo
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-16">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-ink text-4xl md:text-5xl leading-[1.1] max-w-lg"
        >
          Edición con criterio,{' '}
          <span className="text-accent">sin vueltas innecesarias</span>
        </motion.h2>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex gap-8 flex-shrink-0"
        >
          {processStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-ink text-2xl">{stat.value}</p>
              <p className="text-muted text-xs uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Timeline de pasos */}
      <div className="border border-muted/15 bg-surface/40">
        {/* barra tipo editor de video */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-muted/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
            <span className="text-muted text-xs font-sans ml-3 tracking-wide">
              PROCESO / TIMELINE_01
            </span>
          </div>
          <span className="text-muted text-xs font-sans tracking-widest">
            00:00:24:12
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {processSteps.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border-r border-b md:border-b-0 border-muted/15 last:border-r-0"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-accent text-xs font-sans tracking-wide">
                    {item.step}
                  </span>
                  <span className="text-muted/50 text-[10px] font-sans uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>

                <div className="w-11 h-11 rounded-full border border-accent/40 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>

                <p className="font-display text-ink text-lg mb-2">{item.label}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}