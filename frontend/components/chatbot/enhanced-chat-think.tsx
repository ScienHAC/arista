"use client"

import { motion } from "framer-motion"

interface AIThinkingProps {
    isThinking: boolean
}

export function EnhancedAIThinking({ isThinking }: AIThinkingProps) {
    if (!isThinking) return null

    return (
        <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-arista-orange/10 to-arista-gold/10">
            <motion.div
                className="relative w-8 h-8"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-arista-orange to-arista-gold opacity-20" />
                <motion.div
                    className="absolute inset-1 rounded-full bg-gradient-to-r from-arista-orange to-arista-gold"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <div className="flex flex-col">
                <span className="text-sm font-medium">Processing</span>
                <div className="flex space-x-1">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-arista-orange"
                        animate={{
                            y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-arista-gold"
                        animate={{
                            y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                    />
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-arista-orange"
                        animate={{
                            y: ["0%", "-50%", "0%"],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 0.4,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

