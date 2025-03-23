"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
}

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const colors = ["#FF7A00", "#FFD700", "#C0C0C0"]

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }
      }

      updateDimensions()
      window.addEventListener("resize", updateDimensions)

      // Generate initial particles
      const initialParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        initialParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setParticles(initialParticles)

      return () => {
        window.removeEventListener("resize", updateDimensions)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-background to-background/80"
    >
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAydi0xaC0xdjFoMXptLTIgMmgtMXYxaDF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30"
          initial={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            x: [particle.x, particle.x + (Math.random() - 0.5) * 100, particle.x],
            y: [particle.y, particle.y + (Math.random() - 0.5) * 100, particle.y],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse follower effect - keeping this as it's working well */}
      <motion.div
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-gradient-to-r from-arista-orange/10 via-arista-gold/5 to-arista-silver/10 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Decorative SVG elements */}
      <svg
        className="absolute left-1/4 top-1/4 h-64 w-64 opacity-5"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF7A00"
          d="M45.3,-51.2C59.4,-41.7,72,-28.5,76.5,-12.7C81,3.2,77.3,21.7,67.1,34.6C56.9,47.5,40.1,54.8,23.4,60.5C6.7,66.2,-9.9,70.3,-25.3,66.5C-40.7,62.7,-54.9,51,-63.5,35.8C-72.1,20.6,-75.1,1.9,-70.3,-14.3C-65.5,-30.5,-52.9,-44.2,-38.8,-53.7C-24.7,-63.2,-9.1,-68.5,3.9,-73.1C16.9,-77.7,31.2,-60.7,45.3,-51.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-1/4 right-1/4 h-64 w-64 opacity-5"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFD700"
          d="M47.7,-57.2C59.5,-45.9,65.8,-29.3,68.2,-12.5C70.6,4.3,69.2,21.3,61.3,35.5C53.5,49.7,39.2,61.1,22.8,67.1C6.4,73.1,-12.1,73.7,-27.4,67.5C-42.7,61.3,-54.8,48.3,-62.4,33.1C-70,17.9,-73.1,0.5,-69.2,-14.4C-65.3,-29.3,-54.4,-41.7,-41.5,-52.8C-28.6,-63.9,-13.8,-73.7,1.9,-76C17.6,-78.3,35.9,-68.5,47.7,-57.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-1/3 left-1/3 h-64 w-64 opacity-5"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#C0C0C0"
          d="M54.2,-46.1C68.8,-33.2,78.2,-11.9,75.9,8.1C73.6,28.1,59.6,46.8,41.9,57.4C24.2,68,2.8,70.5,-17.8,65.5C-38.4,60.5,-58.2,48,-67.3,29.7C-76.4,11.4,-74.8,-12.7,-64.3,-30.8C-53.8,-48.9,-34.4,-61,-14.2,-64.5C6,-68,39.6,-59,54.2,-46.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}

