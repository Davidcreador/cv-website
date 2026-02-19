"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Palette, ArrowUpRight, Sparkles, Code, Layers } from "lucide-react"
import { projects, projectCategories } from "@/data/projects"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  )

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "all": Layers,
    "development": Code,
    "design": Palette,
    "volunteer": Sparkles
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-terminal-accent text-sm mb-4 block">
            {'// featured work'}
          </span>
          <h2 className="section-title text-foreground mb-4">
            Projects
          </h2>
          <p className="section-subtitle mx-auto">
            A collection of my best work showcasing technical expertise and creative vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {projectCategories.map((category) => {
            const Icon = categoryIcons[category.value]
            const isActive = selectedCategory === category.value
            
            return (
              <motion.button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all text-sm font-mono",
                  isActive 
                    ? 'bg-terminal-accent/10 text-terminal-accent border border-terminal-accent/30' 
                    : 'bg-terminal-bg border border-terminal-border text-muted-foreground hover:border-terminal-accent/50'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  {category.label}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = project.featured
              const isHovered = hoveredProject === project.id
              
              return (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className={cn(
                    "group relative rounded-xl overflow-hidden cursor-pointer border border-terminal-border bg-terminal-bg",
                    isFeatured && "md:col-span-2"
                  )}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ y: -3 }}
                >
                  <div className={cn(
                    "relative overflow-hidden",
                    isFeatured ? "h-48" : "h-36"
                  )}>
                    <div className="absolute inset-0 bg-gradient-to-br from-terminal-accent/10 via-terminal-purple/5 to-terminal-pink/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold opacity-10 text-terminal-accent">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    
                    {isFeatured && (
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-mono bg-terminal-accent/20 text-terminal-accent flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-terminal-accent transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-terminal-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, isFeatured ? 4 : 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono rounded border border-terminal-border bg-terminal-bg/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 text-xs">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-terminal-accent transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-terminal-purple transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      )}
                      {project.behanceUrl && (
                        <a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-terminal-pink transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Palette className="w-3 h-3" />
                          Design
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
