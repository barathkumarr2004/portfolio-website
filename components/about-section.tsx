"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, GraduationCap, Award, Target, Code, Heart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const interests = [
  { name: "Full Stack Development", icon: Code },
  { name: "Database Management", icon: GraduationCap },
  { name: "Creative Design", icon: Heart },
  { name: "Problem Solving", icon: Target },
]

const achievements = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "B.Tech IT (6.69 CGPA)",
    description: "Kongu Engineering College, 2025",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "MongoDB Associate Developer",
    description: "Certified in database management",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Paper Presentation",
    description: "Edge Computing at KEC",
    color: "from-emerald-500 to-teal-500",
  },
]

export default function AboutSection() {
  const downloadCV = () => {
    // Create a simple CV download link
    const link = document.createElement("a")
    link.href = "#"
    link.download = "Barath_Kumar_R_CV.pdf"
    link.click()
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative solutions and constantly learning new technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Barath Kumar R"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse blur-xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-float blur-lg" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold gradient-text">Full Stack Developer & Tech Enthusiast</h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              I'm a B.Tech IT student at Kongu Engineering College with a passion for full-stack development. My journey
              in technology has led me to work with modern frameworks like{" "}
              <span className="text-primary font-semibold">React</span> and{" "}
              <span className="text-accent font-semibold">Angular</span>, backend technologies including{" "}
              <span className="text-secondary font-semibold">Java</span> and{" "}
              <span className="text-primary font-semibold">Python</span>, and databases like{" "}
              <span className="text-accent font-semibold">MongoDB</span> and SQL.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              I've completed internships, developed real-world applications, and earned certifications that demonstrate
              my commitment to continuous learning. My goal is to create efficient solutions that enhance productivity
              and drive innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 my-8">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 glass-effect rounded-lg p-3"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{interest.name}</span>
                  </motion.div>
                )
              })}
            </div>

            <Button
              onClick={downloadCV}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Achievements & Highlights</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{achievement.icon}</div>
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-2 text-lg">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
