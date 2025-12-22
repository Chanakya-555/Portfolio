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
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12">
          Let&apos;s connect and build something amazing together
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group h-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="font-semibold">{link.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {link.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleSayHello} size="lg" className="gap-2">
            <Send className="w-4 h-4" />
            Message Me for More Details
          </Button>
        </div>
      </div>
    </section>
  )
}
