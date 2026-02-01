"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-avatar-wrapper">
            <Image
              src="/avatar.jpeg"
              alt="Cheedi Chanakya Sai"
              fill
              className="hero-avatar"
            />
          </div>

          <h1 className="hero-title">
            Hello! I&apos;m <span className="text-fluid">Chanakya Sai Cheedi</span>
          </h1>

          <p className="hero-subtitle">
            A Software Engineer focused on full-stack web development, AI, and database projects.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn-primary">
              View My Work
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <ArrowDown className="hero-scroll-icon" />
        </div>
      </div>
    </section>
  )
}
