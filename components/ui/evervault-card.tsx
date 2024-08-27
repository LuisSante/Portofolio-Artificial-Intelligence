'use client';
import { motion, useMotionTemplate } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

export const EvervaultCard = ({ text, icon, className }: { text?: string; icon?: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative', className)}>
            <div
                className="relative flex justify-center items-center bg-transparent rounded-3xl overflow-hidden group/card size-full"
            >
                <CardPattern />
                <div className="relative z-10 flex justify-center items-center">
                    <div className="relative flex flex-col justify-center items-center rounded-full font-bold text-4xl text-white size-44">
                        <div className="absolute bg-black/[0.8] blur-sm rounded-full size-full" />
                        <span className="z-20 text-white whitespace-nowrap">{text}</span>
                        <span className="z-20 mt-4 text-white whitespace-nowrap">{icon}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function CardPattern({ mouseX, mouseY }: any) {
    const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl rounded-2xl transition duration-500"
                style={style}
            />
        </div>
    );
}

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
