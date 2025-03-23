"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Share, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PackingCategory {
  title: string
  items: string[]
}

const packingData: PackingCategory[] = [
  {
    title: "Essential Documents",
    items: [
      "Passport and visa",
      "Flight tickets",
      "Travel insurance",
      "Credit cards and Japanese yen",
      "International driving permit (if needed)",
      "Hotel reservations",
    ],
  },
  {
    title: "Clothing",
    items: [
      "Lightweight, breathable clothes",
      "One warm layer (jacket or sweater)",
      "Comfortable walking shoes",
      "Formal outfit for nice restaurants",
      "Rain jacket or small umbrella",
      "Socks and underwear",
    ],
  },
  {
    title: "Technology",
    items: [
      "Smartphone with travel apps",
      "Camera",
      "Power bank",
      "Universal adapter",
      "Chargers for all devices",
      "Noise-cancelling headphones",
    ],
  },
  {
    title: "Toiletries",
    items: [
      "Toothbrush and toothpaste",
      "Shampoo and conditioner",
      "Deodorant",
      "Sunscreen",
      "Hand sanitizer",
      "Basic medications",
    ],
  },
  {
    title: "Smart Travel Accessories",
    items: [
      "Arista Smart Wallet with GPS tracking",
      "Arista Travel Backpack with anti-theft features",
      "Portable Wi-Fi device",
      "Smart luggage tag",
      "Digital luggage scale",
      "Travel pillow",
    ],
  },
]

export default function PackingListPage() {
  const [activeTab, setActiveTab] = useState("packing")
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

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
              <Link href="/ai/travel/itinerary">Itinerary</Link>
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "packing"
                  ? "text-arista-orange border-b-2 border-arista-orange"
                  : "text-muted-foreground hover:text-foreground"
                }`}
              onClick={() => setActiveTab("packing")}
            >
              Packing List
            </button>
          </div>

          <div className="space-y-8">
            {packingData.map((category, index) => (
              <div key={index} className="p-6 rounded-xl bg-card shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-arista-orange">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => toggleItem(item)}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center ${checkedItems[item] ? "bg-arista-orange text-white" : "border border-muted-foreground"
                          }`}
                      >
                        {checkedItems[item] && <Check className="h-3 w-3" />}
                      </div>
                      <span className={checkedItems[item] ? "line-through text-muted-foreground" : ""}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button className="bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90">
              Download Packing List
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

