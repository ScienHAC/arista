"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DayActivity {
  title: string
  activities: string[]
}

const itineraryData: DayActivity[] = [
  {
    title: "Arrival and Exploration",
    activities: [
      "Arrive at Tokyo International Airport",
      "Check-in at your hotel in Shinjuku",
      "Evening walk through Shinjuku district",
      "Dinner at a local ramen restaurant",
    ],
  },
  {
    title: "Tokyo Highlights",
    activities: [
      "Visit Meiji Shrine in the morning",
      "Explore Harajuku and Takeshita Street",
      "Afternoon at Tokyo Metropolitan Government Building observation deck",
      "Evening in Shibuya - visit the famous crossing",
    ],
  },
  {
    title: "Traditional Tokyo",
    activities: [
      "Morning at Tsukiji Outer Market",
      "Visit Asakusa and Senso-ji Temple",
      "Cruise on the Sumida River",
      "Explore Tokyo National Museum",
    ],
  },
  {
    title: "Day Trip to Hakone",
    activities: [
      "Take the Shinkansen to Hakone",
      "Hakone Open-Air Museum",
      "Relaxing onsen (hot spring) experience",
      "Overnight stay at a traditional ryokan",
    ],
  },
  {
    title: "Kyoto Day 1",
    activities: [
      "Travel to Kyoto via Shinkansen",
      "Visit Kinkaku-ji (Golden Pavilion)",
      "Explore Arashiyama Bamboo Grove",
      "Evening in Gion district",
    ],
  },
  {
    title: "Kyoto Day 2",
    activities: [
      "Visit Fushimi Inari Shrine early morning",
      "Explore Nishiki Market",
      "Afternoon at Kiyomizu-dera Temple",
      "Traditional tea ceremony experience",
    ],
  },
  {
    title: "Departure Day",
    activities: [
      "Last-minute shopping in Tokyo",
      "Visit teamLab Borderless digital art museum",
      "Farewell dinner at a local izakaya",
      "Depart from Tokyo International Airport",
    ],
  },
]

export default function ItineraryPage() {
  const [activeTab, setActiveTab] = useState("itinerary")

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/ai" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to form</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Save className="h-4 w-4" />
              <span>Save</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-arista-orange via-arista-gold to-arista-silver">
            Your 7-Day Trip to Japan
          </h1>
          <p className="text-muted-foreground mb-6">
            AI-generated travel plan for 2 travelers • Vacation • Medium budget
          </p>

          <div className="flex mb-8 border-b">
            <button
              className={`px-6 py-3 font-medium ${activeTab === "itinerary"
                  ? "text-arista-orange border-b-2 border-arista-orange"
                  : "text-muted-foreground hover:text-foreground"
                }`}
              onClick={() => setActiveTab("itinerary")}
            >
              Itinerary
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "packing"
                  ? "text-arista-orange border-b-2 border-arista-orange"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Link href="/ai/travel/packing-list">Packing List</Link>
            </button>
          </div>

          <div className="space-y-8">
            {itineraryData.map((day, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-arista-orange to-arista-gold flex items-center justify-center text-white font-bold">
                    Day {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{day.title}</h3>
                  <ul className="space-y-3">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-orange" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-muted/30">
            <h3 className="text-xl font-bold mb-4">Travel Tips for Japan</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
                <span>Purchase a Japan Rail Pass before your trip for unlimited travel on JR trains.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
                <span>Download offline maps and translation apps to help navigate.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
                <span>Consider getting a Suica or Pasmo card for convenient travel on public transportation.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
                <span>Carry cash as many smaller establishments don't accept credit cards.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

