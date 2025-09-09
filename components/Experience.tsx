"use client"

import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  MapPin, 
  Briefcase,
  Users,
  Code2,
  Award,
  ChevronRight,
  Building2,
  Clock
} from "lucide-react"
import { experiences, careerStats, type Experience } from "@/data/experience"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { CompanyLogos } from "./CompanyLogos"

// Career Stats Card Component
interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>
  value: string | number
  label: string
  delay: number
}

function StatCard({ icon: Icon, value, label, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="p-6 rounded-xl bg-card border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="text-3xl font-bold gradient-text"
            >
              {value}
            </motion.div>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.02 }}
        />
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience>(experiences[0])
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Calculate timeline position for each experience
  const getTimelinePosition = (startYear: number) => {
    const minYear = 2016
    const maxYear = 2025
    const range = maxYear - minYear
    return ((startYear - minYear) / range) * 100
  }

  const stats = [
    { icon: Clock, value: `${careerStats.totalYears}+`, label: "Years Experience", delay: 0 },
    { icon: Building2, value: careerStats.companiesWorked, label: "Companies", delay: 0.1 },
    { icon: Code2, value: `${careerStats.technologiesUsed}+`, label: "Technologies", delay: 0.2 },
    { icon: Award, value: careerStats.projectsDelivered, label: "Projects Delivered", delay: 0.3 },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-4"
          >
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A progressive journey through technology, leadership, and innovation
          </p>
        </motion.div>

        {/* Career Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Company Logos Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by leading companies</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
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
                <div className="relative">
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center transition-all",
                    "bg-white dark:bg-gray-800 group-hover:shadow-lg group-hover:scale-110 border border-gray-200 dark:border-gray-700",
                    selectedExp.id === exp.id && "ring-2 ring-primary ring-offset-2"
                  )}>
                    {exp.icon && CompanyLogos[exp.icon as keyof typeof CompanyLogos] ? (
                      <div className="w-10 h-10">
                        {CompanyLogos[exp.icon as keyof typeof CompanyLogos]}
                      </div>
                    ) : (
                      <span className={cn(
                        "font-bold text-2xl bg-gradient-to-r bg-clip-text text-transparent",
                        exp.companyBg
                      )}>
                        {exp.logo}
                      </span>
                    )}
                  </div>
                  <motion.span 
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {exp.logoFull || exp.company}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Years */}
            <div className="flex justify-between mb-4 text-sm text-muted-foreground">
              <span>2016</span>
              <span>2018</span>
              <span>2020</span>
              <span>2022</span>
              <span>2025</span>
            </div>
            
            {/* Timeline Bar */}
            <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              
              {/* Experience Markers */}
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="absolute top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${getTimelinePosition(exp.startYear)}%` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + exp.id * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedExp(exp)}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 border-white",
                      selectedExp.id === exp.id ? "bg-primary" : "bg-gray-400"
                    )}
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      scale: hoveredId === exp.id ? 1.3 : 1,
                    }}
                  />
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      >
                        <div className="px-3 py-2 bg-gray-900 text-white text-xs rounded-lg">
                          <p className="font-semibold">{exp.company}</p>
                          <p className="text-gray-300">{exp.period}</p>
                        </div>
                        <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-card border border-gray-200 dark:border-gray-800 shadow-xl">
              {/* Company Color Header */}
              <div className={cn(
                "h-2 bg-gradient-to-r",
                selectedExp.companyBg
              )} />
              
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-[200px,1fr] gap-8">
                  {/* Left: Company Info */}
                  <div className="space-y-6">
                    {/* Company Logo */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="relative"
                    >
                      <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        {selectedExp.icon && CompanyLogos[selectedExp.icon as keyof typeof CompanyLogos] ? (
                          <div className="w-16 h-16">
                            {CompanyLogos[selectedExp.icon as keyof typeof CompanyLogos]}
                          </div>
                        ) : (
                          <span className={cn(
                            "font-bold text-4xl bg-gradient-to-r bg-clip-text text-transparent",
                            selectedExp.companyBg
                          )}>
                            {selectedExp.logo}
                          </span>
                        )}
                      </div>
                      {/* Company name below logo */}
                      <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                        <span className="px-2 py-0.5 bg-background text-xs font-medium text-muted-foreground rounded-full border border-gray-200 dark:border-gray-800">
                          {selectedExp.logoFull || selectedExp.company}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Company Details */}
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{selectedExp.company}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{selectedExp.role}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedExp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{selectedExp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{selectedExp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Impact</h4>
                      {Object.entries(selectedExp.impact).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground capitalize">{key}</span>
                          <span className="font-bold text-primary">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Details */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {selectedExp.description}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {selectedExp.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExp.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Experience Navigator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mt-8"
        >
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                selectedExp.id === exp.id
                  ? "w-8 bg-primary"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              )}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}