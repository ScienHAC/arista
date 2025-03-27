"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Send, X, Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnhancedAIThinking } from "./enhanced-chat-think"
import { TypingAnimation } from "./typing-animation"

type Message = {
    text: string
    isBot: boolean
    isTyping?: boolean
}

type ProductContext = {
    query?: string
    products?: string
    lastContext?: string
}

export default function AristaChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isThinking, setIsThinking] = useState(false)
    const [productContext, setProductContext] = useState<ProductContext>({})
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isThinking])

    // Neural network background animation
    useEffect(() => {
        if (!isOpen || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const particles: Array<{ x: number; y: number; vx: number; vy: number }> = []
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
            })
        }

        function animate() {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle, i) => {
                particle.x += particle.vx
                particle.y += particle.vy

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                particles.forEach((particle2, j) => {
                    if (i === j) return
                    const dx = particle.x - particle2.x
                    const dy = particle.y - particle2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(255, 165, 0, ${0.2 * (1 - distance / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(particle2.x, particle2.y)
                        ctx.stroke()
                    }
                })

                ctx.beginPath()
                ctx.fillStyle = "rgba(255, 165, 0, 0.5)"
                ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2)
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()
    }, [isOpen])

    const initializeChat = () => {
        const welcomeMessage = "Welcome to Arista AI! I can help you explore our smart products. What would you like to know about?"
        setMessages([
            {
                text: welcomeMessage,
                isBot: true,
                isTyping: true
            }
        ])
    }

    const toggleChat = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            initializeChat()
        }
    }

    const resetConversation = () => {
        setProductContext({})
        initializeChat()
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMessage = input.trim()
        setMessages((prev) => [...prev, { text: userMessage, isBot: false }])
        setInput("")
        setIsThinking(true)

        try {
            const requestPayload = {
                query: userMessage,
                products: productContext.products,
                lastContext: productContext.lastContext
            }

            const response = await fetch("https://aristaai.onrender.com/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestPayload),
            })

            const data = await response.json()
            const botResponse = data.response || "I'm not sure how to respond to that."

            setProductContext((prev) => ({
                ...prev,
                lastContext: data.context || prev.lastContext,
                products: data.products || prev.products
            }))

            setMessages((prev) => [...prev, {
                text: botResponse,
                isBot: true,
                isTyping: true
            }])

            if (data.suggestions?.length > 0) {
                setTimeout(() => {
                    setMessages((prev) => [...prev, {
                        text: "You might also want to know:\n" + data.suggestions.join("\n"),
                        isBot: true,
                        isTyping: true
                    }])
                }, 1000)
            }
        } catch (error) {
            console.error("Chat API error:", error)
            setMessages((prev) => [
                ...prev,
                {
                    text: "Sorry, there was an error processing your request. Please try again.",
                    isBot: true,
                    isTyping: true
                },
            ])
        } finally {
            setIsThinking(false)
        }
    }

    return (
        <>
            <motion.button
                onClick={toggleChat}
                className={`fixed bottom-4 right-4 p-4 bg-gradient-to-r from-arista-orange to-arista-gold text-white rounded-full shadow-lg hover:shadow-xl transition-opacity duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                    } z-20`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-4 right-4 w-full md:w-[400px] h-[600px] chat-container rounded-2xl shadow-2xl flex flex-col overflow-hidden z-40"
                    >
                        <canvas
                            ref={canvasRef}
                            className="absolute inset-0 w-full h-full neural-bg z-[2]"
                        />

                        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-[3]" />

                        <motion.div
                            className="bg-gradient-to-r from-arista-orange to-arista-gold p-4 flex justify-between items-center relative z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-center space-x-2">
                                <Sparkles className="text-white" size={20} />
                                <h3 className="font-semibold text-white">Arista AI Assistant</h3>
                            </div>
                            <div className="flex items-center space-x-2">
                                {productContext.products && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={resetConversation}
                                        className="text-white hover:bg-white/20"
                                    >
                                        <RefreshCw size={16} />
                                    </Button>
                                )}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleChat}
                                    className="text-white hover:bg-white/20"
                                >
                                    <X size={20} />
                                </Button>
                            </div>
                        </motion.div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
                            <AnimatePresence>
                                {messages.map((message, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                                    >
                                        <div
                                            className={`message-bubble max-w-[80%] p-3 rounded-2xl shadow-lg ${message.isBot
                                                ? "bg-background/70 text-foreground backdrop-blur-sm border border-border/50"
                                                : "bg-gradient-to-r from-arista-orange to-arista-gold text-white"
                                                }`}
                                        >
                                            {message.isTyping && message.isBot ? (
                                                <TypingAnimation text={message.text} speed={30} />
                                            ) : (
                                                message.text
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {isThinking && <EnhancedAIThinking isThinking={true} />}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="p-4 border-t border-border/50 bg-background/50 backdrop-blur-md relative z-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me about Arista products..."
                                    className="flex-1 p-3 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-arista-orange/50"
                                />
                                <motion.button
                                    type="submit"
                                    className="p-3 rounded-xl bg-gradient-to-r from-arista-orange to-arista-gold text-white shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}