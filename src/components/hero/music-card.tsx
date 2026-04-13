"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

const tracks = [
  {
    id: 1,
    title: "Look What You've Done",
    description: "Drake",
    image: "/images/music/look-what-youve-done.jpg",
  },
  {
    id: 2,
    title: "Breakeven",
    description: "The Script",
    image: "/images/music/breakeven.jpg",
  },
  {
    id: 3,
    title: "Mr. Brightside",
    description: "The Killers",
    image: "/images/music/mr-brightside.jpg",
  },
];

export function MusicCard({ className }: { className?: string }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const activeItem = tracks[activeIndex];

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % tracks.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    };

    const rotations = useMemo(() => [4, -2, -6, 5], []);

    return (
        <div className={cn("flex flex-col gap-4 md:gap-5 w-full max-w-[360px] md:max-w-none md:w-[420px] mx-auto md:mx-0", className)}>
            <span className="text-[11px] font-bold tracking-widest text-[#888] uppercase pl-1">
                What I'm currently listening to
            </span>
            <div className="flex flex-col p-5 md:p-6 bg-[#0a0a0a] rounded-[20px] border border-white/5 w-full shadow-2xl shadow-black">
                <div
                    className="relative flex items-center gap-6 w-full"
                    style={{ perspective: "1000px" }}
                >
                    {/* Image Card Stack */}
                    <div className="relative w-[110px] h-[110px] flex-shrink-0">
                        <AnimatePresence custom={direction}>
                            {tracks.map((item, index) => {
                                const isActive = index === activeIndex;
                                const offset = index - activeIndex;

                                return (
                                    <motion.div
                                        key={item.id}
                                        className="absolute inset-0 w-full h-full overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl rounded-md"
                                        initial={{
                                            x: offset * 8,
                                            y: Math.abs(offset) * 3,
                                            z: -80 * Math.abs(offset),
                                            scale: 0.9 - Math.abs(offset) * 0.05,
                                            rotateZ: rotations[index % 4],
                                            opacity: isActive ? 1 : 0.5,
                                            zIndex: 10 - Math.abs(offset),
                                        }}
                                        animate={
                                            isActive
                                                ? {
                                                    x: [offset * 8, direction === 1 ? -60 : 60, 0],
                                                    y: [Math.abs(offset) * 3, 0, 0],
                                                    z: [-80, 80, 100],
                                                    scale: [0.9, 1.1, 1],
                                                    rotateZ: [rotations[index % 4], -3, 0],
                                                    opacity: 1,
                                                    zIndex: 100,
                                                }
                                                : {
                                                    x: offset * 8,
                                                    y: Math.abs(offset) * 3,
                                                    z: -80 * Math.abs(offset),
                                                    rotateZ: rotations[index % 4],
                                                    scale: 0.9 - Math.abs(offset) * 0.05,
                                                    opacity: 0.5,
                                                    zIndex: 10 - Math.abs(offset),
                                                }
                                        }
                                        exit={{
                                            x: direction === 1 ? -100 : 100,
                                            z: -120,
                                            scale: 0.8,
                                            rotateZ: direction === 1 ? -6 : 6,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Text Area */}
                    <div className="flex flex-col justify-center flex-1 h-[60px] md:h-[64px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full pr-2"
                            >
                                <h3 className="text-[15px] sm:text-[17px] font-bold text-white leading-snug line-clamp-2 md:line-clamp-1">
                                    {activeItem.title}
                                </h3>
                                <p className="text-[12px] md:text-[13px] font-medium text-[#888] mt-1 md:mt-1.5 line-clamp-1">
                                    {activeItem.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3 mt-6 self-end border-t border-white/5 pt-4 w-full justify-end">
                    <button
                        onClick={handlePrev}
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MusicCard;
