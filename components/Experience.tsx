"use client"

import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  MapPin,
  Briefcase,
  Award,
  ChevronRight,
  Building2,
  Clock
} from "lucide-react"
import { experiences, careerStats, type Experience } from "@/data/experience"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { CompanyLogos } from "./CompanyLogos"

function StatCard({ icon: Icon, value, label, delay }: { icon: React.ComponentType<{ className?: string }>, value: string | number, label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-4 rounded-xl border border-terminal-border bg-terminal-bg/50"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-terminal-accent/10">
          <Icon className="w-5 h-5 text-terminal-accent" />
        </div>
        <div>
          <div className="text-2xl font-bold gradient-text">{value}</div>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience>(experiences[0])
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const getTimelinePosition = (startYear: number) => {
    const minYear = 2016
    const maxYear = 2025
    const range = maxYear - minYear
    return ((startYear - minYear) / range) * 100
  }

  const stats = [
    { icon: Clock, value: `${careerStats.totalYears}+`, label: "Years", delay: 0 },
    { icon: Building2, value: careerStats.companiesWorked, label: "Companies", delay: 0.1 },
    { icon: Briefcase, value: `${careerStats.technologiesUsed}+`, label: "Techs", delay: 0.2 },
    { icon: Award, value: careerStats.projectsDelivered, label: "Projects", delay: 0.3 },
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-terminal-accent text-sm mb-4 block">
            {'// career journey'}
          </span>
          <h2 className="section-title text-foreground mb-4">
            Experience
          </h2>
          <p className="section-subtitle mx-auto">
            A progressive journey through technology, leadership, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center items-center gap-4 flex-wrap"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedExp(exp)}
              className="cursor-pointer group"
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center transition-all border",
                "bg-terminal-bg border-terminal-border group-hover:border-terminal-accent",
                selectedExp.id === exp.id && "border-terminal-accent"
              )}>
                {exp.icon && CompanyLogos[exp.icon as keyof typeof CompanyLogos] ? (
                  <div className="w-8 h-8">
                    {CompanyLogos[exp.icon as keyof typeof CompanyLogos]}
                  </div>
                ) : (
                  <span className={cn(
                    "font-bold text-lg bg-gradient-to-r bg-clip-text text-transparent",
                    exp.companyBg
                  )}>
                    {exp.logo}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative h-1 bg-terminal-border rounded-full mb-8">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-terminal-accent to-terminal-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="terminal-window max-w-4xl mx-auto"
          >
            <div className={cn(
              "h-1 bg-gradient-to-r",
              selectedExp.companyBg
            )} />
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-[180px,1fr] gap-6">
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center bg-terminal-bg border border-terminal-border">
                    {selectedExp.icon && CompanyLogos[selectedExp.icon as keyof typeof CompanyLogos] ? (
                      <div className="w-12 h-12">
                        {CompanyLogos[selectedExp.icon as keyof typeof CompanyLogos]}
                      </div>
                    ) : (
                      <span className={cn(
                        "font-bold text-2xl bg-gradient-to-r bg-clip-text text-transparent",
                        selectedExp.companyBg
                      )}>
                        {selectedExp.logo}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold">{selectedExp.company}</h3>
                    <p className="text-terminal-accent text-sm">{selectedExp.role}</p>
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{selectedExp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{selectedExp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{selectedExp.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {selectedExp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-terminal-purple" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedExp.achievements.slice(0, 3).map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-terminal-accent mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.slice(0, 6).map((tech, index) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded border border-terminal-border bg-terminal-bg/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                selectedExp.id === exp.id
                  ? "w-8 bg-terminal-accent"
                  : "bg-terminal-border hover:bg-terminal-accent/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
