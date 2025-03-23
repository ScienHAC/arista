"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Company {
    name: string;
    logo: string;
    url?: string;
}

interface LogoCarouselProps {
    title?: string;
    companies: Company[];
    speed?: number; // Animation speed in seconds
    grayscale?: boolean;
    hoverEffect?: boolean;
}

export default function LogoCarousel({
    title = "Trusted by Top Companies",
    companies = [],
    speed = 60, // Doubled default speed to 60 seconds for slower, more professional motion
    grayscale = true,
    hoverEffect = true,
}: LogoCarouselProps) {
    const [duplicatedCompanies, setDuplicatedCompanies] = useState<Company[]>([]);

    useEffect(() => {
        // Duplicate the array to create a seamless loop
        setDuplicatedCompanies([...companies, ...companies]);
    }, [companies]);

    if (companies.length === 0) return null;

    return (
        <div className="relative w-full overflow-hidden bg-background/80 py-10">
            {title && (
                <div className="max-w-3xl mx-auto text-center pb-8">
                    {/* <h2 className="text-gray-800 font-medium text-center text-xl md:text-3xl mb-4">
                        {title}
                    </h2> */}
                    <h2 className="text-center text-xl md:text-3xl mb-4 font-bold">
                        <span>Trusted by </span>
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#FFD700] to-[#d4af37] text-transparent bg-clip-text drop-shadow-md">
                            Top Companies
                        </span>
                    </h2>

                </div>
            )}

            {/* Gradient overlays for fade effect */}
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Top row - right to left */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
                <div
                    className={`flex items-center justify-start [&>div]:mx-8 animate-infinite-scroll group-hover:${hoverEffect ? "[animation-play-state:paused]" : ""
                        }`}
                    style={{
                        animationDuration: `${speed}s`,
                    }}
                >
                    {duplicatedCompanies.slice(0, companies.length).map((company, index) => (
                        <LogoItem
                            key={`top-${company.name}-${index}`}
                            company={company}
                            grayscale={grayscale}
                            hoverEffect={hoverEffect}
                        />
                    ))}
                </div>
                <div
                    className={`flex items-center justify-start [&>div]:mx-8 animate-infinite-scroll group-hover:${hoverEffect ? "[animation-play-state:paused]" : ""
                        }`}
                    style={{
                        animationDuration: `${speed}s`,
                    }}
                    aria-hidden="true"
                >
                    {duplicatedCompanies.slice(0, companies.length).map((company, index) => (
                        <LogoItem
                            key={`top-dup-${company.name}-${index}`}
                            company={company}
                            grayscale={grayscale}
                            hoverEffect={hoverEffect}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom row - left to right - slightly slower than top row for visual interest */}
            <div className="mt-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
                <div
                    className={`flex items-center justify-start [&>div]:mx-8 animate-infinite-scroll-reverse group-hover:${hoverEffect ? "[animation-play-state:paused]" : ""
                        }`}
                    style={{
                        animationDuration: `${speed * 1.2}s`, // 20% slower than top row
                    }}
                >
                    {duplicatedCompanies.slice(companies.length).map((company, index) => (
                        <LogoItem
                            key={`bottom-${company.name}-${index}`}
                            company={company}
                            grayscale={grayscale}
                            hoverEffect={hoverEffect}
                        />
                    ))}
                </div>
                <div
                    className={`flex items-center justify-start [&>div]:mx-8 animate-infinite-scroll-reverse group-hover:${hoverEffect ? "[animation-play-state:paused]" : ""
                        }`}
                    style={{
                        animationDuration: `${speed * 1.2}s`, // 20% slower than top row
                    }}
                    aria-hidden="true"
                >
                    {duplicatedCompanies.slice(companies.length).map((company, index) => (
                        <LogoItem
                            key={`bottom-dup-${company.name}-${index}`}
                            company={company}
                            grayscale={grayscale}
                            hoverEffect={hoverEffect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function LogoItem({
    company,
    grayscale,
    hoverEffect,
}: {
    company: Company;
    grayscale: boolean;
    hoverEffect: boolean;
}) {
    return (
        <div className="relative text-center justify-self-center">
            {company.url ? (
                <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${hoverEffect ? "hover:scale-105 transition-all duration-300" : ""}`}
                >
                    <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={130}
                        height={40}
                        className={`max-w-[130px] h-8 xl:h-10 object-contain ${grayscale ? "filter grayscale hover:grayscale-0" : ""
                            }`}
                    />
                </a>
            ) : (
                <div className={`block ${hoverEffect ? "hover:scale-105 transition-all duration-300" : ""}`}>
                    <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={130}
                        height={40}
                        className={`max-w-[130px] h-8 xl:h-10 object-contain ${grayscale ? "filter grayscale hover:grayscale-0" : ""
                            }`}
                    />
                </div>
            )}
        </div>
    );
}