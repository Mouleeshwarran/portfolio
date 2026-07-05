import React from "react";
import portfolioData from "../../data/portfolioData";
import "./About.css";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h3 className="section-title">About</h3>
                <p className="summary">{portfolioData.summary}</p>

                <div className="contact-chips">
                    <div className="chip"><FiMapPin /> <span>{portfolioData.location}</span></div>
                    <a className="chip" href={`mailto:${portfolioData.email}`}><FiMail /> <span>{portfolioData.email}</span></a>
                    <a className="chip" href={`tel:${portfolioData.phone}`}><FiPhone /> <span>{portfolioData.phone}</span></a>
                </div>
            </div>
        </section>
    )
}
