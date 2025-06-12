"use client";

export default function DottedSection({ children }) {
    return (
        <div className="relative bg-base-100 overflow-hidden">
            {/* Dotted background */}
            <div className="absolute inset-0 bg-dots pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-base-100/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16">
                {children}
            </div>
        </div>
    );
}
