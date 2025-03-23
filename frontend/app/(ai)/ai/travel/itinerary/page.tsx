// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { ArrowLeft, Save, Share } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useTravelForm } from "../../TravelFormContext"
// import { EnhancedAIThinking } from "@/components/aristaai/enhanced-ai-thinking"
// import Link from "next/link"

// interface DayActivity {
//   title: string
//   activities: string[]
// }

// const itineraryData: DayActivity[] = [
//   {
//     title: "Arrival and Exploration",
//     activities: [
//       "Arrive at Tokyo International Airport",
//       "Check-in at your hotel in Shinjuku",
//       "Evening walk through Shinjuku district",
//       "Dinner at a local ramen restaurant",
//     ],
//   },
//   {
//     title: "Tokyo Highlights",
//     activities: [
//       "Visit Meiji Shrine in the morning",
//       "Explore Harajuku and Takeshita Street",
//       "Afternoon at Tokyo Metropolitan Government Building observation deck",
//       "Evening in Shibuya - visit the famous crossing",
//     ],
//   },
//   {
//     title: "Traditional Tokyo",
//     activities: [
//       "Morning at Tsukiji Outer Market",
//       "Visit Asakusa and Senso-ji Temple",
//       "Cruise on the Sumida River",
//       "Explore Tokyo National Museum",
//     ],
//   },
//   {
//     title: "Day Trip to Hakone",
//     activities: [
//       "Take the Shinkansen to Hakone",
//       "Hakone Open-Air Museum",
//       "Relaxing onsen (hot spring) experience",
//       "Overnight stay at a traditional ryokan",
//     ],
//   },
//   {
//     title: "Kyoto Day 1",
//     activities: [
//       "Travel to Kyoto via Shinkansen",
//       "Visit Kinkaku-ji (Golden Pavilion)",
//       "Explore Arashiyama Bamboo Grove",
//       "Evening in Gion district",
//     ],
//   },
//   {
//     title: "Kyoto Day 2",
//     activities: [
//       "Visit Fushimi Inari Shrine early morning",
//       "Explore Nishiki Market",
//       "Afternoon at Kiyomizu-dera Temple",
//       "Traditional tea ceremony experience",
//     ],
//   },
//   {
//     title: "Departure Day",
//     activities: [
//       "Last-minute shopping in Tokyo",
//       "Visit teamLab Borderless digital art museum",
//       "Farewell dinner at a local izakaya",
//       "Depart from Tokyo International Airport",
//     ],
//   },
// ]
// type PlannerStep = "loading" | "results"
// export default function ItineraryPage() {
//   const { formData } = useTravelForm();
//   const [step, setStep] = useState<PlannerStep>("loading")
//   const [activeTab, setActiveTab] = useState("itinerary")
//   useState(() => {
//     setStep("loading")
//     setTimeout(() => {
//       setStep("results")
//     }, 3000)
//     console.log(formData)
//   })

//   return (
//     <div className="pt-24 pb-16">
//       <div className="container px-4 max-w-4xl mx-auto">
//         <div className="mb-6 flex items-center justify-between">
//           <Link href="/ai" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             <span>Back to form</span>
//           </Link>
//           <div className="flex items-center gap-2">
//             <Button variant="outline" size="sm" className="flex items-center gap-1">
//               <Save className="h-4 w-4" />
//               <span>Save</span>
//             </Button>
//             <Button variant="outline" size="sm" className="flex items-center gap-1">
//               <Share className="h-4 w-4" />
//               <span>Share</span>
//             </Button>
//           </div>
//         </div>
//         {step === "loading" && (
//           <motion.div
//             key="loading"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="flex h-64 items-center justify-center p-8"
//           >
//             <EnhancedAIThinking isThinking={true} />
//           </motion.div>
//         )}
//         {step === "results" && (
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-arista-orange via-arista-gold to-arista-silver">
//               Your 7-Day Trip to Japan
//             </h1>
//             <p className="text-muted-foreground mb-6">
//               AI-generated travel plan for 2 travelers • Vacation • Medium budget
//             </p>

//             <div className="flex mb-8 border-b">
//               <button
//                 className={`px-6 py-3 font-medium ${activeTab === "itinerary"
//                   ? "text-arista-orange border-b-2 border-arista-orange"
//                   : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 onClick={() => setActiveTab("itinerary")}
//               >
//                 Itinerary
//               </button>
//               <button
//                 className={`px-6 py-3 font-medium ${activeTab === "packing"
//                   ? "text-arista-orange border-b-2 border-arista-orange"
//                   : "text-muted-foreground hover:text-foreground"
//                   }`}
//               >
//                 <Link href="/ai/travel/packing-list">Packing List</Link>
//               </button>
//             </div>

//             <div className="space-y-8">
//               {itineraryData.map((day, index) => (
//                 <div key={index} className="flex gap-6">
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-arista-orange to-arista-gold flex items-center justify-center text-white font-bold">
//                       Day {index + 1}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-3">{day.title}</h3>
//                     <ul className="space-y-3">
//                       {day.activities.map((activity, actIndex) => (
//                         <li key={actIndex} className="flex items-start">
//                           <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-orange" />
//                           <span>{activity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 p-6 rounded-xl bg-muted/30">
//               <h3 className="text-xl font-bold mb-4">Travel Tips for Japan</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
//                   <span>Purchase a Japan Rail Pass before your trip for unlimited travel on JR trains.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
//                   <span>Download offline maps and translation apps to help navigate.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
//                   <span>Consider getting a Suica or Pasmo card for convenient travel on public transportation.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
//                   <span>Carry cash as many smaller establishments don't accept credit cards.</span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Share, Phone, DollarSign, AlertTriangle, Train, LucideInfo } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTravelForm } from "../../TravelFormContext"
import { EnhancedAIThinking } from "@/components/aristaai/enhanced-ai-thinking"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Activity {
  time: string
  description: string
  estimated_cost_usd: number
}

interface DayItinerary {
  day: number
  title: string
  activities: Activity[]
  total_estimated_cost_usd: number
}

interface EmergencyContacts {
  police: string
  ambulance: string
  fire: string
  nearest_embassy: {
    country: string
    phone: string
    address: string
  }
}

interface CurrencyInfo {
  local_currency: string
  conversion_rate_to_inr: number
}

interface ItineraryData {
  itinerary: DayItinerary[]
  local_emergency_contacts: EmergencyContacts
  currency_info: CurrencyInfo
  must_see_places: string[]
  local_customs_and_etiquette: string[]
  transportation_tips: string[]
  safety_tips: string[]
}

type PlannerStep = "loading" | "results"

export default function ItineraryPage() {
  const { formData } = useTravelForm()
  const [step, setStep] = useState<PlannerStep>("loading")
  const [activeTab, setActiveTab] = useState("itinerary")
  const [itineraryData, setItineraryData] = useState<ItineraryData | null>(null)

  useEffect(() => {
    setStep("loading")

    // Call API and fetch itinerary
    const fetchItinerary = async () => {
      try {
        const response = await fetch("https://aristaai.onrender.com/get_suggestions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            destination: formData.destination,
            purpose: formData.purpose,
            duration: formData.duration,
            traveler: formData.traveler,
          }),
        })

        const result = await response.json()
        console.log("result", result)

        let suggestionsString = result.suggestions
        suggestionsString = suggestionsString
          .replace(/```json\n?/, "")
          .replace(/\n?```/, "")

        const suggestionsJSON = JSON.parse(suggestionsString)
        console.log("Suggestions JSON:", suggestionsJSON)

        setItineraryData(suggestionsJSON)

        setTimeout(() => {
          setStep("results")
        }, 1000)
      } catch (error) {
        console.error("Error fetching itinerary:", error)
      }
    }

    fetchItinerary()
  }, [formData])

  // Calculate total trip cost
  const calculateTotalCost = () => {
    if (!itineraryData) return 0
    return itineraryData.itinerary.reduce((total, day) => total + day.total_estimated_cost_usd, 0)
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

        {step === "results" && itineraryData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-arista-orange via-arista-gold to-arista-silver">
              Your {formData.duration}-Day Trip to {formData.destination}
            </h1>
            <p className="text-muted-foreground mb-2">
              AI-generated travel plan for {formData.traveler} • {formData.purpose}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Estimated total cost: ${calculateTotalCost()} USD
                ({Math.round(calculateTotalCost() / itineraryData.currency_info.conversion_rate_to_inr)} INR)
              </span>
            </div>

            <Tabs defaultValue="itinerary" className="mb-8">
              <TabsList className="w-full">
                <TabsTrigger value="itinerary" className="flex-1">Itinerary</TabsTrigger>
                <TabsTrigger value="customs" className="flex-1">Local Customs</TabsTrigger>
                <TabsTrigger value="places" className="flex-1">Must-See Places</TabsTrigger>
                <TabsTrigger value="safety" className="flex-1">Travel Tips</TabsTrigger>
              </TabsList>

              {/* Itinerary Tab */}
              <TabsContent value="itinerary" className="mt-6 space-y-8">
                {itineraryData.itinerary.map((day, index) => (
                  <div key={index} className="p-6 rounded-xl border bg-card">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-arista-orange to-arista-gold flex items-center justify-center text-white font-bold flex-shrink-0">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-bold">{day.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex gap-3">
                          <div className="w-20 text-sm text-muted-foreground flex-shrink-0">
                            {activity.time}
                          </div>
                          <div className="flex-grow">
                            <p>{activity.description}</p>
                          </div>
                          <div className="text-sm text-muted-foreground flex-shrink-0 w-16 text-right">
                            ${activity.estimated_cost_usd}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">Day {day.day} Total</div>
                      <div className="font-medium">${day.total_estimated_cost_usd}</div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* Local Customs Tab */}
              <TabsContent value="customs" className="mt-6">
                <div className="p-6 rounded-xl border bg-card">
                  <h3 className="text-xl font-bold mb-4">Local Customs and Etiquette</h3>
                  <ul className="space-y-3">
                    {itineraryData.local_customs_and_etiquette.map((custom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
                        <span>{custom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl border bg-card mt-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Emergency Contacts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <p className="text-sm text-muted-foreground">Police</p>
                      <p className="font-medium">{itineraryData.local_emergency_contacts.police}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <p className="text-sm text-muted-foreground">Ambulance</p>
                      <p className="font-medium">{itineraryData.local_emergency_contacts.ambulance}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <p className="text-sm text-muted-foreground">Fire</p>
                      <p className="font-medium">{itineraryData.local_emergency_contacts.fire}</p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">Nearest {itineraryData.local_emergency_contacts.nearest_embassy.country} Embassy</p>
                    <p className="font-medium">{itineraryData.local_emergency_contacts.nearest_embassy.phone}</p>
                    <p className="text-sm mt-1">{itineraryData.local_emergency_contacts.nearest_embassy.address}</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border bg-card mt-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Currency Information
                  </h3>
                  <p className="mb-2">Local Currency: {itineraryData.currency_info.local_currency}</p>
                  <p>Conversion Rate to INR: {itineraryData.currency_info.conversion_rate_to_inr}</p>
                </div>
              </TabsContent>

              {/* Must-See Places Tab */}
              <TabsContent value="places" className="mt-6">
                <div className="p-6 rounded-xl border bg-card">
                  <h3 className="text-xl font-bold mb-4">Must-See Places</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {itineraryData.must_see_places.map((place, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted flex items-start">
                        <span className="mr-3 mt-1 h-2 w-2 rounded-full bg-arista-orange flex-shrink-0" />
                        <span>{place}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Travel Tips Tab */}
              <TabsContent value="safety" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border bg-card">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-arista-orange" />
                      Safety Tips
                    </h3>
                    <ul className="space-y-3">
                      {itineraryData.safety_tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-orange" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border bg-card">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Train className="h-5 w-5 text-arista-gold" />
                      Transportation Tips
                    </h3>
                    <ul className="space-y-3">
                      {itineraryData.transportation_tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-arista-gold" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mt-8">
              <div className="flex gap-3">
                <LucideInfo className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-amber-800">Travel Insurance Reminder</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    We recommend purchasing travel insurance for your trip to {formData.destination}.
                    This will protect you against unexpected events and medical emergencies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}