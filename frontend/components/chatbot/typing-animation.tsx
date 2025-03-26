"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
    text: string
    speed?: number
    onComplete?: () => void
}

export function TypingAnimation({ text, speed = 30, onComplete }: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        } else if (onComplete) {
            onComplete()
        }
    }, [currentIndex, text, speed, onComplete])

    return (
        <div className="relative">
            <span>{displayedText}</span>
            {currentIndex < text.length && (
                <span className="ml-0.5 inline-block w-1.5 h-4 bg-arista-orange/80 animate-pulse" />
            )}
        </div>
    )
}