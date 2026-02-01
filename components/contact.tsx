"use client"

import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "cs.cheedi@gmail.com",
    href: "mailto:cs.cheedi@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Chanakya-555",
    href: "https://github.com/Chanakya-555",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Cheedi Chanakya Sai",
    href: "https://www.linkedin.com/in/cheedi-chanakya-sai-b54807259/",
  },
]

export function Contact() {
  const handleSayHello = () => {
    const phoneNumber = "916303337661" // +91 63033 37661
    const message = encodeURIComponent(
      "Hello Chanakya! 👋 I visited your Smartfolio and would like to connect with you."
    )

    // Open default SMS app
    window.location.href = `sms:${phoneNumber}?body=${message}`
  }

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-container">
        <h2 className="section-title-sm">
          Get In <span className="text-fluid">Touch</span>
        </h2>

        <p className="section-subtitle">
          Let&apos;s connect and build something amazing together
        </p>

        <div className="contact-grid">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="contact-card">
                <CardContent className="contact-card-content">
                  <div className="contact-icon-wrapper">
                    <link.icon className="contact-icon" />
                  </div>

                  <div>
                    <p className="contact-label">{link.label}</p>
                    <p className="contact-value">
                      {link.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="contact-cta">
          <Button onClick={handleSayHello} size="lg" className="gap-2">
            <Send className="w-4 h-4" />
            Message Me for More Details
          </Button>
        </div>
      </div>
    </section>
  )
}
