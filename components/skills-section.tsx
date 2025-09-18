"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Cloud } from "lucide-react"
import Image from "next/image"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "C", logo: "/tech-icons/c.jpg" },
      { name: "Python", logo: "/tech-icons/python.jpg" },
      { name: "JavaScript", logo: "/tech-icons/javascript.jpg" },
      { name: "Java", logo: "/tech-icons/java.jpg" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML", logo: "/tech-icons/html.jpg" },
      { name: "CSS", logo: "/tech-icons/css.jpg" },
      { name: "React JS", logo: "/tech-icons/react.jpg" },
      { name: "Angular", logo: "/tech-icons/angular.jpg" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", logo: "/tech-icons/nodejs.jpg" },
      { name: "MySQL", logo: "/tech-icons/mysql.jpg" },
      { name: "MongoDB", logo: "/tech-icons/mongodb.jpg" },
      { name: "Express", logo: "/tech-icons/express.jpg" },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS", logo: "/tech-icons/aws.jpg" },
      { name: "Git", logo: "/tech-icons/git.jpg" },
      { name: "Docker", logo: "/tech-icons/docker.jpg" },
      { name: "Firebase", logo: "/tech-icons/firebase.jpg" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mr-4 flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-muted/50 rounded-xl p-4 flex flex-col items-center text-center hover:bg-muted/70 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 mb-3 rounded-lg overflow-hidden bg-background flex items-center justify-center">
                        <Image
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain drop-shadow-sm"
                        />
                      </div>
                      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 gradient-text">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript",
              "Flutter",
              "Spring Boot",
              "REST APIs",
              "GraphQL",
              "Tailwind CSS",
              "Bootstrap",
              "Material-UI",
              "Redux",
              "Next.js",
              "Vue.js",
              "Supabase",
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
