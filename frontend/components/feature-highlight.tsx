"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureHighlightProps {
  title: string
  description: string
  image: string
  features: string[]
  buttonText: string
  buttonLink: string
  reversed?: boolean
}

export default function FeatureHighlight({
  title,
  description,
  image,
  features,
  buttonText,
  buttonLink,
  reversed = false,
}: FeatureHighlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  // Parallax effect for image
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <motion.section
      ref={containerRef}
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div style={{ y: imageY }}>
                <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover rounded-2xl" />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-xl" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-5 -right-5 bg-gold text-black px-4 py-2 rounded-full font-medium shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                y: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
            >
              Premium Quality
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={reversed ? "lg:pr-10" : "lg:pl-10"}
          >
            <motion.span
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-gold/10 text-gold border border-gold/20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Featured
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold-gradient">{title}</h2>

            <p className="text-muted-foreground mb-8">{description}</p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <p>{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href={buttonLink}>
                <Button className="bg-gold hover:bg-gold/90 text-black group">
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

