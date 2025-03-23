"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import HeroChatbox from "./hero-chatbox"
import { NeuralNetwork } from "./neural-network"

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.5])
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.3])
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.1])
  const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0])

  return (
    <div ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div className="parallax-layer absolute inset-0 z-0" style={{ y: y1, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <NeuralNetwork />
      </motion.div>

      <motion.div
        className="parallax-layer absolute inset-0 z-10 flex items-center justify-center"
        style={{ y: y2, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80" />
        <div className="container px-4 text-center">
          <motion.h1
            className="text-gradient mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Arista AI
          </motion.h1>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your intelligent travel companion powered by AI. Plan your journey and travel with premium smart products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroChatbox />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="parallax-layer absolute bottom-10 left-0 right-0 z-20 flex justify-center"
        style={{ y: y3, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-foreground/70" />
        </motion.div>
      </motion.div>
    </div>
  )
}

