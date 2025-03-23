import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

export default function CTASection() {
  return (
    <Card className="border-0 shadow-none bg-muted/30">
      <CardContent className="px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <CardTitle className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Travel Experience?
          </CardTitle>
          <CardDescription className="text-lg mb-8">
            Join thousands of satisfied customers who have transformed their travel experience with Arista Vault's smart
            travel products.
          </CardDescription>
          <Link href="/products">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 group">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

