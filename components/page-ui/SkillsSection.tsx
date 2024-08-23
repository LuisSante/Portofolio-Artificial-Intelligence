import Link from 'next/link';
import React from 'react';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto px-8 pb-8 max-w-5xl">
            <h1 id="skills" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl md:text-7xl dark:text-white">
                Skills
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-2'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative flex flex-col items-start dark:border-white/[0.2] mx-auto p-4 border border-black/[0.2] w-full max-w-full h-[13rem]"
                    >
                        <Icon className="-top-3 -left-3 absolute text-black dark:text-white size-6" />
                        <Icon className="-bottom-3 -left-3 absolute text-black dark:text-white size-6" />
                        <Icon className="-top-3 -right-3 absolute text-black dark:text-white size-6" />
                        <Icon className="-right-3 -bottom-3 absolute text-black dark:text-white size-6" />
                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'React.js',
        link: 'https://react.dev/',
        icon: <FaReact />
    },
    {
        title: 'Next.js',
        link: 'https://nextjs.org',
        icon: <TbBrandNextjs />
    },
    {
        title: 'Tailwind',
        link: 'https://tailwindcss.com',
        icon: <SiTailwindcss />
    },
    {
        title: 'PostgreSQL',
        link: 'https://www.postgresql.org',
        icon: <SiPostgresql />
    }
];
