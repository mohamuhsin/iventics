"use client";

import Image from "next/image";
import { useCallback } from "react";
import { track } from "@vercel/analytics";

export default function FloatingButtons() {
    const handleWhatsAppClick = () => {
        track("WhatsApp Button Clicked", {
            platform: "WhatsApp",
            location: "Bottom Right",
        });
        window.open("https://wa.me/256782330038", "_blank", "noopener,noreferrer");
    };

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            {/* Container to hold both buttons vertically */}
            <div className="fixed right-6 bottom-6 z-[9999] flex flex-col items-center gap-4">
                {/* WhatsApp Button */}
                <button
                    onClick={handleWhatsAppClick}
                    aria-label="Chat with us on WhatsApp"
                    type="button"
                    className="
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

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    type="button"
                    className="
            btn btn-primary btn-circle 
            shadow-lg hover:scale-110 transition
            w-10 h-10
            flex items-center justify-center
          "
                >
                    ↑
                </button>
            </div>
        </>
    );
}
