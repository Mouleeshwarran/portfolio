import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer-outer">
            <div className="container">
                <div className="left">© {new Date().getFullYear()} {portfolioData.name}</div>
                <div className="right">Made with ❤️ • React</div>
            </div>
        </footer>
    )
}
