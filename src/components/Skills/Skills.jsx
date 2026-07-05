import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h3 className="section-title">Technical Skills</h3>
                <div className="skills-grid">
                    {Object.entries(portfolioData.skills).map(([cat, items]) => (
                        <div className="skill-card" key={cat}>
                            <div className="skill-cat">{cat}</div>
                            <div className="skill-list">
                                {items.map((s) => <span className="skill-pill" key={s}>{s}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
