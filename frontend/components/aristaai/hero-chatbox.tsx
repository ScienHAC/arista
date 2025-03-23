"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Send, Plane, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EnhancedAIThinking } from "./enhanced-ai-thinking"
import Link from "next/link"

export default function HeroChatbox() {
  const [query, setQuery] = useState("")
  const [isThinking, setIsThinking] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsThinking(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsThinking(false)
      setShowResults(true)
    }, 3000)
  }

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResults && !isThinking && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-arista-orange" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask Arista AI..."
                  className="pl-12 pr-4 py-6 text-lg bg-background/80 backdrop-blur-md border-arista-orange/20 focus:border-arista-orange/50 rounded-full shadow-lg"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90"
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-arista-orange/90 hover:bg-arista-orange text-white rounded-full px-6"
                onClick={() => {
                  setQuery("I want to plan a trip to Japan")
                  setTimeout(() => {
                    if (inputRef.current) {
                      inputRef.current.focus()
                    }
                  }, 100)
                }}
              >
                <Plane className="mr-2 h-4 w-4" />
                Plan Your Trip
              </Button>
              <Button
                variant="outline"
                className="border-arista-gold/50 text-arista-gold hover:bg-arista-gold/10 rounded-full px-6"
                asChild
              >
                <Link href="/ai/products">
                  <Package className="mr-2 h-4 w-4" />
                  Explore Smart Products
                </Link>
              </Button>
            </div>
          </motion.div>
        )}

        {isThinking && (
          <motion.div
            key="thinking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EnhancedAIThinking isThinking={isThinking} />
          </motion.div>
        )}

        {showResults && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glassmorphism rounded-xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Your Japan Trip</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowResults(false)
                  setQuery("")
                }}
              >
                New Search
              </Button>
            </div>

            <p className="mb-4 text-muted-foreground">
              I've created a personalized 7-day itinerary for your trip to Japan. Would you like to see the full
              itinerary or a packing list?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90"
                asChild
              >
                <Link href="/ai/travel/itinerary">
                  <Plane className="mr-2 h-4 w-4" />
                  View Itinerary
                </Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/ai/travel/packing-list">
                  <Package className="mr-2 h-4 w-4" />
                  View Packing List
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

