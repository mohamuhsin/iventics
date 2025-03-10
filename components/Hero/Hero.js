"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

export default function Hero() {
    const handleTrackClick = () => {
        track("Contact Button Clicked", {
            location: "Hero Section",
            method: "Email",
        });
    };

    return (
        <section className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 py-32 sm:py-40 bg-gradient-to-r from-[#1e3a8a] to-[#10b981] overflow-hidden min-h-screen">
            <div className="text-white space-y-8 z-10 max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight">
                    Iventics Technologies
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mx-auto italic">
                    Simplifying Lives Digitally.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-5xl mx-auto">
                    We simplify lives with innovative digital solutions, enhancing
                    businesses through web and mobile apps. Let’s transform your digital
                    experience today!
                </p>
                <Link
                    href="mailto:info@iventics.com"
                    onClick={handleTrackClick}
                    className="inline-block bg-[#10b981] text-white py-3 px-6 lg:py-4 lg:px-8 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold hover:bg-[#34d399] transition-all duration-300 transform hover:scale-105"
                >
                    Get In Touch
                </Link>
            </div>

            {/* Enhanced Background */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[40rem] lg:h-[40rem] bg-[#ffffff] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        </section>
    );
}
