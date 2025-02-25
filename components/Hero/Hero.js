import Link from "next/link";

// Hero.js
export default function Hero() {
    return (
        <section className="relative flex items-center justify-center text-center px-6 py-40 bg-gradient-to-r from-[#1e3a8a] to-[#10b981] overflow-hidden">
            <div className="text-white space-y-6 z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Iventics Technologies
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-light mx-auto italic">
                    Simplifying Lives Digitally.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
                    We simplify lives with innovative digital solutions, enhancing
                    businesses through web and mobile apps. Let’s transform your digital
                    experience together.
                </p>
                <Link
                    href="mailto:info@iventics.com"
                    className="inline-block bg-[#10b981] text-white py-3 px-6 rounded-lg text-lg sm:text-xl md:text-2xl font-semibold hover:bg-[#34d399] transition-all duration-300 transform hover:scale-105"
                >
                    Get In Touch
                </Link>
            </div>

            {/* Simplified Background */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-[#ffffff] rounded-full opacity-10 blur-xl animate-pulse"></div>
        </section>
    );
}
