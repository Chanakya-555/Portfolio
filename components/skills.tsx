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
    <section id="skills" className="section-wrapper">
      <div className="section-container-wide">
        <h2 className="section-title-sm">
          My <span className="text-fluid">Skills</span>
        </h2>
        <p className="section-subtitle">
          A diverse toolkit for building modern, scalable applications
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="skill-card-content">
                <div className="skill-card-inner">
                  <div className="skill-icon-wrapper">
                    <skill.icon className="skill-icon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="skill-title">{skill.title}</h3>
                    <div className="skill-tags">
                      {skill.items.map((item, i) => (
                        <span key={i} className="skill-tag">
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
