// portfolioData.js
// All visible site content lives here. Edit this file to update the site.

const portfolioData = {
    name: "Mouleeshwarran",
    title: "Aspiring Software Engineer",
    location: "Chennai, Tamil Nadu",
    phone: "7598390687",
    email: "mouleeshwarran@gmail.com",
    linkedin: "https://www.linkedin.com/in/mouleeshwarran-amaresh-guptha-06b40b2a6",

    summary:
        "Aspiring Software Engineer with a strong foundation in Java, C++, SQL, Data Structures & Algorithms, and AI-based application development. Passionate about building efficient software solutions, solving real-world problems, and continuously learning new technologies.",

    skills: {
        "Programming Languages": ["C++", "Python", "Java", "C"],
        "Core Computer Science": ["Operating Systems (OS)", "Computer Architecture", "Database Management Systems (DBMS)"],
        "Tools & Technologies": ["VS Code", "Microsoft Visual Studio"]
    },

    education: [
        {
            period: "From 2025",
            degree: "Bachelor of Technology — Information Technology",
            institution: "Madras Institute of Technology, Anna University, Chennai",
            detail: "CGPA: 6.15",
            current: true
        },
        {
            period: "2022 – 2025",
            degree: "Diploma — Computer Engineering",
            institution: "Muthayammal Polytechnic College, Rasipuram, Namakkal",
            detail: "Graduated 2025 · Percentage: 97.1%"
        },
        {
            period: "2012 – 2022",
            degree: "Secondary School Certificate (CBSE)",
            institution: "Sri Seshaas International Public School, Salem",
            detail: "Graduated 2022 · Percentage: 79%"
        }
    ],

    projects: [
        {
            title: "Karpadhu Tamil — AI-Powered Tamil Accent & Pronunciation Validator",
            date: "May 2026",
            description:
                "Built an AI-based Tamil pronunciation validator with real-time speech analysis and personalized feedback to help users improve their speaking accuracy.",
            tags: ["AI/ML", "Speech Analysis", "Python"]
        },
        {
            title: "Sports Day Management System",
            date: "December 2025",
            description:
                "Developed a CLI-based application in C that automated sports day event management, eliminating manual paperwork and improving operational efficiency.",
            tags: ["C", "CLI", "Automation"]
        }
    ],

    achievements: [
        "Won State Level Symposium (Paper Presentation) at Sakthi Polytechnic College — 05.03.2025",
        "Selected for the SIH Internal Hackathon conducted by Madras Institute of Technology"
    ],

    internships: [
        {
            company: "MEE Technologies",
            role: "Internship — Python Fundamentals"
        }
    ]
};

export default portfolioData;
