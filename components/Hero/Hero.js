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
        <section className="min-h-screen bg-base-200 px-6 sm:px-12 lg:px-24 py-28 flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Side: Hero Text */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-base-content leading-tight">
                        Simplifying Lives Digitally.
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        We build scalable platforms, intuitive mobile apps, and seamless
                        payment systems — transforming businesses across Africa with purpose
                        and trust.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                        <button className="btn btn-primary gap-2 text-lg px-6 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            Get Started
                            <ArrowUpRight size={20} />
                        </button>
                        <button className="btn btn-outline gap-2 text-lg px-6 py-3 border-gray-700 dark:border-gray-300 text-base-content hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                            Explore Solutions
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
        <div className="bg-base-100 border border-base-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-base-300 p-3 rounded-lg">{icon}</div>
                <h3 className="text-xl font-semibold text-base-content">{title}</h3>
            </div>
            <p className="text-base-content/70 text-base">{description}</p>
        </div>
    );
}
