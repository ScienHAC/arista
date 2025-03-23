"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-arista-orange/20 via-arista-gold/20 to-arista-silver/20 p-8 md:p-12">
          <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />

          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-arista-orange/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-arista-gold/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <motion.h2
                className="mb-4 text-3xl font-bold md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Experience the Future of Travel?
              </motion.h2>
              <motion.p
                className="mb-6 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Start planning your next adventure with Arista AI and discover our premium collection of smart travel
                products.
              </motion.p>
              <motion.div
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  className="bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90"
                  asChild
                >
                  <Link href="/ai/travel">Plan Your Trip</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/ai/products">Explore Products</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto h-64 w-64 md:h-80 md:w-80"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-arista-orange/10 via-arista-gold/5 to-arista-silver/10 blur-xl" />
              <motion.img
                src="/placeholder.svg?height=400&width=400"
                alt="Smart Travel Products"
                className="relative h-full w-full object-contain"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

