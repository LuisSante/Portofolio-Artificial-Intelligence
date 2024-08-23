'use client';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex justify-center items-center w-full">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#landing-page">Landing Page</HoveredLink>
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/spojskic" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/mrpojskic/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                        <HoveredLink href="https://twitter.com/magicpojska" rel="noopener noreferrer" target="_blank">
                            <TwitterLogoIcon className="mr-1" />
                            X/Twitter
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
