import expenseTracker from "../assets/expense-tracker.png";
import qkart from "../assets/qkart.png";
import qtify from "../assets/qtify.png";
import qtripDynamic from "../assets/qtrip-dynamic.png";
import qtripStatic from "../assets/qtrip-static.png";
import xBoard from "../assets/xboard.png";

export const projects = [
    {
        id: "projectnov24",
        project_name: "XPense Tracker",
        date: "Nov 2024",
        title: "A dynamic tracking application",
        skills: ["ReactJs", "Redux Toolkit", "JavaScript", "React Router", "Data Validation", "State Management"],
        description:"",
        img: expenseTracker,
        link: "https://xpense-tracker-mu.vercel.app/"
    },
    {
        id: "projectaug24",
        project_name: "QTify",
        date: "Aug 2024",
        title: "QTify is a song-browsing application built from scratch using ReactJS",
        skills: ["ReactJs", "Swiper Library usage", "Module-scoped CSS", "Flexbox", "CSS Variables", "Condition Rendering", "Component Reusability", "Material UI", "Customizing Third-Party Components", "Deployment"],
        description:"paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.",
        img: qtify,
        link: "https://qtify-steel-five.vercel.app/"
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
        img: qkart,
        link: "https://qkart-frontend-eta-sable.vercel.app/"
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
        img: xBoard,
        link: "https://xboard-newsfeed.vercel.app/"
    },
    {
        id: "project5",
        project_name: "QTrip Dynamic",
        date: "Jun 2024",
        title: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
        skills: [
            "HTML",
            "CSS",
            "ES6",
            "JavaScript",
            "Developer Tools",
            "Bootstrap",
            "HTTP",
            "REST",
            "Responsive Design",
            "VS Code Live Server",
            "DOM Manipulation",
            "cURL",
            "JSON",
            "Event Handling",
            "localStorage",
            "Conditional Rendering",
            "Bootstrap Carousel",
            "Netlify CLI",
            "Deployment",
            "Heroku",
            "Netlify"
        ],
        description:"During the course of this project, Created web pages using HTML and CSS and made them dynamic using JavaScript. Improved UX with multi-select filters, image carousels. Utilised localStorage to persist user preferences at client-side",
        img: qtripDynamic,
        link: "https://qtrip-dynamic-eta-coral.vercel.app/"
    },
    {
        id: "project6",
        project_name: "QTrip Static",
        date: "May 2024",
        title: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
        skills: [
            "HTML",
            "CSS",
            "Developer Tools",
            "Bootstrap",
            "CSS Flexbox",
            "Responsive Design",
            "VS Code Live Server",
            "Bootstrap Responsive Images",
            "Bootstrap Flex",
            "Bootstrap Spacing",
            "Bootstrap Display",
            "CSS Positioning",
            "Deployment",
            "Netlify",
            "Netlify CLI"
        ],
        description:"During the course of this project, Created 3 different web pages from Wireframe layout using HTML and CSS. Utilized Bootstrap extensively for responsive design. Deployed the website to Netlify/Vercel",
        img: qtripStatic,
        link: "https://qtrip-static-website.vercel.app/"
    },
    {
        id: "project7",
        project_name: "XCruise",
        date: "Apr 2024",
        title: "XCruise is a responsive static website built from scratch using HTML and CSS to provide a seamless and visually appealing experience for users looking to book cruise vacations.",
        skills: ["HTML", "CSS", "Response Design"],
        description:"The project involved developing a responsive and interactive website that showcases various cruise destinations and provides essential information about XCruise offerings.",
        img: "",
        link: "https://xcruise-gamma.vercel.app/"
    },
]
