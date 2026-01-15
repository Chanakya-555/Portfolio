"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="avatar.jpeg"
            alt="Cheedi Chanakya Sai"
            fill
            className="object-cover rounded-full border-4 border-primary shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Hello! I&apos;m <span className="text-primary">Chanakya Sai Cheedi</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          A Software Engineer focused on full-stack web development, AI, and database projects.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  )
}
