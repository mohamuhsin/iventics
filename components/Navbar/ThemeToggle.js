"use client";

import { useTheme } from "@/app/store/themeStore";
import { useEffect } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    // Auto-set theme on mount based on system preference
    useEffect(() => {
        if (!theme) {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, [theme, setTheme]);

    if (!theme) return null;

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <label
            className="flex cursor-pointer gap-2 items-center"
            aria-label="Toggle theme"
        >
            {/* Light Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            {/* Toggle Input */}
            <input
                type="checkbox"
                className="toggle theme-controller"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />

            {/* Dark Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </label>
    );
};

export default ThemeToggle;
