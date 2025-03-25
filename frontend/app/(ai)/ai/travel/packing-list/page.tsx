"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Share, Check, Weight, Download, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTravelForm } from "../../TravelFormContext"
import { EnhancedAIThinking } from "@/components/aristaai/enhanced-ai-thinking"

interface PackingItem {
  name: string
  weight_grams: number
}

interface PackingCategory {
  category: string
  items: PackingItem[]
}

interface PackingListData {
  packing_list: PackingCategory[]
}

type PlannerStep = "loading" | "results"

export default function PackingListPage() {
  const { formData } = useTravelForm()
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [packingData, setPackingData] = useState<PackingListData | null>(null)
  const [step, setStep] = useState<PlannerStep>("loading")

  useEffect(() => {
    const fetchPackingList = async () => {
      setStep("loading")
      try {
        const response = await fetch("https://aristaai.onrender.com/generate_packing_list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            destination: formData.destination,
            purpose: formData.purpose,
            duration: formData.duration,
            traveler: formData.traveler,
          }),
        })

        if (!response.ok) throw new Error("Failed to fetch packing list")
        const data = await response.json()
        setPackingData(data)
      } catch (error) {
        console.error("Error fetching packing list:", error)
      } finally {
        setStep("results")
      }
    }

    fetchPackingList()
  }, [formData])

  const toggleItem = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  const calculateTotalWeight = () => {
    if (!packingData) return 0
    return packingData.packing_list.reduce(
      (total, category) => total + category.items?.reduce(
        (sum, item) => sum + (!checkedItems[item.name] ? item.weight_grams : 0), 0
      ),
      0
    )
  }

  const totalWeight = calculateTotalWeight()
  const totalItems = packingData?.packing_list.reduce((acc, category) => acc + category.items.length, 0) || 0
  const checkedItemsCount = Object.values(checkedItems).filter(Boolean).length

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/ai" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to form</span>
          </Link>
        </div>

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
        {step === "results" && packingData && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold mb-2">Your Packing List</h1>

            <div className="p-4 rounded-xl bg-muted mb-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Packing Progress</p>
                <span className="font-medium">{checkedItemsCount} of {totalItems} items packed</span>
              </div>
              <div className="flex items-center gap-2">
                <Weight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Total Weight: <span className="font-medium">{(totalWeight / 1000).toFixed(1)} kg</span></span>
              </div>
            </div>
            {/* <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-arista-orange via-arista-gold to-arista-silver">
      Your {formData.duration}-Day Trip to {formData.destination}
    </h1>
    <p className="text-muted-foreground mb-2">
      AI-generated travel plan for {formData.traveler} • {formData.purpose}
    </p>
    <div className="flex items-center gap-2 mb-6">
      <Weight className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">
        Total luggage weight: {(totalWeight / 1000).toFixed(1)} kg • {Math.round(totalWeight / 1000 * 2.2)} lbs
      </span>
    </div> */}
            <div className="space-y-8">
              {packingData?.packing_list.map((category, index) => (
                <div key={index} className="p-6 rounded-xl bg-card shadow-sm border">
                  <h3 className="text-xl font-bold mb-4 text-arista-orange">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 cursor-pointer" onClick={() => toggleItem(item.name)}>
                        <div className={`w-5 h-5 rounded ${checkedItems[item.name] ? "bg-arista-orange text-white" : "border border-muted-foreground"}`}>
                          {checkedItems[item.name] && <Check className="h-3 w-3" />}
                        </div>
                        <span className={checkedItems[item.name] ? "line-through text-muted-foreground" : ""}>{item.name}</span>
                        <span className="text-xs text-muted-foreground ml-auto">{(item.weight_grams / 1000).toFixed(1)} kg</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-arista-orange flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Packing List
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}