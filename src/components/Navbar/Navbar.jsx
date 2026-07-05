import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import portfolioData from "../../data/portfolioData";

const links = ["About", "Skills", "Education", "Projects", "Achievements", "Contact"];

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="brand" aria-label="homepage">
                    <a href="#hero" className="logo-chip">{portfolioData.name.split(" ")[0].slice(0, 2).toUpperCase()}</a>
                    <div className="name">{portfolioData.name}</div>
                </div>

                <div className={`nav-backdrop ${open ? "active" : ""}`} onClick={() => setOpen(false)} />
                <div className={`nav-links ${open ? "open" : ""}`}>
                    {links.map((l) => (
                        <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
                    ))}
                </div>

                <div className="actions">
                    <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        <span className={`theme-icon ${theme === "light" ? "light" : "dark"}`}>
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                    </button>

                    <button className="hamburger" onClick={() => setOpen((s) => !s)} aria-label="Menu">
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
