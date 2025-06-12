"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

export default function WhatsappButton() {
    const handleClick = () => {
        track("WhatsApp Button Clicked", {
            platform: "WhatsApp",
            location: "Bottom Right",
        });
        window.open("https://wa.me/256782330038", "_blank", "noopener,noreferrer");
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Chat with us on WhatsApp"
            type="button"
            className="
        fixed bottom-20 right-6 z-[9999]
        w-12 h-12
        p-0
        bg-transparent
        border-none
        flex items-center justify-center
        animate-pulseCustom
        cursor-pointer select-none
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
      "
        >
            <Image
                src="/whatsapp.png"
                alt="WhatsApp Icon"
                width={48}
                height={48}
                priority
                aria-hidden="true"
            />
        </button>
    );
}
