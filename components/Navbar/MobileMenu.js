"use client";

import { useEffect } from "react";
import Link from "next/link";
import { navItems } from "./navConfig";

export default function MobileMenu({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <aside
                className="
          w-80 h-screen overflow-y-auto bg-base-100 p-4 shadow-lg
          fixed left-0 top-0 z-50
          transform translate-x-0 transition-transform duration-300 ease-in-out
          animate-slide-in
        "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end mb-4">
                    <button
                        className="btn btn-sm btn-circle focus:outline-none hover:bg-base-300"
                        onClick={onClose}
                        aria-label="Close mobile menu"
                    >
                        ✕
                    </button>
                </div>

                <ul className="menu space-y-2">
                    {navItems.map((item, i) =>
                        item.children ? (
                            <li key={`${item.label}-${i}`}>
                                <details className="focus:outline-none">
                                    <summary className="cursor-pointer font-medium whitespace-nowrap">
                                        {item.label}
                                    </summary>
                                    <ul className="pl-4 pt-1 space-y-1 whitespace-nowrap">
                                        {item.children.map((group, j) => (
                                            <li key={`${group.groupLabel}-${j}`}>
                                                <p className="text-sm font-semibold text-base-content/80 whitespace-nowrap">
                                                    {group.groupLabel}
                                                </p>
                                                <ul className="pl-2 pt-1 space-y-1 whitespace-nowrap">
                                                    {group.items.map((child, k) => (
                                                        <li key={`${child.label}-${k}`}>
                                                            {child.href ? (
                                                                <Link
                                                                    href={child.href}
                                                                    className="text-sm hover:text-primary whitespace-nowrap"
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ) : (
                                                                <span className="text-sm text-base-content/60 whitespace-nowrap">
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
                                        className="text-sm font-medium hover:text-primary whitespace-nowrap"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-sm text-base-content/60 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        )
                    )}
                </ul>
            </aside>
        </div>
    );
}
