"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="ml-2">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="md:hidden">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
