"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Frontend & backend expertise"
  },
  {
    icon: Palette,
    title: "Design Background",
    description: "Technical + creative blend"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaboration focused"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Challenge enthusiast"
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-terminal-accent text-sm mb-4 block">
            {'// about me'}
          </span>
          <h2 className="section-title text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Full-Stack Software Engineer & Technical Lead
            </h3>
            <div className="space-y-4 text-muted-foreground font-mono text-sm">
              <p>
                11+ years experience with a Bachelor&apos;s in Graphic Design. 
                I bring technical expertise and creative vision to software development.
              </p>
              <p>
                Contributed to major platforms: NFL.com, Shell Renewable Energy, 
                BMW USA, Allergan Aesthetics. Led teams at Critical Mass, architected 
                microservices at Shell.
              </p>
              <p>
                Proficient in TypeScript, React, Node.js, AWS, GCP. Native Spanish 
                speaker, fluent in English. Passionate about mentoring and best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl border border-terminal-border bg-terminal-bg/50 hover-glow"
              >
                <item.icon className="w-6 h-6 text-terminal-accent mb-3" />
                <h4 className="font-semibold text-sm mb-1 text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl border border-terminal-border bg-terminal-bg/30"
        >
          <blockquote className="text-center font-mono text-sm">
            <span className="text-terminal-purple">&ldquo;</span>
            Helmut is a smart software engineer with a great sense of teamwork, 
            he always demonstrated enthusiasm for overcoming new challenges
            <span className="text-terminal-purple">&rdquo;</span>
            <footer className="mt-3 text-xs text-muted-foreground">
              — Professional Recommendation
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
