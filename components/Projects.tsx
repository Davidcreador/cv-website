"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Palette, ArrowUpRight, Sparkles, Code, Layers } from "lucide-react"
import { projects, projectCategories } from "@/data/projects"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my best work showcasing technical expertise and creative vision
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {projectCategories.map((category) => {
            const Icon = categoryIcons[category.value]
            const isActive = selectedCategory === category.value
            
            return (
              <motion.button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  "group relative px-6 py-3 rounded-full font-medium transition-all overflow-hidden",
                  isActive
                    ? "text-white"
                    : "text-foreground hover:text-primary"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background */}
                <motion.span
                  className={cn(
                    "absolute inset-0 rounded-full transition-all",
                    isActive
                      ? "gradient-bg opacity-100"
                      : "bg-gray-100 dark:bg-gray-900 opacity-100 group-hover:opacity-80"
                  )}
                  layoutId="categoryBg"
                  layout
                />
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  {category.label}
                </span>
                
                {/* Hover effect */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Bento Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = project.featured
              const isHovered = hoveredProject === project.id
              
              return (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className={cn(
                    "group relative rounded-2xl overflow-hidden cursor-pointer",
                    isFeatured && "md:col-span-2 md:row-span-2",
                    "bg-card border border-gray-200 dark:border-gray-800"
                  )}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ y: -5 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image/Preview Area */}
                  <div className={cn(
                    "relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
                    isFeatured ? "h-2/3" : "h-1/2"
                  )}>
                    {/* Animated gradient placeholder */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 animate-gradient-shift" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className={cn(
                          "text-6xl font-bold opacity-10",
                          isFeatured && "text-8xl"
                        )}>
                          {project.title.charAt(0)}
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Featured badge */}
                    {isFeatured && (
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </motion.div>
                    )}
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={false}
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: isHovered ? 1 : 0,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                      >
                        View Project
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className={cn(
                    "p-6",
                    isFeatured ? "h-1/3" : "h-1/2"
                  )}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={cn(
                        "font-semibold text-foreground group-hover:text-primary transition-colors",
                        isFeatured ? "text-xl" : "text-lg"
                      )}>
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    
                    <p className={cn(
                      "text-muted-foreground mb-4 line-clamp-2",
                      isFeatured && "line-clamp-3"
                    )}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, isFeatured ? 5 : 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (isFeatured ? 5 : 3) && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - (isFeatured ? 5 : 3)}
                        </span>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                      {project.behanceUrl && (
                        <motion.a
                          href={project.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Palette className="w-4 h-4" />
                          Design
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {/* Border gradient on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-[-1px] rounded-2xl gradient-bg opacity-50" />
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}