"use client";

import { useState } from "react";
import Link from "next/link";
import Brand from "./Brand";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "./navConfig";
import MobileMenu from "./MobileMenu";

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
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-50 mt-2 bg-base-100 rounded-box shadow w-52"
                                >
                                    {item.children.map((child) => (
                                        <li key={child.label}>
                                            <Link
                                                href={child.href}
                                                className="px-4 py-2 hover:bg-base-200"
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
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
