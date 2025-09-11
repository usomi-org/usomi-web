"use client";

import ImageComponent from "@/components/ImageComponent";
import {useEffect, useState} from "react";
import {StockImages} from "@/lib/images";
import {shuffleArray} from "@/lib/algorithms";

export default function RightSide(){

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
    <div className="flex-1 relative h-64 sm:h-80 md:h-auto overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-l from-green-900/30 to-transparent"></div>
    </div>
    );
}

export function RightSide1() {
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
        <div className="w-full relative h-[100vh] sm:h-[100vh] lg:h-full overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-green-900/30 to-transparent"></div>
        </div>
    );
}
