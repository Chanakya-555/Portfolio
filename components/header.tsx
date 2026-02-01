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
    <header className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <div className="flex items-center gap-3">
            <div className="logo-wrapper">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </div>
          </div>

          <nav className="nav-wrapper">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? "nav-link-active" : "nav-link"}
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
