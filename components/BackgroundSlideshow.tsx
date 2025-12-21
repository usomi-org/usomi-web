"use client";

import ImageComponent from "@/components/ImageComponent";
import { useEffect, useState } from "react";
import { StockImages } from "@/lib/images";
import { shuffleArray } from "@/lib/algorithms";

// Background Slideshow Component
export default function BackgroundSlideshow() {
    const [images, setImages] = useState(StockImages);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            if (counter >= images.length) {
                const shuffled = shuffleArray(images);
                setImages(shuffled);
                counter = 0;
                setCurrentImage(0);
            } else {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="z-40">
            {images.map((img, idx) => (
                <ImageComponent
                    key={img}
                    imagePath={img}
                    alt="Slideshow"
                    width={1920}
                    height={1080}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        idx === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-900/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
        </div>
    );
}
