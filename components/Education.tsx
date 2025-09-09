"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "Computer Science Studies",
    institution: "Universidad de Costa Rica",
    period: "2011 - 2012",
    description: "Focused on software development, algorithms, and data structures."
  },
  {
    id: 2,
    degree: "Graphic Design Program",
    institution: "Design Institute",
    period: "2010 - 2012",
    description: "Comprehensive program covering visual communication, branding, and digital design."
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}