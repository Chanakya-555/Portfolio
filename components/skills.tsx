"use client"

import { Database, Code2, Brain, Server, Layout, GitBranch } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    items: ["Node.js", "REST APIs", "Express", "Authentication"],
  },
  {
    icon: Database,
    title: "Database Management",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Optimization"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    items: ["AI Integration", "Data Analysis", "Algorithms", "Problem Solving"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    items: ["Responsive Design", "Accessibility", "User Experience", "Prototyping"],
  },
  {
    icon: GitBranch,
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Agile", "CI/CD"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto glass-panel p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-fluid">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A diverse toolkit for building modern, scalable applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
