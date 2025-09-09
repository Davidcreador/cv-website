import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import ExperienceSection from "@/components/Experience"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ThemeToggle />
      <footer className="py-6 text-center text-sm text-muted-foreground bg-secondary/30">
        <p>&copy; {new Date().getFullYear()} Helmut Pastor. All rights reserved.</p>
      </footer>
    </>
  )
}