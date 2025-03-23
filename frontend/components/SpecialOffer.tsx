"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SpecialOffers() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 12,
        minutes: 34,
        seconds: 56,
    })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev

                seconds -= 1
                if (seconds < 0) {
                    seconds = 59
                    minutes -= 1
                }

                if (minutes < 0) {
                    minutes = 59
                    hours -= 1
                }

                if (hours < 0) {
                    hours = 23
                    days -= 1
                }

                if (days < 0) {
                    // Reset timer when it reaches zero
                    return { days: 3, hours: 12, minutes: 34, seconds: 56 }
                }

                return { days, hours, minutes, seconds }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (value: number) => {
        return value.toString().padStart(2, "0")
    }

    if (!mounted) {
        return null // Return null on server-side to prevent hydration mismatch
    }

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Special <span className="text-gold">Offers</span>
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Limited time deals on our premium smart products</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        style={{
                            opacity: 1,
                            transform: "translateX(0)",
                            transition: "opacity 0.5s ease, transform 0.5s ease",
                        }}
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1470&auto=format&fit=crop"
                                    alt="Smart Passport Holder"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                    30% OFF
                                </div>
                            </div>
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Smart Passport Holder</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Anti-lost passport holder with RFID protection and GPS tracking
                                    </p>
                                    <div className="flex items-center mb-4">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">₹2,499</span>
                                        <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">₹3,599</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Offer ends in:</p>
                                        <div className="flex justify-center space-x-2">
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.days)}</span>
                                                <span className="text-xs block">Days</span>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.hours)}</span>
                                                <span className="text-xs block">Hours</span>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.minutes)}</span>
                                                <span className="text-xs block">Mins</span>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.seconds)}</span>
                                                <span className="text-xs block">Secs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild className="w-full bg-gold hover:bg-gold-dark text-black">
                                        <Link href="/products/special-offer-1">Shop Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                        style={{
                            opacity: 1,
                            transform: "translateX(0)",
                            transition: "opacity 0.5s ease, transform 0.5s ease 0.2s",
                        }}
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1374&auto=format&fit=crop"
                                    alt="Fingerprint Lock Laptop Bag"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                    25% OFF
                                </div>
                            </div>
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fingerprint Lock Laptop Bag</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Premium leather laptop bag with fingerprint security and USB charging
                                    </p>
                                    <div className="flex items-center mb-4">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">₹8,999</span>
                                        <span className="ml-2 text-lg text-gray-500 dark:text-gray-400 line-through">₹11,999</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Offer ends in:</p>
                                        <div className="flex justify-center space-x-2">
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.days)}</span>
                                                <span className="text-xs block">Days</span>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.hours)}</span>
                                                <span className="text-xs block">Hours</span>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.minutes)}</span>
                                                <span className="text-xs block">Mins</span>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
                                                <span className="text-lg font-bold">{formatTime(timeLeft.seconds)}</span>
                                                <span className="text-xs block">Secs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button asChild className="w-full bg-gold hover:bg-gold-dark text-black">
                                        <Link href="/products/special-offer-2">Shop Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

