"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "B.TECH - Information Technology",
    institution: "Kongu Engineering College",
    year: "2025",
    grade: "6.69 CGPA",
    status: "Current",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "DIPLOMA - Computer Science Engineering",
    institution: "Dhanalakshmi Srinivasan Polytechnic College",
    year: "2023",
    grade: "93%",
    status: "Completed",
    icon: Award,
    color: "from-cyan-500 to-blue-500",
  },
  {
    degree: "SSLC",
    institution: "Govt Boys Hr. Sec. School",
    year: "2020",
    grade: "72%",
    status: "Completed",
    icon: Calendar,
    color: "from-emerald-500 to-teal-500",
  },
]

const certifications = [
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    year: "2024",
    verified: true,
  },
  {
    name: "NPTEL Certification",
    issuer: "IIT/IISc",
    year: "2024",
    verified: true,
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My academic journey and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Academic Background</h3>

          <div className="space-y-8 sm:space-y-0 sm:relative">
            {/* Desktop timeline line - hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>

            {educationData.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative sm:flex sm:items-center sm:mb-12 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <div className="glass-effect rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-border/50">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${edu.color} mb-3 sm:mb-4`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-balance">{edu.degree}</h4>
                      <p className="text-accent font-medium mb-1 text-sm sm:text-base text-pretty">{edu.institution}</p>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-2">
                        <span>{edu.year}</span>
                        <span className="font-semibold text-primary">{edu.grade}</span>
                      </div>
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "Current" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  {/* Timeline dot - only visible on desktop */}
                  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background animate-pulse-glow"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Certifications</h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-base sm:text-lg font-semibold text-balance flex-1 mr-2">{cert.name}</h4>
                  {cert.verified && (
                    <div className="flex items-center text-accent text-xs sm:text-sm flex-shrink-0">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden sm:inline">Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mb-2 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-xs sm:text-sm text-primary font-medium">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
