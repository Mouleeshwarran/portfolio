import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Achievements.css";
import { FiStar } from "react-icons/fi";

export default function Achievements() {
    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <h3 className="section-title">Achievements</h3>
                <ul className="ach-list">
                    {portfolioData.achievements.map((a, i) => (
                        <li key={i}><FiStar className="icon" /> <span>{a}</span></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
