import React, { useEffect, useState } from "react";
import portfolioData from "../../data/portfolioData";
import "./Hero.css";

const roles = ["Aspiring Software Engineer", "AI Enthusiast", "Problem Solver"];

export default function Hero() {
    const [idx, setIdx] = useState(0);
    const [sub, setSub] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let t;
        if (typing) {
            if (sub.length < roles[idx].length) {
                t = setTimeout(() => setSub(roles[idx].slice(0, sub.length + 1)), 90);
            } else {
                t = setTimeout(() => setTyping(false), 1200);
            }
        } else {
            t = setTimeout(() => {
                setTyping(true);
                setIdx((i) => (i + 1) % roles.length);
                setSub("");
            }, 600);
        }
        return () => clearTimeout(t);
    }, [sub, typing, idx]);

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-inner">
                    <h1 className="hero-title">{portfolioData.name}</h1>
                    <h2 className="hero-role">{sub}<span className="caret">|</span></h2>
                    <p className="hero-tagline">{portfolioData.summary}</p>

                    <div className="hero-ctas">
                        <a className="btn primary" href="#projects">View Projects</a>
                        <a className="btn secondary" href={`mailto:${portfolioData.email}`}>Contact Me</a>
                    </div>
                </div>
            </div>
            <div className="hero-glow" aria-hidden />
        </section>
    )
}
