"use client";

import Link from "next/link";
import Image from "next/image";
import { track } from "@vercel/analytics";

export default function Whatsapp() {
    const handleTrackClick = () => {
        track("WhatsApp Button Clicked", {
            platform: "WhatsApp",
            location: "Bottom Right",
        });
    };

    return (
        <Link
            href="https://wa.me/256782330038"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            onClick={handleTrackClick}
            className="whatsapp-button"
        >
            <Image
                src="/whatsapp.png"
                alt="Chat with us on WhatsApp"
                width={60}
                height={60}
                className="sm:w-16 sm:h-16 md:w-20 md:h-20"
                priority
                aria-label="WhatsApp Icon"
            />
        </Link>
    );
}
