'use client';

import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'Artificial Intelligence',
    },
    {
        text: 'and'
    },
    {
        text: 'Machine Learning',
        className: 'text-blue-500'
    },
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="relative flex flex-col justify-center items-center bg-black bg-dot-white/[0.2] w-full h-screen"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
            <p className="text-neutral-200 text-xs sm:text-base"> Hello, I&apos;m Luis Sante. A passionate Artificial Intelligence Developer</p>
            <TypewriterEffectSmooth words={words} />
            <div className="z-30 flex md:flex-row flex-col items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                {/* Todo: drive */}
                <Link href="/">
                    <Button>Download CV</Button>
                </Link>
                <Link href="https://wa.me/51923258987">
                    <Button variant="secondary">Contact Me</Button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    );
}
