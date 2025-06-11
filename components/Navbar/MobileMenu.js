"use client";

import Link from "next/link";
import { useEffect } from "react";
import { navItems } from "./navConfig";

export default function MobileMenu({ onClose }) {
    // Lock scroll when menu is open
    useEffect(() => {
        // Disable body scroll
        document.body.style.overflow = "hidden";

        // Re-enable scroll on cleanup/unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <aside
                className="w-72 bg-base-100 h-full p-4 shadow-md transition-all duration-300 fixed right-0 top-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end mb-4">
                    <button
                        className="btn btn-sm btn-circle focus:outline-none focus:ring-0 hover:bg-gray-200"
                        onClick={onClose}
                        aria-label="Close mobile menu"
                    >
                        ✕
                    </button>
                </div>
                <ul className="menu">
                    {navItems.map((item) =>
                        item.children ? (
                            <li key={item.label}>
                                <details className="focus:outline-none focus:ring-0">
                                    <summary className="cursor-pointer focus:outline-none focus:ring-0">
                                        {item.label}
                                    </summary>
                                    <ul>
                                        {item.children.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    href={child.href}
                                                    className="focus:outline-none focus:ring-0"
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="focus:outline-none focus:ring-0"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </aside>
        </div>
    );
}
