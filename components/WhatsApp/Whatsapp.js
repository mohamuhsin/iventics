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
            className="whatsapp-button fixed bottom-6 right-6 z-50 rounded-full shadow-lg p-4 transition-all"
        >
            <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={80}
                height={80}
                className="rounded-full"
                priority
            />
        </Link>
    );
}
