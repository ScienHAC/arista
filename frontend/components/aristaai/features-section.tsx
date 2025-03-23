"use client"

import { motion } from "framer-motion"
import { Compass, ShieldCheck, Briefcase, Map, Sparkles, Smartphone } from "lucide-react"

const features = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Smart Travel Planning",
    description: "AI-powered itinerary creation based on your preferences and travel style.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure Products",
    description: "Premium smart wallets and luggage with advanced security features.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Luxury Accessories",
    description: "High-quality travel accessories designed for the modern traveler.",
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: "Personalized Recommendations",
    description: "Get tailored suggestions for destinations, accommodations, and activities.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to optimize your travel experience.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Smart Tracking",
    description: "Keep track of your belongings with integrated GPS and Bluetooth technology.",
  },
]

export default function FeaturesSection() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Intelligent Features for Modern Travelers
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover how Arista AI combines cutting-edge technology with luxury travel products to enhance your journey.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-arista-orange/20 to-arista-gold/20 text-arista-orange">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

