"use client";

import { useState, useEffect } from "react";

const THEME_KEY = "theme";

export function useTheme() {
    const [theme, setThemeState] = useState(null); // null = not loaded yet

    useEffect(() => {
        // On mount, read the theme from localStorage or default to light
        try {
            const savedTheme = localStorage.getItem(THEME_KEY);
            if (savedTheme === "dark" || savedTheme === "light") {
                setThemeState(savedTheme);
                document.documentElement.setAttribute("data-theme", savedTheme);
            } else {
                setThemeState("light");
                document.documentElement.setAttribute("data-theme", "light");
            }
        } catch {
            setThemeState("light");
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const setTheme = (newTheme) => {
        setThemeState(newTheme);
        try {
            localStorage.setItem(THEME_KEY, newTheme);
        } catch { }
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return {
        theme,
        setTheme,
    };
}
