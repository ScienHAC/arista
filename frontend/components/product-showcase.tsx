// import Image from "next/image"
// import { ShoppingCart, Star } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export type ProductShowcaseProps = {
//     badge?: string
//     title: string
//     description: string
//     rating: number
//     reviews: number
//     price: number
//     imageSrc: string
//     imageAlt: string
//     reversed?: boolean
// }

// export default function ProductShowcase({
//     badge = "FEATURED",
//     title,
//     description,
//     rating = 5,
//     reviews = 0,
//     price,
//     imageSrc,
//     imageAlt,
//     reversed = false,
// }: ProductShowcaseProps) {
//     return (
//         <section className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     <div className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}>
//                         <div className="space-y-6">
//                             {badge && (
//                                 <div className="inline-block bg-amber-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
//                                     {badge}
//                                 </div>
//                             )}
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
//                             <p className="text-gray-600 dark:text-gray-300">{description}</p>
//                             <div className="flex items-center space-x-4 mb-4">
//                                 <div className="flex">
//                                     {Array.from({ length: 5 }).map((_, i) => (
//                                         <Star
//                                             key={i}
//                                             className={`w-5 h-5 ${i < Math.floor(rating)
//                                                 ? "fill-amber-400 text-amber-400"
//                                                 : i < rating
//                                                     ? "fill-amber-400/50 text-amber-400"
//                                                     : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
//                                                 }`}
//                                         />
//                                     ))}
//                                 </div>
//                                 <span className="text-gray-600 dark:text-gray-400">{reviews} reviews</span>
//                             </div>
//                             <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-4">${price.toFixed(2)}</div>
//                             <Button className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-400 dark:hover:to-amber-500 text-white">
//                                 Add to cart <ShoppingCart className="ml-2 h-4 w-4" />
//                             </Button>
//                         </div>
//                     </div>
//                     <div
//                         className={`order-1 ${reversed ? "md:order-1" : "md:order-2"} bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 flex items-center justify-center`}
//                     >
//                         <div className="relative w-full h-[300px]">
//                             <Image
//                                 src={imageSrc || "/placeholder.svg"}
//                                 alt={imageAlt}
//                                 width={500}
//                                 height={300}
//                                 className="object-contain"
//                                 unoptimized
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export type ProductDiscoveryProps = {
//     badge?: string
//     title: string
//     description: string
//     // rating: number
//     reviews: number
//     imageSrc: string
//     imageAlt: string
//     reversed?: boolean
//     productId?: number
// }

// export default function ProductDiscovery({
//     badge = "FEATURED",
//     title,
//     description,
//     // rating = 5,
//     reviews = 0,
//     imageSrc,
//     imageAlt,
//     reversed = false,
//     productId
// }: ProductDiscoveryProps) {
//     return (
//         <section className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     <div className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}>
//                         <div className="space-y-6">
//                             {badge && (
//                                 <div className="inline-block bg-amber-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
//                                     {badge}
//                                 </div>
//                             )}
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
//                             <p className="text-gray-600 dark:text-gray-300">{description}</p>
//                             {/* <div className="flex items-center space-x-4 mb-4">
//                                 <div className="flex">
//                                     {Array.from({ length: 5 }).map((_, i) => (
//                                         <Info
//                                             key={i}
//                                             className={`w-5 h-5 ${i < Math.floor(rating)
//                                                 ? "text-amber-400"
//                                                 : "text-gray-200 dark:text-gray-700"
//                                                 }`}
//                                         />
//                                     ))}
//                                 </div>
//                                 <span className="text-gray-600 dark:text-gray-400">{reviews} reviews</span>
//                             </div> */}
//                             <Link
//                                 href={`/products/${productId}`}
//                                 className="inline-block"
//                             >
//                                 <Button
//                                     variant="outline"
//                                     className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400"
//                                 >
//                                     View More Details <ChevronRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </Link>
//                         </div>
//                     </div>
//                     <div
//                         className={`order-1 ${reversed ? "md:order-1" : "md:order-2"} bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 flex items-center justify-center`}
//                     >
//                         <div className="relative w-full h-[300px]">
//                             <Image
//                                 src={imageSrc || "/placeholder.svg"}
//                                 alt={imageAlt}
//                                 width={500}
//                                 height={300}
//                                 className="object-contain"
//                                 unoptimized
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

export type ProductShowcaseProps = {
    badge?: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    reversed?: boolean
    productId?: number
    relatedProducts?: Array<{
        id: number
        name: string
        price: number
        image: string
        category?: string
        description?: string
    }>
}

export default function ProductShowcase({
    badge = "FEATURED",
    title,
    description,
    imageSrc,
    imageAlt,
    reversed = false,
    productId,
    relatedProducts = [],
}: ProductShowcaseProps) {
    const { addItem } = useCart()
    const { toast } = useToast()

    const handleAddToCart = (product: { id: number; name: string; price: number; image: string; category?: string; description?: string }) => {
        addItem(product)
        toast({
            title: "Added to cart",
            description: `${product.name} has been added to your cart.`,
        })
    }

    return (
        <section className={`py-16 md:py-24 ${reversed ? "bg-muted/30" : "bg-background"}`}>
            <div className="container mx-auto px-4">
                {/* Main Product Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-60">
                    <motion.div
                        className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="space-y-6">
                            {badge && (
                                <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gold/20 text-gold border border-gold/30">
                                    {badge}
                                </div>
                            )}
                            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                            <p className="text-muted-foreground">{description}</p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={`/products/${productId}`}
                                    className="inline-block"
                                >
                                    <Button
                                        variant="outline"
                                        className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400"
                                    >
                                        View More Details <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`order-1 ${reversed ? "md:order-1" : "md:order-2"}`}
                        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
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
                    </motion.div>
                </div>

                {/* Related Products */}
                {relatedProducts && relatedProducts.length > 0 && (
                    <div className="mt-16">
                        {/*<h3 className="text-2xl font-bold mb-8">Related Products</h3>*/}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <Link href={`/products/${product.id}`} className="block">
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    </Link>

                                    <div className="p-4">
                                        <div className="text-xs text-muted-foreground mb-1">{product.category || "Smart Product"}</div>
                                        <Link href={`/products/${product.id}`}>
                                            <h4 className="font-semibold text-base mb-1 line-clamp-1 hover:text-gold transition-colors">
                                                {product.name}
                                            </h4>
                                        </Link>
                                        {product.description && (
                                            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                                        )}
                                        <div className="flex justify-between items-center mt-3">
                                            <span className="font-bold text-gold">₹{product.price.toLocaleString()}</span>
                                            <Button
                                                size="sm"
                                                className="bg-gold text-black hover:bg-gold/90"
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                <ShoppingCart className="h-4 w-4 mr-1" />
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Link href={`/categories/${title.toLowerCase().replace(/\s+/g, "-")}`}>
                                <Button variant="outline" className="border-gold/30 hover:bg-gold/10 hover:text-gold">
                                    View All {title}
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

