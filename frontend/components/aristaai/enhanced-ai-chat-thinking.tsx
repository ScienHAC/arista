"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface AIThinkingProps {
    isThinking: boolean
}

export function EnhancedAIChatThinking({ isThinking }: AIThinkingProps) {
    const [dots, setDots] = useState(".")
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
        if (!isThinking) return

        const interval = setInterval(() => {
            setDots((prev) => {
                if (prev.length >= 3) return "."
                return prev + "."
            })
        }, 500)

        return () => clearInterval(interval)
    }, [isThinking])

    // Neural network visualization
    useEffect(() => {
        if (!isThinking || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas dimensions
        const updateCanvasSize = () => {
            if (!canvas.parentElement) return
            const { width, height } = canvas.parentElement.getBoundingClientRect()
            canvas.width = width
            canvas.height = height
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        // Neural network parameters
        const nodeCount = 50
        const nodes: { x: number; y: number; connections: number[] }[] = []

        // Initialize nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                connections: [],
            })
        }

        // Create connections
        for (let i = 0; i < nodes.length; i++) {
            const connectionCount = Math.floor(Math.random() * 3) + 1
            const potentialConnections = [...Array(nodes.length).keys()].filter((j) => j !== i)

            for (let c = 0; c < connectionCount; c++) {
                if (potentialConnections.length === 0) break

                const randomIndex = Math.floor(Math.random() * potentialConnections.length)
                const connectionIndex = potentialConnections[randomIndex]

                nodes[i].connections.push(connectionIndex)
                potentialConnections.splice(randomIndex, 1)
            }
        }

        // Animation variables
        let time = 0
        const speed = 0.001

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i]

                for (const connectionIndex of node.connections) {
                    const connectedNode = nodes[connectionIndex]

                    // Calculate pulse position
                    const dx = connectedNode.x - node.x
                    const dy = connectedNode.y - node.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    // Draw line
                    ctx.beginPath()
                    ctx.moveTo(node.x, node.y)
                    ctx.lineTo(connectedNode.x, connectedNode.y)
                    ctx.strokeStyle = "rgba(255, 135, 0, 0.2)"  // Arista orange with opacity
                    ctx.lineWidth = 1
                    ctx.stroke()

                    // Draw pulse
                    const pulsePosition = (time % 1) * distance
                    const pulseX = node.x + (dx / distance) * pulsePosition
                    const pulseY = node.y + (dy / distance) * pulsePosition

                    ctx.beginPath()
                    ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
                    ctx.fillStyle = "rgba(255, 215, 0, 0.8)"  // Arista gold with opacity
                    ctx.fill()
                }
            }

            // Draw nodes
            for (const node of nodes) {
                ctx.beginPath()
                ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(255, 135, 0, 0.5)"  // Arista orange with opacity
                ctx.fill()
            }

            time += speed
            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
            window.removeEventListener("resize", updateCanvasSize)
        }
    }, [isThinking])

    if (!isThinking) return null

    return (
        <div className="glassmorphism rounded-xl p-6 max-w-md mx-auto">
            <div className="relative">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                <div className="flex items-center space-x-4 relative z-10">
                    <div className="relative w-10 h-10">
                        <motion.div
                            className="absolute inset-0 rounded-full bg-arista-orange/30"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full bg-arista-orange/20"
                            animate={{
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.3,
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full bg-arista-gold/30"
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.6,
                            }}
                        />
                    </div>
                    <div>
                        <p className="text-lg font-medium">Arista AI is thinking{dots}</p>
                        <p className="text-sm text-foreground/70">Processing your query</p>
                    </div>
                </div>

                <div className="mt-6 relative z-10">
                    <div className="space-y-2">
                        <div className="h-2 bg-background/50 rounded-full w-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-arista-orange to-arista-gold"
                                animate={{ width: ["0%", "100%", "0%"] }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                        <div className="h-2 bg-background/50 rounded-full w-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-arista-orange to-arista-gold"
                                animate={{ width: ["0%", "80%", "0%"] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                }}
                            />
                        </div>
                        <div className="h-2 bg-background/50 rounded-full w-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-arista-orange to-arista-gold"
                                animate={{ width: ["0%", "60%", "0%"] }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.4,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 relative z-10">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="h-16 rounded-md bg-background/30 flex items-center justify-center"
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [0.95, 1, 0.95],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        >
                            <div className="w-8 h-8 rounded-full bg-arista-orange/30 animate-pulse" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}