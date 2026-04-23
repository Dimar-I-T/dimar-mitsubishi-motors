'use client'
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Hero() {
    const [displayIndex, setDisplayIndex] = useState(0);
    const [flashing, setFlashing] = useState(false);
    const isTransitioning = useRef(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const tulisan_hero = [
        'The meaning of adventure is beginning to change',
        'New driving',
        'New challenges',
        'MITSUBISHI MOTORS will shape',
        'The next era and the next adventure'
    ];

    const totalSlides = 5;
    const startInterval = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (isTransitioning.current) {
                return;
            }

            isTransitioning.current = true;
            setFlashing(true);
            setTimeout(() => {
                setDisplayIndex((prev) => (prev + 1) % totalSlides);
            }, 300);
            setTimeout(() => {
                setFlashing(false);
                isTransitioning.current = false;
            }, 400);
        }, 5000);
    }, []);

    const goTo = useCallback((index: number) => {
        if (isTransitioning.current) {
            return;
        }

        isTransitioning.current = true;
        setFlashing(true);
        setTimeout(() => {
            setDisplayIndex(index);
        }, 300);
        setTimeout(() => {
            setFlashing(false);
            isTransitioning.current = false;
        }, 400);
        startInterval();
    }, [startInterval]);

    const handlePrev = () => goTo((displayIndex - 1 + totalSlides) % totalSlides);
    const handleNext = () => goTo((displayIndex + 1) % totalSlides);
    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startInterval]);

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-[100px] max-md:px-[20px]">
            <Image
                src={`/bg-hero/bg${displayIndex + 1}.jpg`}
                alt="Background Hero"
                fill
                style={{
                    objectFit: "cover"
                }}
                priority
            />
            <div className={`absolute inset-0 bg-black pointer-events-none z-5 ${flashing ? "opacity-50" : "opacity-0"}`}
                style={{
                    transition: "opacity 300ms ease-in-out",
                }} />
            <div className="absolute w-full min-h-screen bg-black/50 z-10" />

            <div className="w-full z-20 flex flex-col gap-y-[31px] max-md:pr-10">
                {tulisan_hero.map((isi, index) => (
                    <div
                        key={index}
                        className={`w-full flex flex-row items-center gap-[15px] max-md:gap-[10px] transition-transform duration-[400ms] ease-in-out origin-left ${index === displayIndex ? "scale-[1.3] max-md:scale-[1.2]" : "scale-100"
                            }`}
                        style={{
                            transition: "transform 400ms ease-in-out, opacity 400ms ease-in-out",
                            transformOrigin: "left center",
                        }}
                    >
                        <img src="bulat-list.png" className="w-[20px] h-[20px] max-md:w-[10px] max-md:h-[10px]" />
                        <h1 className="text-[23px] max-md:text-[15px] text-putih m-0">
                            {isi}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 w-full h-[80px] z-40 flex flex-row flex-wrap items-center justify-center gap-x-10 px-[78px] backdrop-blur-sm">
                <div className="flex items-center gap-[10px]">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`h-[6px] rounded-sm transition-all duration-300 cursor-pointer border-none outline-none ${index === displayIndex ? "bg-red-600 w-[40px]" : "bg-gray-500 w-[28px] hover:bg-gray-300" }`}
                        />
                    ))}
                </div>

                <div className="flex items-center gap-[8px] ">
                    <button
                        onClick={handlePrev}
                        className="w-[40px] h-[40px] border border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer bg-transparent"
                    >
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <path d="M9 1L2 8L9 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-[40px] h-[40px] border border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer bg-transparent"
                    >
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}