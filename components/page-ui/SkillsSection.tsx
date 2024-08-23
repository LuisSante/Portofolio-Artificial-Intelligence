import Link from 'next/link';
import React from 'react';
import { FaPython } from 'react-icons/fa';
import {
    SiPandas,
    SiTensorflow,
    SiKeras,
    SiPytorch,
    SiScikitlearn
} from 'react-icons/si';

import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto px-8 pb-8 max-w-5xl">
            <h1 id="skills" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-white md:text-7xl">
                Skills
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative flex flex-col items-start border-white/[0.2] mx-auto p-4 border w-full max-w-full h-[13rem]"
                    >
                        <Icon className="-top-3 -left-3 absolute text-white size-6" />
                        <Icon className="-bottom-3 -left-3 absolute text-white size-6" />
                        <Icon className="-top-3 -right-3 absolute text-white size-6" />
                        <Icon className="-right-3 -bottom-3 absolute text-white size-6" />
                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'Python',
        link: 'https://react.dev/',
        icon: <FaPython />
    },
    {
        title: 'Keras',
        link: 'https://nextjs.org',
        icon: <SiKeras />
    },
    {
        title: 'Pandas',
        link: 'https://tailwindcss.com',
        icon: <SiPandas />
    },
    {
        title: 'TensorFlow',
        link: 'https://www.postgresql.org',
        icon: <SiTensorflow />
    },
    {
        title: 'PyTorch',
        link: 'https://pytorch.org/',
        icon: <SiPytorch />
    },
    {
        title: 'Scikit-Learn',
        link: 'https://scikit-learn.org/',
        icon: <SiScikitlearn />
    },

];
