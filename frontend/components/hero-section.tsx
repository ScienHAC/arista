"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Smart Luggage for the Modern Traveler",
    description: "Experience the future of travel with GPS tracking, anti-theft technology, and built-in power banks",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1920&auto=format&fit=crop",
    cta: "Explore features",
    ctaSecondary: "Watch video",
    link: "/products/luggage",
  },
  {
    id: 2,
    title: "Secure Wallets with Anti-Theft Technology",
    description: "Keep your valuables safe with our innovative smart wallets featuring RFID protection",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1920&auto=format&fit=crop",
    cta: "Explore features",
    ctaSecondary: "Watch video",
    link: "/products/wallets",
  },
  {
    id: 3,
    title: "Travel Accessories for the Digital Age",
    description: "Enhance your journey with our range of smart accessories designed for the modern traveler",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1920&auto=format&fit=crop",
    cta: "Explore features",
    ctaSecondary: "Watch video",
    link: "/products/accessories",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold/20 text-gold border border-gold/30">
                  FEATURED
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {slides[currentSlide].title}
              </h1>

              <p className="text-lg text-white/90 mb-8">{slides[currentSlide].description}</p>

              <div className="flex flex-wrap gap-4">
                <Link href={slides[currentSlide].link}>
                  <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
                    {slides[currentSlide].cta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-gold"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  {slides[currentSlide].ctaSecondary}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex mt-12 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-gold" : "bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

