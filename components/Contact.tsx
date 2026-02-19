"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "davidcreador@gmail.com",
    href: "mailto:davidcreador@gmail.com",
    color: "terminal-accent",
    available: true
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Helmut Pastor",
    href: "https://www.linkedin.com/in/helmut-pastor-3802318a/",
    color: "terminal-purple",
    available: true
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Davidcreador",
    href: "https://github.com/Davidcreador",
    color: "terminal-green",
    available: true
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-terminal-accent text-sm mb-4 block">
            {'// get in touch'}
          </span>
          <h2 className="section-title text-foreground mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to chat about technology? 
            I&apos;m always open to discussing new opportunities.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-terminal-green/10 border border-terminal-green/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green"></span>
            </span>
            <span className="text-sm font-mono text-terminal-green">
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="relative h-full p-5 rounded-xl border border-terminal-border bg-terminal-bg/50 hover-glow transition-all">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={`p-3 rounded-lg bg-${method.color}/10`}>
                        <Icon className={`w-6 h-6 text-${method.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1">{method.label}</p>
                        <p className="text-xs text-muted-foreground font-mono">{method.value}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-terminal-border bg-terminal-bg/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-4 h-4 text-terminal-accent" />
                <h4 className="font-semibold text-sm">Location</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Based in <span className="text-foreground font-medium">Costa Rica</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Available for remote worldwide
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-terminal-border bg-terminal-bg/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-4 h-4 text-terminal-purple" />
                <h4 className="font-semibold text-sm">Response Time</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Typically within 24 hours
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">
                Mon-Fri
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
