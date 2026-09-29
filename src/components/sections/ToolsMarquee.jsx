import { tools } from '../../data/tools'

// importá cada logo — agregá/sacá líneas según tus herramientas
import premiere from '../../assets/tools/premierepro.png'
import aftereffects from '../../assets/tools/aftereffects.png'
import capcut from '../../assets/tools/capcut.png'
import davinciresolve from '../../assets/tools/davinciresolve.png'
import photoshop from '../../assets/tools/photoshop.png'

const logoMap = {
  premiere,
  aftereffects,
  capcut,
  davinciresolve,
  photoshop,
}

// repetimos el set de herramientas varias veces para que sea
// más ancho que cualquier pantalla, evitando el salto/hueco en el loop
const oneSet = Array(4).fill(tools).flat()
const loopTools = [...oneSet, ...oneSet]

export default function ToolsMarquee() {
  return (
    <section className="relative py-16 border-t border-b border-muted/10 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {loopTools.map((tool, i) => (
          <div
            key={`${tool.id}-${i}`}
            className="flex items-center gap-3 px-10 flex-shrink-0"
          >
            <img
              src={logoMap[tool.id]}
              alt={tool.label}
              className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-muted text-sm font-sans whitespace-nowrap">
              {tool.label}
            </span>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </section>
  )
}