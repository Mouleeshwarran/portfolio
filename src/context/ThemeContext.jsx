import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored) return stored;
            const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
            return prefersLight ? "light" : "dark";
        } catch (e) {
            return "dark";
        }
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme === "light" ? "light" : "dark");
        try {
            localStorage.setItem("theme", theme);
        } catch (e) { }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
