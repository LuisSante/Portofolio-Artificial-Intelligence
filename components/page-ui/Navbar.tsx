'use client';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
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
                        <HoveredLink href="#research-project">Research Project</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/LuisSante" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/luis-felipe-sante-taipe-0ba00723b/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
