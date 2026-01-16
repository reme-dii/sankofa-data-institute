"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
    "/hero/hero4.jpg",
    "/hero/hero5.jpg",
];

export default function HeroBackground() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Hero Background ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={100}
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-black/60 z-0"></div>
        </>
    );
}
