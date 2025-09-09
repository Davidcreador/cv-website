"use client"

import { motion } from "framer-motion"
import { skillCategories, languages } from "@/data/skills"
import { 
  Code2, 
  Server, 
  Wrench, 
  Palette, 
  Globe,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { useState } from "react"

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend Development": Code2,
  "Backend Development": Server,
  "Tools & Technologies": Wrench,
  "Design & Creative": Palette,
}

interface SkillBarProps {
  name: string
  level: number
  index: number
}

function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <motion.span 
          className="text-xs font-semibold text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
          viewport={{ once: true }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ filter: "blur(8px)" }}
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
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency and creative capabilities
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {skillCategories.map((category, index) => {
              const Icon = categoryIcons[category.title]
              const isActive = selectedCategory === index
              
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setSelectedCategory(index)}
                  className={`
                    relative px-6 py-3 rounded-xl font-medium transition-all
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25' 
                      : 'bg-card hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {category.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl -z-10"
                      initial={false}
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills List */}
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {CategoryIcon && (
                  <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                )}
                <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
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

            {/* Right Side Content */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-6 rounded-xl bg-card border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold gradient-text mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-6 rounded-xl bg-card border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Languages</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                        {lang.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
              >
                <p className="text-sm text-muted-foreground italic">
                  &quot;Continuously learning and adapting to new technologies. 
                  My diverse skill set allows me to tackle complex challenges 
                  and deliver innovative solutions.&quot;
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}