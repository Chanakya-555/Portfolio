"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Global Fluid Background - Dark Mode Only */}
      <div className="blob-container">
        <div className="blob-primary" />
        <div className="blob-purple" />
        <div className="blob-pink" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
