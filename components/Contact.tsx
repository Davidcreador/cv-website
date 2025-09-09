"use client"

import { motion } from "framer-motion"
import { 
  Mail, 
  Linkedin, 
  Github, 
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Globe
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "davidcreador@gmail.com",
    href: "mailto:davidcreador@gmail.com",
    color: "from-blue-500 to-cyan-500",
    available: true,
    responseTime: "24 hours"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Helmut Pastor",
    href: "https://www.linkedin.com/in/helmut-pastor-3802318a/",
    color: "from-blue-600 to-blue-500",
    available: true,
    responseTime: "2-3 days"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Davidcreador",
    href: "https://github.com/Davidcreador",
    color: "from-gray-700 to-gray-600",
    available: true,
    responseTime: "1 week"
  },
]

export default function Contact() {

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
          >
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about technology? 
            I&apos;m always open to discussing new opportunities and interesting ideas.
          </p>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
              {/* Direct Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
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
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="relative h-full p-8 rounded-2xl bg-card border border-gray-200 dark:border-gray-800 overflow-hidden transition-all hover:shadow-xl">
                        {/* Background gradient on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                        />
                        
                        <div className="relative flex flex-col items-center text-center space-y-4">
                          <div className={`p-4 rounded-full bg-gradient-to-r ${method.color} shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-xl mb-1">{method.label}</p>
                            <p className="text-sm text-muted-foreground mb-3">{method.value}</p>
                            {method.available && (
                              <div className="flex items-center justify-center gap-1 text-xs text-green-600 dark:text-green-400">
                                <Clock className="w-3 h-3" />
                                <span>Responds within {method.responseTime}</span>
                              </div>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* Additional Info Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Location & Timezone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
                >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Location & Availability</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Based in <span className="font-medium text-foreground">Costa Rica</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Available for remote opportunities worldwide
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    Current time: <span className="font-medium text-foreground">
                      {new Date().toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        timeZoneName: 'short'
                      })}
                    </span>
                  </span>
                </div>
                </motion.div>

                {/* Quick Response */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-card border border-gray-200 dark:border-gray-800"
                >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Quick Response</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours during weekdays. 
                  Looking forward to hearing from you!
                </p>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}