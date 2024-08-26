'use client';

import { useState } from "react";
import { Input } from "@nextui-org/input";

export function ContacMeSection() {

    const [value, setValue] = useState("");

    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        // className="text-white"
        >
            <h1 id="contact-me" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-white md:text-7xl">
                Contact me
            </h1>
            <form>
                <div className="flex flex-col gap-2 w-full max-w-[240px] text-white">
                    <Input size='md' type="email" label="Email" />
                </div>
            </form >
        </div >
    )
}
