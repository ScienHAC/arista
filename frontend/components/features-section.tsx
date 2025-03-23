"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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

export default function FeaturesSection() {
  return (
    <Card className="border-0 shadow-none bg-white dark:bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Why Smart Luggage?</CardTitle>
        <CardDescription className="text-lg">
          Experience the future of travel with our innovative smart luggage features
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
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
      </CardContent>
    </Card>
  )
}

