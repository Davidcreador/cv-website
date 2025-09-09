"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Home, User, Briefcase, Code, GraduationCap, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#home")
              }}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold gradient-text">HP</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                const Icon = item.icon
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                      "hover:text-primary flex items-center gap-2",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} className={cn(
                      "transition-transform",
                      hoveredItem === item.name && "rotate-12"
                    )} />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-sm glass z-50 md:hidden"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1)
                    const Icon = item.icon
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                          "hover:bg-primary/10 hover:translate-x-1",
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground"
                        )}
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-1 h-4 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        )}
                      </motion.a>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}