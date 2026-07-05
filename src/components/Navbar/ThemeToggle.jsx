import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import "./Navbar.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
      <span className={`theme-icon ${theme === "light" ? "light" : "dark"}`}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </span>
    </button>
  );
}
