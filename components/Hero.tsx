"use client"

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Code, Palette } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import CodeEditor from "./CodeEditor"

const roles = [
  { text: "Full Stack Developer", icon: Code },
  { text: "Software Engineer", icon: Sparkles },
  { text: "UI/UX Enthusiast", icon: Palette },
  { text: "Problem Solver", icon: Code },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), {
    stiffness: 100,
    damping: 30,
  })
  
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), {
    stiffness: 100,
    damping: 30,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { href: "https://www.linkedin.com/in/helmut-pastor-3802318a/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/Davidcreador", icon: Github, label: "GitHub" },
    { href: "mailto:davidcreador@gmail.com", icon: Mail, label: "Email" },
  ]

  const CurrentIcon = roles[roleIndex].icon

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 50%),
                        radial-gradient(circle at 40% 20%, var(--neon-blue) 0%, transparent 50%)`,
            filter: 'blur(100px)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? 'var(--primary)' : i === 1 ? 'var(--accent)' : 'var(--neon-cyan)'
              } 0%, transparent 70%)`,
              filter: 'blur(60px)',
              opacity: 0.1,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            initial={{
              x: `${30 * i}%`,
              y: `${20 * i}%`,
            }}
          />
        ))}
      </div>
      
      <div ref={containerRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <span className="block text-foreground">Helmut</span>
              <span className="block gradient-text">Pastor</span>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <CurrentIcon className="w-6 h-6 text-primary" />
                  <span className="text-2xl md:text-3xl text-muted-foreground font-light">
                    {roles[roleIndex].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Crafting exceptional digital experiences with 8+ years of expertise. 
              Passionate about clean code, stunning design, and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 overflow-hidden rounded-full font-medium transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 gradient-bg opacity-100 transition-opacity group-hover:opacity-90" />
                <span className="absolute inset-0 gradient-bg opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
                <span className="relative flex items-center gap-2 text-white">
                  Explore My Work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
              
              <motion.a
                href="/Resume-David-Pastor-2025.pdf"
                download
                className="group px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary transition-all"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 transition-colors group-hover:text-primary" />
                    <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 transition-transform group-hover:scale-100" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Card Stack with IDE */}
              <div className="relative w-full h-[600px]">
                {/* Main IDE Card */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    transform: "translateZ(0px)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <CodeEditor 
                    animated={true}
                    showMinimap={true}
                  />
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  </div>
                </motion.div>
                
                {/* Background cards for depth */}
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-2xl bg-[#1e1e1e] shadow-2xl"
                    style={{
                      transform: `translateZ(${-i * 50}px) translateX(${i * 25}px) translateY(${i * 15}px) scale(${1 - i * 0.05})`,
                      opacity: 0.3 - i * 0.1,
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>

              {/* Floating elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-full gradient-bg opacity-20"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}