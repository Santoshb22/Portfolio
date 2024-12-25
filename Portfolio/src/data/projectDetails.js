//Images
import expenseTracker from "../assets/expense-tracker.png";
import qTify from "../assets/qtify.png";
export const projects = [
    {
        id: "projectnov24",
        project_name: "XPense Tracker",
        date: "Nov 2024",
        skills: ["ReactJs", "Redux Toolkit", "JavaScript", "React Router", "Data Validation", "State Management"],
        description: "",
        img: expenseTracker,
        link: "https://xpense-tracker-mu.vercel.app/",
        details: {
            topic: ["Overview", "Build XPenseTracker", "Features"],
            overview: {
                title: "XpenseTracker is an expense management app that helps users track their monthly budget and spending by category.",
                desc: {
                    title: "During the course of this project, the developer",
                    points: [
                        "Built XpenseTracker from scratch using ReactJS and Redux Toolkit for state management",
                        "Created a user-friendly interface with comprehensive form validations and budget calculations.",
                        "Ensured data persistence and seamless user experience across multiple pages."
                    ]
                }
            },
            details: [
                {
                    id: "Build XPenseTracker",
                    title: "Build XPenseTracker",
                    scope: [
                        "Global State with Redux Toolkit: Used slices like userSlice, expenseSlice, and transactionSlice to manage user data, budgets, and transactions.",
                        "User & Budget Form: Built a form with strong validation to ensure accurate budgets and prevent invalid inputs, showing real-time feedback with react-hot-toast.",
                        "Transactions Management: Added a dynamic form for expenses, with budget checks to warn users if they exceed total or category budgets.",
                        "Expense Insights: Created a table to display category-wise expenses, with real-time budget updates and visual indicators for overspending.",
                        "Smooth Navigation: Used React Router for easy navigation, with data saved across sessions and options to update or reset budgets.",
                    ],
                    skills: [],
                    images: [],
                },
                {
                    id: "features",
                    title: "Features",
                    scope: [
                        "Add, edit, and delete expense entries.",
                        "Real-time filtering and searching for expenses.",
                        "Monthly expenditure summary and analytics."
                    ],
                    skills: ["JavaScript", "ReactJs", "CSS"],
                    images: [],
                },
            ]
        }
    },
//2
    {
        id: "projectaug24",
        project_name: "QTIFY",
        date: "Aug 2024",
        skills: ["ReactJs", "Swiper Library usage", "Module-scoped CSS", "Flexbox", "CSS Variables", "Condition Rendering", "Component Reusability", "Material UI", "Customizing Third-Party Components", "Deployment"],
        description: "",
        img: qTify,
        link: "https://xpense-tracker-mu.vercel.app/",
        details: {
            topic: ["Overview", "Build QTify"],
            overview: {
                title: "QTify is a ReactJS-based song-browsing app with Material UI and Swiper, offering a smooth and stylish interface to explore songs by albums and genres.",
                desc: {
                    title: "While building this Micro-Experience, the developer:",
                    points: [
                        "Conducted a thorough analysis of the provided Figma design to identify and document required front-end components.",
                        "Created modular UI components like Cards, Carousels, and Buttons, optimized for reusability across the application.",
                        "Implemented an intuitive genre-based song filtering system using a customized MaterialUI tab component.",
                        "Utilized REST APIs to fetch data from the backend server.",
                        "Deployed the website to Vercel."
                      ]
                }
            },
            details: [
                {
                    id: "Build QTify",
                    title: "Build QTify",
                    scope: [
                        "Analyzed the Figma design to identify and document necessary front-end components.",
                        "Designed a reusable button component with unique styling, adaptable for various functionalities across the application.",
                        "Implemented a carousel feature using the Swiper library with custom navigation.",
                        "Developed a dynamic Section component to display content in carousel or grid layouts using conditional rendering.",
                        "Created a Filters component with Material-UI Tabs, integrated Axios for fetching genre options and song data, and handled errors effectively.",
                        "Added conditional rendering to display filter options in the Section component exclusively for the Songs section.",
                        "Deployed the QTify React app to Vercel by importing the project repository from GitHub."
                      ],
                    skills: [
                        "ReactJS",
                        "Module-scoped CSS",
                        "Flexbox",
                        "CSS Variables",
                        "Conditional Rendering",
                        "Component Reusability",
                        "Swiper.js",
                        "Material UI",
                        "Customizing Third-Party Components",
                        "Deployment"
                      ]
                      ,
                    images: [],
                },
            ]
        }
    },
    //3
];
