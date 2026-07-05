import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Internship.css";

export default function Internship() {
    const i = portfolioData.internships[0];
    return (
        <section id="internship" className="internship">
            <div className="container">
                <h3 className="section-title">Internship</h3>
                <div className="intern-card">
                    <div className="company">{i.company}</div>
                    <div className="role">{i.role}</div>
                </div>
            </div>
        </section>
    )
}
