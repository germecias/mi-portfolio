import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import ProjectsGrid from './components/sections/ProjectsGrid'
import ProjectModal from './components/ui/ProjectModal'
import ToolsMarquee from './components/sections/ToolsMarquee'
import Process from './components/sections/Process'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main>
      <Navbar />
      <Hero />
      <ToolsMarquee />
      <Process />
      <ProjectsGrid sectionId="reels" onOpenProject={setSelectedProject} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}

export default App