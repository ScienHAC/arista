"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plane, Package, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EnhancedAIThinking } from "./enhanced-ai-thinking"
import Link from "next/link"

type TravelFormData = {
  destination: string
  purpose: string
  duration: number
}

type PlannerStep = "form" | "loading" | "results"

export default function TravelPlanner() {
  const [step, setStep] = useState<PlannerStep>("form")
  const [formData, setFormData] = useState<TravelFormData>({
    destination: "",
    purpose: "Vacation",
    duration: 5,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("loading")
    // Simulate AI processing
    setTimeout(() => {
      setStep("results")
    }, 3000)
  }

  const handleBack = () => {
    setStep("form")
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="overflow-hidden rounded-xl glassmorphism">
        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  Travel Agent AI
                </h2>
                <p className="text-sm text-muted-foreground">
                  Plan your perfect journey with AI assistance
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="destination"
                    className="text-sm font-medium text-foreground"
                  >
                    Destination
                  </label>
                  <Input
                    id="destination"
                    placeholder="Where do you want to go?"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="purpose"
                    className="text-sm font-medium text-foreground"
                  >
                    Purpose of Trip
                  </label>
                  <Select
                    value={formData.purpose}
                    onValueChange={(value) =>
                      setFormData({ ...formData, purpose: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vacation">Vacation</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Family">Family Visit</SelectItem>
                      <SelectItem value="Adventure">Adventure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="duration"
                    className="text-sm font-medium text-foreground"
                  >
                    Duration (days)
                  </label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    max="30"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        duration: Number.parseInt(e.target.value),
                      })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90"
                >
                  Plan My Trip
                </Button>
              </form>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-64 items-center justify-center p-8"
            >
              <EnhancedAIThinking isThinking={true} />
            </motion.div>
          )}

          {step === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  Your {formData.destination} Trip
                </h2>
                <p className="text-sm text-muted-foreground">
                  {formData.duration} days • {formData.purpose}
                </p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="flex h-auto flex-col items-center justify-center gap-2 p-4"
                  asChild
                >
                  <Link href="/ai/travel/itinerary">
                    <Plane className="h-5 w-5 text-arista-orange" />
                    <span>View Itinerary</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="flex h-auto flex-col items-center justify-center gap-2 p-4"
                  asChild
                >
                  <Link href="/ai/travel/packing-list">
                    <Package className="h-5 w-5 text-arista-gold" />
                    <span>View Packing List</span>
                  </Link>
                </Button>
              </div>

              <Button
                variant="ghost"
                className="flex w-full items-center justify-center gap-2"
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to form</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

