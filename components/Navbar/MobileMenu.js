"use client";

import Link from "next/link";
import { useEffect } from "react";
import { navItems } from "./navConfig";

export default function MobileMenu({ onClose }) {
    // Lock scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
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
                    {navItems.map((item, i) =>
                        item.children ? (
                            <li key={`${item.label}-${i}`}>
                                <details className="focus:outline-none focus:ring-0">
                                    <summary className="cursor-pointer focus:outline-none focus:ring-0">
                                        {item.label}
                                    </summary>
                                    <ul className="pl-4">
                                        {item.children.map((group, j) => (
                                            <li key={`${group.groupLabel}-${j}`} className="mb-2">
                                                <p className="font-semibold">{group.groupLabel}</p>
                                                <ul className="pl-4">
                                                    {group.items.map((child, k) => (
                                                        <li key={`${child.label}-${k}`}>
                                                            {child.href ? (
                                                                <Link
                                                                    href={child.href}
                                                                    className="focus:outline-none focus:ring-0"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ) : (
                                                                <span className="cursor-default">
                                                                    {child.label}
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        ) : (
                            <li key={`${item.label}-${i}`}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="focus:outline-none focus:ring-0"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="cursor-default">{item.label}</span>
                                )}
                            </li>
                        )
                    )}
                </ul>
            </aside>
        </div>
    );
}
