'use client';

import Link from 'next/link';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const words = [
    {
        text: 'Javascript',
    },
    {
        text: 'and'
    },
    {
        text: 'React/Next.js'
    },
    {
        text: 'developer',
        className: 'text-blue-500 dark:text-blue-500'
    }
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="relative flex flex-col justify-center items-center bg- bg-dot-black/[0.2] bg-white dark:bg-black dark:bg-dot-white/[0.2] w-full h-screen"
        >
            <div className="absolute inset-0 flex justify-center items-center bg-white dark:bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
            <p className="text-neutral-600 text-xs sm:text-base dark:text-neutral-200"> Hello, I&apos;m Luis Sante. A passionate Software Engineer.</p>
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
