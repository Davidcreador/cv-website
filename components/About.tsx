"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expertise in both frontend and backend technologies"
  },
  {
    icon: Palette,
    title: "Design Background",
    description: "Unique blend of technical and creative skills"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Great sense of teamwork and collaboration"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Enthusiasm for overcoming new challenges"
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full-Stack Software Engineer & Technical Lead
            </h3>
            <p className="text-muted-foreground mb-4">
              As a skilled Full-Stack Software Engineer with 11+ years of experience and a Bachelor&apos;s degree 
              in Graphic Design, I bring a unique blend of technical expertise and creative vision to software development. 
              My strong focus on Node.js development combined with extensive experience in modern web technologies 
              enables me to deliver efficient, scalable, and high-performance solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              I&apos;ve contributed to major platforms including NFL.com, Shell&apos;s Renewable Energy Services, 
              and enterprise solutions for BMW USA and Allergan Aesthetics. My experience spans from leading technical 
              teams at Critical Mass to architecting microservices at Shell, always focusing on delivering value 
              through clean, maintainable code and innovative solutions.
            </p>
            <p className="text-muted-foreground">
              Proficient in English and native Spanish speaker, I excel in diverse, international teams. 
              My expertise includes TypeScript, React, Node.js, cloud technologies (AWS, GCP), and various 
              database systems. I&apos;m passionate about mentoring junior developers and implementing best practices 
              in software architecture, DevOps, and Agile methodologies.
            </p>
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
                className="p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-primary/10 rounded-lg"
        >
          <blockquote className="text-center italic">
            &ldquo;Helmut is a smart software engineer with a great sense of teamwork, 
            he always demonstrated enthusiasm for overcoming new challenges&rdquo;
            <footer className="mt-2 text-sm text-muted-foreground">
              - Professional Recommendation
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}