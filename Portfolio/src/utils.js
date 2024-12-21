import eventTracker from "./assets/expense-tracker.jpeg";
import qtifyImg from "./assets/qtify-image.jpeg";
import qkartImg from "./assets/qkart-img.jpeg";
import xboardImg from "./assets/xboard-img.jpeg";

export const data = {
    intro: "Hi I'm Santosh Bhardwaj, a passionate tech enthusiast actively expanding my expertise in MERN Full Stack development",
    bio: "BSC.IT graduate, I'm leveling up to full-stack development with the Crio.Do Fellowship, gaining practical experience in building real-world applications and enhancing my problem-solving skills across frontend and backend technologies. Passionate about building efficient, user-focused applications and eager to contribute to impactful tech solutions.",
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/santosh22/",
        github: "https://github.com/Santoshb22",
        resume: "https://docs.google.com/document/d/1jksEZb48wAYgpsF0selwq7N5wZ8b95egM52p_ZYcNRs/edit?usp=sharing",
    },
    skills: {
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Material UI",
          "Sass",
          "Bootstrap",
          "Swiper.js"
        ],
        tools: [
          "Redux Toolkit",
          "Git",
          "Figma",
          "Visual Studio",
          "Vercel"
        ],
        concepts: [
          "HTTP",
          " REST"
        ]
    },
    
}

export const projects = [
    {
        id: "project1",
        project_name: "XPense Tracker",
        date: "Nov 2024",
        title: "A dynamic tracking application",
        skills: ["ReactJs", "Redux Toolkit", "JavaScript", "React Router", "Data Validation", "State Management"],
        description:"",
        img: eventTracker,
    },
    {
        id: "project2",
        project_name: "QTify",
        date: "Aug 2024",
        title: "QTify is a song-browsing application built from scratch using ReactJS",
        skills: ["ReactJs", "Swiper Library usage", "Module-scoped CSS", "Flexbox", "CSS Variables", "Condition Rendering", "Component Reusability", "Material UI", "Customizing Third-Party Components", "Deployment"],
        description:"paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
        img: qtifyImg,
    },
    {
        id: "project3",
        project_name: "QKart Frontend",
        date: "Jul 2024",
        title: "QKart is an e-commerce application offering a variety of products for customers to choose from.",
        skills: [
            "React Hooks",
            "Forms",
            "Controlled Components",
            "REST",
            "JSON",
            "Error Handling",
            "Developer Tools",
            "ES6",
            "Conditional Rendering",
            "React State & Props",
            "React",
            "Event Handling",
            "Lifecycle Methods",
            "React Router",
            "Material UI",
            "Responsive Design",
            "localStorage",
            "Material UI Grid",
            "Keyword Search",
            "Debouncing",
            "Deployment",
            "Netlify"
          ],
        description:"During the course of this project, Implemented the core logic for authentication, shopping cart and checkout. Improved UI by adding responsive design elements for uniform experience across different devices. Utilized REST APIs to dynamically load and render data served by the backend server",
        img: qkartImg,
    },
    {
        id: "project4",
        project_name: "XBoard",
        date: "Jun 2024",
        title: "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
        skills: [  
            "HTML",
            "CSS",
            "Figma",
            "Bootstrap Accordion",
            "Bootstrap",
            "ES6",
            "JavaScript",
            "DOM Manipulation",
            "Developer Tools",
            "REST",
            "JSON",
            "Netlify",
            "Netlify CLI",
            "Deployment",
            "VS Code Live Server",
            "Bootstrap Carousel"
        ],
        description:"During the course of this project, built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch. Used Accordions and Image Carousel to improve UI. Fetched news content from flipboard's RSS feed using REST API",
        img: xboardImg,
    },
]
