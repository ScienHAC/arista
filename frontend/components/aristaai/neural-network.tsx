"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [points, setPoints] = useState<Point[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const requestRef = useRef<number | null>(null)
  const pointCount = 40
  const connectionDistance = 150
  const mouseInfluenceRadius = 200

  // Initialize points
  useEffect(() => {
    if (!containerRef.current) return

    const { width, height } = containerRef.current.getBoundingClientRect()
    setDimensions({ width, height })

    const newPoints: Point[] = []

    for (let i = 0; i < pointCount; i++) {
      newPoints.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      })
    }

    setPoints(newPoints)

    const handleResize = () => {
      if (!containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    if (points.length === 0) return

    const animate = () => {
      setPoints((prevPoints) => {
        // Calculate connections
        const newPoints = [...prevPoints]

        // Clear previous connections
        newPoints.forEach((point) => {
          point.connections = []
        })

        // Find new connections
        for (let i = 0; i < newPoints.length; i++) {
          for (let j = i + 1; j < newPoints.length; j++) {
            const dx = newPoints[i].x - newPoints[j].x
            const dy = newPoints[i].y - newPoints[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              newPoints[i].connections.push(j)
              newPoints[j].connections.push(i)
            }
          }
        }

        // Update positions
        return newPoints.map((point) => {
          // Apply mouse influence
          const dx = mousePosition.x - point.x
          const dy = mousePosition.y - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          let vx = point.vx
          let vy = point.vy

          if (distance < mouseInfluenceRadius) {
            const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius
            vx -= (dx / distance) * force * 0.2
            vy -= (dy / distance) * force * 0.2
          }

          // Update position
          let x = point.x + vx
          let y = point.y + vy

          // Bounce off edges
          if (x < 0 || x > dimensions.width) {
            vx = -vx
            x = x < 0 ? 0 : dimensions.width
          }

          if (y < 0 || y > dimensions.height) {
            vy = -vy
            y = y < 0 ? 0 : dimensions.height
          }

          return {
            ...point,
            x,
            y,
            vx,
            vy,
          }
        })
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [dimensions, mousePosition, points.length])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%">
        {/* Connections */}
        {points.map((point, i) =>
          point.connections.map((j) => {
            const target = points[j]
            if (!target) return null

            const dx = point.x - target.x
            const dy = point.y - target.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const opacity = 1 - distance / connectionDistance

            return (
              <line
                key={`${i}-${j}`}
                x1={point.x}
                y1={point.y}
                x2={target.x}
                y2={target.y}
                stroke="rgba(79, 70, 229, 0.2)"
                strokeWidth="1"
                strokeOpacity={opacity}
              />
            )
          }),
        )}

        {/* Points */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={3}
            fill="rgba(168, 85, 247, 0.7)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.01 }}
          />
        ))}
      </svg>
    </div>
  )
}

