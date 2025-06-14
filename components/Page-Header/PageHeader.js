"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PageHeader({ title, subtitle }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            disable: () => window.innerWidth < 640,
        });
    }, []);

    return (
        <div
            className="relative w-full bg-mesh-grid overflow-hidden border-b border-base-300 shadow-sm
            py-24 sm:py-32 px-6"
        >
            {/* Gradient overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-base-100/90 via-base-100/80 to-transparent
                dark:from-neutral/90 dark:via-neutral/80 pointer-events-none z-0"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-center sm:text-left">
                <div
                    className="backdrop-blur-sm bg-base-100/80 dark:bg-neutral/60 rounded-xl p-6 sm:p-10 inline-block"
                    data-aos="fade-right"
                >
                    <h1 className="whitespace-nowrap text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight text-base-content dark:text-white leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p
                            className="mt-4 text-lg sm:text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto sm:mx-0"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
