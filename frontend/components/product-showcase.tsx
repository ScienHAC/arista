import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export type ProductShowcaseProps = {
    badge?: string
    title: string
    description: string
    rating: number
    reviews: number
    price: number
    imageSrc: string
    imageAlt: string
    reversed?: boolean
}

export default function ProductShowcase({
    badge = "FEATURED",
    title,
    description,
    rating = 5,
    reviews = 0,
    price,
    imageSrc,
    imageAlt,
    reversed = false,
}: ProductShowcaseProps) {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}>
                        <div className="space-y-6">
                            {badge && (
                                <div className="inline-block bg-amber-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                                    {badge}
                                </div>
                            )}
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
                            <p className="text-gray-600 dark:text-gray-300">{description}</p>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(rating)
                                                ? "fill-amber-400 text-amber-400"
                                                : i < rating
                                                    ? "fill-amber-400/50 text-amber-400"
                                                    : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 dark:text-gray-400">{reviews} reviews</span>
                            </div>
                            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">${price.toFixed(2)}</div>
                            <Button className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-400 dark:hover:to-amber-500 text-white">
                                Add to cart <ShoppingCart className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div
                        className={`order-1 ${reversed ? "md:order-1" : "md:order-2"} bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 flex items-center justify-center`}
                    >
                        <div className="relative w-full h-[300px]">
                            <Image
                                src={imageSrc || "/placeholder.svg"}
                                alt={imageAlt}
                                width={500}
                                height={300}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

