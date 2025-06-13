"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    ArrowUpRight,
    ShieldCheck,
    Smartphone,
    ServerCog,
    CreditCard,
} from "lucide-react";

export default function Hero() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section
            className="
        relative 
        min-h-[80vh] sm:min-h-screen 
        px-6 sm:px-12 lg:px-24 
        py-20 sm:py-24 lg:py-28 
        flex items-center 
        bg-mesh-grid 
        bg-gradient-to-br 
        from-[#fdfcfb] to-[#e2d1c3] 
        dark:from-[#1e1e1e] dark:to-[#2e2e2e] 
        transition-colors duration-500 
        animate-fade-in-up
      "
        >
            {/* Soft radial overlay */}
            <div
                className="absolute inset-0 bg-[radial-gradient(transparent,_rgba(0,0,0,0.03))] pointer-events-none z-0"
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Side: Hero Text */}
                <div
                    className="text-center lg:text-left space-y-8"
                    data-aos="fade-right"
                >
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
                        Welcome to Iventics Technologies
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight text-base-content leading-snug">
                        Simplifying Lives Digitally.
                    </h1>

                    <p className="text-lg md:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        We simplify lives through innovative digital platforms, intuitive
                        mobile apps, and seamless payment systems — backed by trusted ICT
                        services that empower businesses across Africa.
                    </p>

                    <p className="text-sm italic text-base-content/60">
                        Powering Africa&apos;s digital future — one solution at a time.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                        <Link
                            href="/services"
                            aria-label="Explore our services"
                            className="
                btn btn-primary text-lg px-6 py-3 min-h-[3.25rem] h-auto 
                shadow-md hover:shadow-xl 
                transition duration-300 
                flex items-center gap-2
                focus:outline-none focus:ring-4 focus:ring-primary/50
              "
                        >
                            Explore Services <ArrowUpRight size={20} />
                        </Link>

                        <Link
                            href="/solutions"
                            aria-label="Explore our solutions"
                            className="
                btn btn-outline border-base-content text-base-content text-lg 
                px-6 py-3 min-h-[3.25rem] h-auto 
                hover:bg-base-300 
                transition-colors duration-300 
                flex items-center gap-2
                focus:outline-none focus:ring-4 focus:ring-base-content/30
              "
                        >
                            Explore Solutions <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Right Side: Feature Cards */}
                <div className="grid grid-cols-2 gap-6 sm:gap-8" data-aos="fade-left">
                    <FeatureCard
                        icon={<ShieldCheck className="w-6 h-6 text-primary" />}
                        title="Secure Systems"
                        description="We build robust, secure digital systems that protect your data and ensure uptime."
                    />
                    <FeatureCard
                        icon={<Smartphone className="w-6 h-6 text-secondary" />}
                        title="Mobile-First Apps"
                        description="Our apps are fast, modern, and optimized for all devices and screen sizes."
                    />
                    <FeatureCard
                        icon={<ServerCog className="w-6 h-6 text-accent" />}
                        title="Custom ICT Solutions"
                        description="We tailor software and IT services that simplify workflows and increase efficiency."
                    />
                    <FeatureCard
                        icon={<CreditCard className="w-6 h-6 text-info" />}
                        title="Seamless Payments"
                        description="We integrate mobile money, billing systems, and APIs with smooth user flows."
                    />
                </div>
            </div>

            {/* Scroll Down Hint */}
            <div
                className="
          absolute bottom-6 left-1/2 -translate-x-1/2 
          text-base-content/50 
          select-none 
          pointer-events-none 
          animate-bounce
          text-sm
          font-semibold
        "
                aria-hidden="true"
            >
                ↓ Scroll to explore
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div
            className="card bg-base-100 shadow-sm border border-base-300 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 group"
            data-aos="zoom-in-up"
        >
            <div className="card-body p-5">
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-base-300 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-1 transition duration-300">
                        {icon}
                    </div>
                    <h3 className="text-lg font-semibold text-base-content">{title}</h3>
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
