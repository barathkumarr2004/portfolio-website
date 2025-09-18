"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 lg:py-20">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              Hi I am{" "}
              <span className="gradient-text relative block sm:inline">
                Barath Kumar
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-primary"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C20 2 40 2 60 6C80 10 100 2 120 6C140 10 160 2 180 6C190 8 195 9 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-pretty leading-relaxed px-4 sm:px-0">
              Full Stack Developer specializing in React, Angular, Java, and MongoDB. Creating scalable web solutions
              with modern technologies.
            </p>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex flex-col items-center animate-fade-in-up order-1 lg:order-2">
            <div className="relative mb-6 sm:mb-8">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Barath Kumar R"
                  fill
                  className="object-cover object-center rounded-3xl shadow-2xl border-4 border-white/20"
                  priority
                />
                {/* Gradient overlay for better image quality */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none px-4 sm:px-0">
              <a
                href="https://github.com/barathkumarrgk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 hover:text-black"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://leetcode.com/barathkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 hover:text-black"
              >
                <Code className="w-5 h-5" />
                <span className="font-medium">LeetCode</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://linkedin.com/in/barathkumar-r"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-800 hover:text-black"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
