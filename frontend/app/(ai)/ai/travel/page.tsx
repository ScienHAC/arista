import { Compass, Map, Calendar, Package } from "lucide-react"
import TravelPlanner from "@/components/aristaai/travel-planner"

export default function TravelPage() {
  return (
    <div className="pt-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">AI Travel Planning</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Experience the future of travel planning with our AI-powered assistant. Get personalized itineraries,
            packing lists, and product recommendations.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Compass className="h-6 w-6" />,
              title: "Destination Insights",
              description:
                "Get AI-powered insights about your destination, including weather, local customs, and must-see attractions.",
            },
            {
              icon: <Map className="h-6 w-6" />,
              title: "Custom Itineraries",
              description: "Receive a day-by-day itinerary tailored to your interests, travel style, and budget.",
            },
            {
              icon: <Calendar className="h-6 w-6" />,
              title: "Smart Scheduling",
              description: "Our AI optimizes your schedule to minimize travel time and maximize experiences.",
            },
            {
              icon: <Package className="h-6 w-6" />,
              title: "Packing Assistance",
              description:
                "Get personalized packing lists based on your destination, activities, and weather forecast.",
            },
          ].map((feature, index) => (
            <div key={index} className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-arista-orange/20 to-arista-gold/20 text-arista-orange">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-md">
          <h2 className="mb-6 text-center text-2xl font-bold">Plan Your Next Adventure</h2>
          <TravelPlanner />
        </div>

        <div className="mt-16 rounded-xl bg-muted/30 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Enter Your Details",
                description: "Tell us where you're going, for how long, and what type of trip you're planning.",
              },
              {
                step: "02",
                title: "AI Processing",
                description: "Our advanced AI analyzes thousands of data points to create your personalized plan.",
              },
              {
                step: "03",
                title: "Receive Your Plan",
                description: "Get your custom itinerary, packing list, and product recommendations instantly.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-arista-orange to-arista-gold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

