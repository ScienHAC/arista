"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <Card className="border-0 shadow-none bg-muted/30">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Subscribe to Our Newsletter</CardTitle>
        <CardDescription className="text-lg">
          Get exclusive offers, new product announcements, and smart travel tips delivered directly to your inbox
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-12">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pr-10 border-gold/30 focus:border-gold bg-white dark:bg-card h-12 rounded-lg"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/50">
              <Send className="h-5 w-5" />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gold text-black hover:bg-gold/90 h-12 px-6 rounded-lg"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Arista Vault.
        </p>
      </CardContent>
    </Card>
  )
}

