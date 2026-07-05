import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Education.css";

export default function Education() {
    return (
        <section id="education" className="education">
            <div className="container">
                <h3 className="section-title">Education</h3>
                <div className="timeline">
                    {portfolioData.education.map((e, i) => (
                        <div className={`timeline-item ${e.current ? 'current' : ''}`} key={i}>
                            <div className="dot" />
                            <div className="content">
                                <div className="period">{e.period}{e.current ? <span className="badge">Ongoing</span> : null}</div>
                                <div className="degree">{e.degree}</div>
                                <div className="inst">{e.institution}</div>
                                <div className="detail">{e.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
