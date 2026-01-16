"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container relative mx-auto text-center z-10">
        <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-4xl mx-auto backdrop-blur-md">
          <div className="relative w-40 h-40 mx-auto mb-8 animate-float-slow">
            <Image
              src="avatar.jpeg"
              alt="Cheedi Chanakya Sai"
              fill
              className="object-cover rounded-full border-4 border-white/50 shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hello! I&apos;m <span className="text-fluid">Chanakya Sai Cheedi</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            A Software Engineer focused on full-stack web development, AI, and database projects.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg shadow-primary/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary/20 bg-white/5 backdrop-blur-sm text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  )
}
