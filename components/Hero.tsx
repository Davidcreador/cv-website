"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"

const terminalContent = `const developer = {
  name: "Helmut Pastor",
  role: "Full Stack Engineer",
  location: "Costa Rica",
  experience: "8+ years",
  passion: "building beautiful things"
};`

export default function Hero() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/helmut-pastor-3802318a/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Davidcreador", icon: Github, label: "GitHub" },
    { href: "mailto:davidcreador@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                Available for opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Helmut</span>
              <span className="block gradient-text">Pastor</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-balance">
              Full Stack Developer with 8+ years crafting exceptional digital experiences. 
              I bridge the gap between technical excellence and creative design.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-terminal-accent text-background font-semibold hover:bg-terminal-accent/90 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="/Resume-David-Pastor-2025.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-terminal-border text-foreground hover:border-terminal-accent hover:text-terminal-accent transition-all font-mono text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-terminal-border hover:border-terminal-accent hover:text-terminal-accent transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="terminal-window max-w-lg mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="ml-3 text-sm text-muted-foreground font-mono">developer.ts</span>
              </div>
              <div className="terminal-body overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="terminal-prompt">$ </span>
                  <TypewriterText text={terminalContent} />
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground font-mono"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal-green" />
                TypeScript
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal-purple" />
                React
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal-accent" />
                Node.js
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  return (
    <motion.code
      className="font-mono text-sm inline"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03 } }
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className={char === '{' || char === '}' ? 'text-terminal-purple' : 
                     char === ':' ? 'text-terminal-accent' :
                     char === '"' ? 'text-terminal-orange' : 'text-foreground'}
        >
          {char}
        </motion.span>
      ))}
      <Cursor />
    </motion.code>
  )
}

function Cursor() {
  return (
    <motion.span
      className="inline-block w-2 h-4 bg-terminal-accent ml-0.5 align-middle"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0 }}
      style={{ flexShrink: 0 }}
    />
  )
}
