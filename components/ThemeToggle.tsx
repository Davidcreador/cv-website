"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-6 right-6 p-3 rounded-full",
        "bg-secondary hover:bg-secondary/80",
        "text-secondary-foreground",
        "shadow-lg transition-all duration-300",
        "hover:scale-110 z-50"
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}