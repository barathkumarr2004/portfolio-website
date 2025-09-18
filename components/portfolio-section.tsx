"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X, Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Diwali Chit Management App",
    description:
      "A comprehensive Flutter application for SivaSakthi Stores to manage customer entries, payment tracking, and chit draw scheduling efficiently. Features real-time updates, secure payment processing, and automated notifications.",
    image: "/flutter-mobile-app-interface-with-payment-tracking.jpg",
    category: "Mobile",
    technologies: [
      { name: "Flutter", icon: "/tech-icons/flutter.jpg" },
      { name: "Express.js", icon: "/tech-icons/express.jpg" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.jpg" },
      { name: "Node.js", icon: "/tech-icons/nodejs.jpg" },
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Quiz Application",
    description:
      "A responsive Angular quiz app featuring single-question display, timer functionality, score tracking, result page, and local storage for progress tracking. Built with modern Angular practices and responsive design.",
    image: "/angular-quiz-application-interface-with-timer.jpg",
    category: "Web",
    technologies: [
      { name: "Angular", icon: "/tech-icons/angular.jpg" },
      { name: "Express.js", icon: "/tech-icons/express.jpg" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.jpg" },
      { name: "TypeScript", icon: "/tech-icons/typescript.jpg" },
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Android Task Monitoring System",
    description:
      "A comprehensive task monitoring system with real-time updates, deadline tracking, and user-friendly interface for efficient task management. Includes team collaboration features and progress analytics.",
    image: "/react-task-management-dashboard-interface.jpg",
    category: "Web",
    technologies: [
      { name: "React", icon: "/tech-icons/react.jpg" },
      { name: "Node.js", icon: "/tech-icons/nodejs.jpg" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.jpg" },
      { name: "Socket.io", icon: "/tech-icons/socketio.jpg" },
    ],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Java Applications Portfolio",
    description:
      "Collection of scalable Java applications developed during internship, showcasing OOP principles and problem-solving skills. Includes enterprise-level solutions with Spring Boot framework.",
    image: "/java-application-console-interface.jpg",
    category: "Backend",
    technologies: [
      { name: "Java", icon: "/tech-icons/java.jpg" },
      { name: "Spring Boot", icon: "/tech-icons/spring.jpg" },
      { name: "MySQL", icon: "/tech-icons/mysql.jpg" },
      { name: "JPA", icon: "/tech-icons/hibernate.jpg" },
    ],
    github: "#",
    live: "#",
    featured: false,
  },
]

const categories = ["All", "Web", "Mobile", "Backend"]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent projects and technical achievements
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                    : "glass-effect border-primary/50 text-primary hover:bg-primary hover:text-white"
                }
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 place-items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm mx-auto"
            >
              <Card
                className="group glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-accent text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors text-center">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed flex-1 text-center">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-3 text-center">Tech Stack</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex flex-col items-center gap-1 p-2 rounded-lg glass-effect border border-primary/20 hover:border-primary/40 transition-colors group/tech"
                        >
                          <div className="w-8 h-8 relative">
                            <Image
                              src={tech.icon || `/placeholder.svg?height=32&width=32&query=${tech.name} logo`}
                              alt={tech.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain group-hover/tech:scale-110 transition-transform duration-200"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground group-hover/tech:text-primary transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 glass-effect border-primary/30 hover:bg-primary hover:text-white bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/20"
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold gradient-text mb-4 text-center">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg text-center">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-center">Technology Stack</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-3 p-3 rounded-xl glass-effect border border-primary/20 hover:border-primary/40 transition-all duration-200 hover:scale-105"
                      >
                        <div className="w-10 h-10 relative">
                          <Image
                            src={tech.icon || `/placeholder.svg?height=40&width=40&query=${tech.name} logo`}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="font-medium text-primary">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="px-8 glass-effect border-primary/30 hover:bg-primary hover:text-white bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
