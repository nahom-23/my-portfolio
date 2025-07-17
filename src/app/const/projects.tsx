/**
 * @type {import("../../types/Project").Project[]}
 */
import sample from "../assets/image.png"

const projects = [
    {
        id: "ExtrimExam",
        links: {
            live: "deplos.github.io",
            github: "https://github.com/nahom-23/ExtremExam"
        },
        techs: ["React", "Express", "node"],
        hasImage: true,
        size: "big",
        description: "A comprehensive exam management system with real-time features and advanced analytics."
    },
    {
        id: "Online Store Management",
        links: {
            live: "pixelbattle.fun",
            github: "https://github.com/nahom-23/online_store_management",
        },
        techs: ["Odoo", "xml", "Python"],
        hasImage: true,
        size: "big",
        description: "Full-featured e-commerce platform with inventory management and customer tracking."
    },
    {
        id: "Alx Airbnb Clone",
        links: {
            github: "https://github.com/nahom-23/AirBnB_clone_v4",
        },
        techs: ["python", "django", "MySQL"],
        hasImage: true,
        size: "big",
        description: "A complete Airbnb clone with booking system, user authentication, and property management."
    },
    {
        id: "ChertNodes",
        links: {

        },
        techs: ["python", "flask", "scss"],
        hasImage: true,
        size: "medium",
        description: "A modern web application for node management and monitoring."
    },
    {
        id: "ProtectX",
        techs: ["react", "node", "discordJs"],
        links: {

        },
        hasImage: true,
        size: "medium",
        description: "Discord bot with advanced security features and moderation tools."
    },
    {
        id: "KhAnswers",
        techs: ["express", "node", "ejs"],
        links: {
            live: "khanswers.vercel.app",
            github: "/kahoot-answers",
        },
        hasImage: true,
        image: sample,
        size: "small",
        description: "Quick answer lookup tool for educational quizzes and games."
    },
    {
        id: "KotikBot",
        techs: ["html", "css", "js"],
        links: {
            live: "kotikbot.github.io",
            github: "kotikbot/kotikbot.github.io",
        },
        hasImage: true,
        size: "small",
        description: "Simple and efficient chatbot interface with modern UI design."
    },
    {
        id: "Task Manager",
        techs: ["React", "Node.js", "MongoDB"],
        links: {
            live: "taskmanager.app",
            github: "github.com/task-manager",
        },
        hasImage: true,
        size: "medium",
        description: "Collaborative task management application with real-time updates."
    },
    {
        id: "Weather Dashboard",
        techs: ["Vue.js", "API", "Chart.js"],
        links: {
            live: "weather-dashboard.netlify.app",
            github: "github.com/weather-dashboard",
        },
        hasImage: true,
        size: "small",
        description: "Beautiful weather dashboard with interactive charts and forecasts."
    },
    {
        id: "E-Commerce Platform",
        techs: ["Next.js", "TypeScript", "Stripe"],
        links: {
            live: "ecommerce-platform.vercel.app",
            github: "github.com/ecommerce-platform",
        },
        hasImage: true,
        size: "big",
        description: "Modern e-commerce platform with payment integration and admin dashboard."
    },
    {
        id: "Social Media Dashboard",
        techs: ["React", "Firebase", "Chart.js"],
        links: {
            live: "social-dashboard.netlify.app",
            github: "github.com/social-dashboard",
        },
        hasImage: true,
        size: "medium",
        description: "Analytics dashboard for social media management and insights."
    },
    {
        id: "Recipe Finder",
        techs: ["Vue.js", "API", "CSS3"],
        links: {
            live: "recipe-finder.vercel.app",
            github: "github.com/recipe-finder",
        },
        hasImage: true,
        size: "small",
        description: "Recipe discovery app with search, filtering, and favorite features."
    },
    {
        id: "Portfolio Website",
        techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
        links: {
            live: "portfolio-nahom.vercel.app",
            github: "github.com/portfolio-website",
        },
        hasImage: true,
        size: "medium",
        description: "Personal portfolio website with modern animations and responsive design."
    },
    {
        id: "Chat Application",
        techs: ["Socket.io", "Express", "React"],
        links: {
            live: "chat-app.herokuapp.com",
            github: "github.com/chat-application",
        },
        hasImage: true,
        size: "big",
        description: "Real-time chat application with user authentication and file sharing."
    }
];

export default projects;