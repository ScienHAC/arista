"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Blogger",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content:
      "The smart tracking feature saved my luggage during my trip to Europe. I can't imagine traveling without Arista Vault products now!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content:
      "As someone who travels weekly for business, the anti-theft technology and power bank features have been game-changers for me.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Digital Nomad",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    content:
      "I've tried many smart travel products, but Arista Vault offers the perfect balance of technology, security, and style.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Adventure Traveler",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    content:
      "The durability of these products is impressive. My backpack has survived extreme conditions while keeping my tech safe and charged.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    role: "Fashion Influencer",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    content:
      "Not only are these products functional, but they're also stylish. I love how they complement my travel aesthetic.",
    rating: 4,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <Card className="border-0 shadow-none bg-background">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">What Our Customers Say</CardTitle>
        <CardDescription className="text-lg">
          Hear from people who have transformed their travel experience with Arista Vault
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={testimonials[currentIndex].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <Card className="border border-gold/10 shadow-md bg-white dark:bg-card">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold">
                            <img
                              src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-gold rounded-full p-1">
                            <Quote className="h-4 w-4 text-black" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <p className="text-lg mb-4 italic">"{testimonials[currentIndex].content}"</p>

                        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-between">
                          <div>
                            <h4 className="font-semibold text-gold">{testimonials[currentIndex].name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                          </div>

                          <div className="flex mt-2 md:mt-0">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-gold" : "text-muted"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border-gold/20 text-gold hover:bg-gold/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 10000)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-gold" : "bg-gold/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full border-gold/20 text-gold hover:bg-gold/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

