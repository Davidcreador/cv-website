"use client"

import { motion } from "framer-motion"
import { skillCategories, languages } from "@/data/skills"
import { 
  Code2, 
  Server, 
  Wrench, 
  Palette, 
  Globe,
  ChevronRight
} from "lucide-react"
import { useState } from "react"

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Tools & Technologies": Wrench,
  "Design & Creative": Palette,
}

function SkillBar({ name, level, index }: { name: string, level: number, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-terminal-accent transition-colors font-mono">
          {name}
        </span>
        <span className="text-xs font-mono text-terminal-accent">{level}%</span>
      </div>
      <div className="relative h-1.5 bg-terminal-border rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-terminal-accent to-terminal-purple"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const currentCategory = skillCategories[selectedCategory]
  const CategoryIcon = categoryIcons[currentCategory.title]

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-terminal-accent text-sm mb-4 block">
            {'// technical expertise'}
          </span>
          <h2 className="section-title text-foreground mb-4">
            Skills
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical proficiency and capabilities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {skillCategories.map((category, index) => {
              const Icon = categoryIcons[category.title]
              const isActive = selectedCategory === index
              
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setSelectedCategory(index)}
                  className={`
                    relative px-4 py-2 rounded-lg font-medium transition-all text-sm font-mono
                    ${isActive 
                      ? 'bg-terminal-accent/10 text-terminal-accent border border-terminal-accent/30' 
                      : 'bg-terminal-bg border border-terminal-border text-muted-foreground hover:border-terminal-accent/50'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {category.title}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {CategoryIcon && (
                  <div className="p-2 rounded-lg bg-terminal-accent/10">
                    <CategoryIcon className="w-5 h-5 text-terminal-accent" />
                  </div>
                )}
                <h3 className="text-lg font-semibold">{currentCategory.title}</h3>
              </div>
              
              <div className="space-y-4">
                {currentCategory.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-terminal-border bg-terminal-bg/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-terminal-purple/10">
                    <Globe className="w-5 h-5 text-terminal-purple" />
                  </div>
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-terminal-border/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-terminal-accent" />
                        <span className="text-sm font-mono">{lang.name}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-terminal-accent/10 text-terminal-accent">
                        {lang.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl border border-terminal-border bg-terminal-bg/30 font-mono text-sm text-muted-foreground"
              >
                <span className="text-terminal-green">$</span> echo $STACK
                <br />
                <span className="text-terminal-accent">TypeScript</span> + <span className="text-terminal-purple">React</span> + <span className="text-terminal-orange">Node.js</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
