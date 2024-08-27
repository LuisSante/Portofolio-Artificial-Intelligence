'use client';

import { Button } from "../ui/button";
import { Input } from "../ui/input";


export function ContacMeSection() {

    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        >
            <h1 id="contact-me" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-white md:text-7xl">
                Contact me
            </h1>
            <div className="text-white">
                <form
                    action="https://formspree.io/f/xqaznppo"
                    method="POST"
                    className="space-y-8 max-w-xl"
                >
                    <div className="space-y-2">
                        <label className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed">Name</label>
                        <Input className="flex border-input file:border-0 bg-neutral-950 file:bg-transparent disabled:opacity-50 px-3 py-2 border rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full h-10 file:font-medium text-sm file:text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed" placeholder="Your name" name="name" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">Email</label>
                        <Input className="flex border-input file:border-0 bg-neutral-950 file:bg-transparent disabled:opacity-50 px-3 py-2 border rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full h-10 file:font-medium text-sm file:text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed" placeholder="email@gmail.com" name="email" required />
                    </div>
                    <div className="space-y-2">
                        <label className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed">Message</label>
                        <br />
                        <textarea className="flex border-input bg-neutral-950 disabled:opacity-50 px-3 py-2 border rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-full min-h-[80px] text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed" rows={7} placeholder="Type your message here." name="message" required />
                    </div>
                    <Button
                        className="inline-flex justify-center items-center bg-white text-black"
                    >
                        Submit
                    </Button>
                </form >
            </div>
        </div >
    )
}
