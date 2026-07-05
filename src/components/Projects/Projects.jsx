import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Projects.css";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h3 className="section-title">Projects</h3>
                <div className="projects-grid">
                    {portfolioData.projects.map((p, i) => (
                        <div className="project-card" key={i}>
                            <div className="meta"><div className="date">{p.date}</div></div>
                            <h4 className="title">{p.title}</h4>
                            <p className="desc">{p.description}</p>
                            <div className="tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
