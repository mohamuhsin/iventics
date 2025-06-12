"use client";

import {
    ArrowUpRight,
    ShieldCheck,
    Smartphone,
    ServerCog,
    CreditCard,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-28 flex items-center bg-premium bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] dark:from-[#1e1e1e] dark:to-[#2e2e2e] transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Side: Hero Text */}
                <div className="text-center lg:text-left space-y-8">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-base-content leading-tight">
                        Simplifying Lives Digitally.
                    </h1>

                    <p className="text-lg md:text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        We build scalable platforms, intuitive mobile apps, and seamless
                        payment systems — transforming businesses across Africa with purpose
                        and trust.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                        <button className="btn btn-primary text-lg px-6 py-3 shadow-md hover:shadow-xl transition duration-300">
                            Explore Services
                            <ArrowUpRight size={20} />
                        </button>
                        <button className="btn btn-outline border-base-content text-base-content text-lg px-6 py-3 hover:bg-base-300 transition-colors duration-300">
                            Explore Solutions
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <FeatureCard
                        icon={<ShieldCheck className="w-6 h-6 text-primary" />}
                        title="Secure Systems"
                        description="We prioritize your data, security, and platform reliability."
                    />
                    <FeatureCard
                        icon={<Smartphone className="w-6 h-6 text-secondary" />}
                        title="Mobile First"
                        description="Modern apps that run fast and feel native on any device."
                    />
                    <FeatureCard
                        icon={<ServerCog className="w-6 h-6 text-accent" />}
                        title="Custom Platforms"
                        description="Digitally transform your workflows with tailored software."
                    />
                    <FeatureCard
                        icon={<CreditCard className="w-6 h-6 text-info" />}
                        title="Payment Solutions"
                        description="Integrate Airtel & MTN payments, collections, and APIs."
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-base-100 border border-base-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.025]">
            <div className="flex items-center gap-4 mb-3">
                <div className="bg-base-300 p-3 rounded-xl">{icon}</div>
                <h3 className="text-lg font-semibold text-base-content">{title}</h3>
            </div>
            <p className="text-base text-base-content/70 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
