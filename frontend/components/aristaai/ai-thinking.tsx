"use client"

import { motion } from "framer-motion"

interface AIThinkingProps {
  text?: string
}

export default function AIThinking({ text = "AI is thinking" }: AIThinkingProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative h-8 w-8">
        <motion.div
          className="absolute inset-0 rounded-full bg-arista-orange/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute inset-1 rounded-full bg-gradient-to-r from-arista-orange to-arista-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full bg-background"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
      <div className="font-medium">
        {text}{" "}
        <span className="inline-flex space-x-1">
          <motion.span
            className="ai-thinking-dot animate-thinking"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.span
            className="ai-thinking-dot animate-thinking"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
          />
          <motion.span
            className="ai-thinking-dot animate-thinking"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
          />
        </span>
      </div>
    </div>
  )
}

