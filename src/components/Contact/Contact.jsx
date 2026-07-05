import React from "react";
import portfolioData from "../../data/portfolioData";
import "./Contact.css";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h3 className="section-title">Contact</h3>
                <div className="contact-grid">
                    <a className="chip" href={`mailto:${portfolioData.email}`}><FiMail /> <span>{portfolioData.email}</span></a>
                    <a className="chip" href={`tel:${portfolioData.phone}`}><FiPhone /> <span>{portfolioData.phone}</span></a>
                    <a className="chip" href={portfolioData.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> <span>LinkedIn</span></a>
                </div>

                <footer className="site-footer">
                    <div>Built with React • © {new Date().getFullYear()} {portfolioData.name}</div>
                </footer>
            </div>

            <a href="#hero" className="back-to-top" aria-label="Back to top">↑</a>
        </section>
    )
}
