"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "./navConfig";
import Brand from "./Brand";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import {
    MessageSquareText,
    Vote,
    LayoutDashboard,
    HeartHandshake,
    Laptop,
    Link as LinkIcon,
    Cpu,
    Wifi,
} from "lucide-react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-sm px-4 navbar">
            {/* Mobile: Brand left */}
            <div className="navbar-start lg:hidden">
                <Brand />
            </div>

            {/* Desktop: Brand center */}
            <div className="navbar-center hidden lg:flex">
                <Brand />
            </div>

            {/* Mobile: Hamburger right */}
            <div className="navbar-end lg:hidden">
                <button
                    className="btn btn-ghost btn-circle"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open mobile menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm font-medium">
                    {navItems.map((item) =>
                        item.children ? (
                            <li key={item.label} className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn btn-ghost gap-1">
                                    {item.label}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>

                                {/* Mega menu for Services & Solutions */}
                                <div
                                    tabIndex={0}
                                    className="dropdown-content z-50 mt-2 bg-base-100 rounded-box shadow p-6 w-[650px]"
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        {item.children.map((group) =>
                                            group.items.map(({ label, href, description }) => (
                                                <Link
                                                    key={label}
                                                    href={href}
                                                    className="hover:bg-base-200 px-3 py-2 rounded flex gap-3 items-start transition"
                                                >
                                                    <div className="text-primary mt-1">
                                                        {getIcon(label)}
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <div className="font-semibold text-base">
                                                            {label}
                                                        </div>
                                                        {description && (
                                                            <p className="text-sm text-base-content/70 leading-snug">
                                                                {description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <li key={item.label}>
                                <Link href={item.href} className="btn btn-ghost">
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* Desktop theme toggle */}
            <div className="navbar-end hidden lg:flex">
                <ThemeToggle />
            </div>

            {/* Mobile menu drawer */}
            {mobileMenuOpen && (
                <MobileMenu onClose={() => setMobileMenuOpen(false)} />
            )}
        </nav>
    );
}

// Helper: Match label to icon for both Services and Solutions
function getIcon(label) {
    switch (label) {
        // Solutions
        case "SMS Platform":
            return <MessageSquareText className="w-5 h-5" />;
        case "Voting Platform":
            return <Vote className="w-5 h-5" />;
        case "PMS Platform":
            return <LayoutDashboard className="w-5 h-5" />;
        case "Charity Platform":
            return <HeartHandshake className="w-5 h-5" />;

        // Services
        case "Web & Mobile Apps":
            return <Laptop className="w-5 h-5" />;
        case "API & Payment Integration":
            return <LinkIcon className="w-5 h-5" />;
        case "ICT Services & Solutions":
            return <Cpu className="w-5 h-5" />;
        case "Fiber and Telecom Services":
            return <Wifi className="w-5 h-5" />;

        default:
            return null;
    }
}
