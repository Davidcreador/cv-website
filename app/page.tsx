import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import ExperienceSection from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm font-mono text-muted-foreground border-t border-terminal-border">
        <div className="container mx-auto px-4">
          <span className="text-terminal-accent">&copy;</span> {new Date().getFullYear()} Helmut Pastor. 
          <span className="text-terminal-green ml-2">~/portfolio</span>
        </div>
      </footer>
    </>
  )
}
