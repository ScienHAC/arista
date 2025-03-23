"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Phone, Luggage, Plane, User, Battery } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "NEVER LOSE YOUR LUGGAGE",
    description: "Never lose your luggage with smart tracking, keeping it safe and easy to find",
  },
  {
    icon: Phone,
    title: "CALL YOUR LUGGAGE",
    description: "Easily locate it with a simple ring, making retrieval quick & hassle-free!",
  },
  {
    icon: Luggage,
    title: "RIDE-ON YOUR LUGGAGE",
    description: "Turn your luggage into a ride for a smooth, fun way to move through the airport with ease!",
  },
  {
    icon: Plane,
    title: "AIRPORT PROMPT",
    description:
      "Get notified when your luggage arrives with the airport prompt feature, ensuring a smooth & timely pickup!",
  },
  {
    icon: User,
    title: "AUTO FOLLOW LUGGAGE",
    description: "Let your luggage follow you automatically, hands-free, for effortless travel",
  },
  {
    icon: Battery,
    title: "POWER CHARGING",
    description: "Featuring seamless device charging through its built-in power port",
  },
]

export default function SmartLuggageFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.section
      ref={containerRef}
      className="w-full py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gold/5"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-gold/10 text-gold border border-gold/20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Smart Features
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-gradient">WHY SMART LUGGAGE?</h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel with our innovative smart luggage features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <feature.icon className="h-7 w-7 text-gold" />
              </motion.div>

              <h3 className="font-semibold text-lg mb-3 text-gold">{feature.title}</h3>

              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

