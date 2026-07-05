import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Internship from "./components/Internship/Internship";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles/theme.css";
import "./styles/globals.css";

function App() {
    React.useEffect(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach((s) => s.classList.add('reveal'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.12 }
        );

        sections.forEach((s) => observer.observe(s));

        return () => observer.disconnect();
    }, []);

    return (
        <ThemeProvider>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Achievements />
                <Internship />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
