//Images
import expenseTracker from "../assets/expense-tracker.png";
import qTify from "../assets/qtify.png";
import qkart from "../assets/qkart.png";
import qtripDynamic from "../assets/qtrip-dynamic.png";
import qtripStatic from "../assets/qtrip-static.png";
import xBoard from "../assets/xboard.png";
//qkart
import reqResQkart from "../assets/qkart/req-res-cycle.png";
import authQkart from "../assets/qkart/auth-page.png";
import checkoutQkart from "../assets/qkart/checkout.png";
import searchQkartProduct from "../assets/qkart/product-search.png";
import responsiveQkart from "../assets/qkart/responsive.png";
//xboard
import xboardAccordian from "../assets/xboard/xboard-accordian.png";
import xboardResponsive from "../assets/xboard/xboard-responsive.png";
import xboardCarousel from "../assets/xboard/xboard-carousel.png";
//qtrip dynamic
import qtripDynamicAdventureDetails from "../assets/qtrip-dynamic/qtrip-dynamic-adv-details1.png";
import qtripDynamicAdventuresDetails2 from "../assets/qtrip-dynamic/qtrip-dynamic-adv-details2.png";
import qtripDynamicAdventure from "../assets/qtrip-dynamic/qtrip-dynamic-adventure.png";
import qtripDynamicReservation from "../assets/qtrip-dynamic/qtrip-dynamic-reservation.png";

export const projects = [
    {
        id: "projectnov24",
        project_name: "XPense Tracker",
        date: "Nov 2024",
        skills: ["ReactJs", "Redux Toolkit", "JavaScript", "React Router", "Data Validation", "State Management"],
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
                },
                images: []
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
                },
                images: []
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
    {
        id: "projectjul24",
        project_name: "QKart Frontend",
        date: "Jul 2024",
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
        img: qkart,
        link: "https://qkart-frontend-eta-sable.vercel.app/",
        details: {
            topic: [
            "Overview",
            "Add Registration feature",
            "Implement registration-login flow and set up routing",
            "Display products and implement search feature",
            "Add shopping cart and implement checkout flow",
            "Deploy the QKart website"
            ],
            overview: {
                title: "QKart is an E-commerce application offering a variety of products for customers to choose from.",
                desc: {
                    title: "During the course of this project,",
                    points: [
                        "Implemented the core logic for authentication, shopping cart, and checkout",
                        "Improved UI by adding responsive design elements for a uniform experience across different devices",
                        "Utilized REST APIs to dynamically load and render data served by the backend server",
                        "Deployed website to Netlify/Vercel"
                    ]
                },
                images: []
            },
            details: [
                {
                    id: "Add Registration feature",
                    title: "Add Registration feature",
                    scope: [
                        "Implemented logic and used backend API to get the registration feature ready",
                        "Added validation for the register form user input values to display informative error messages"
                      ],
                    skills: [
                        "React.js",
                        "Event Handling",
                        "Forms",
                        "React Hooks",
                        "REST API",
                        "Error Handling"
                    ],
                    images: [],
                },
                {
                    id: "Implement registration-login flow and set up routing",
                    title: "Implement registration-login flow and set up routing",
                    scope: [
                        "Used React Router library to set up routes in the application and redirect customers to appropriate pages",
                        "Added UI and logic to get the Login page ready",
                        "Stored user information at client side using localStorage to avoid login on revisit"
                    ],
                    skills: [
                        "React Router",
                        "Material UI",
                        "localStorage",
                        "Controlled Components",
                        "Conditional Rendering"    
                    ],
                    images: [
                        {
                            img: reqResQkart,
                            title: "Request-response cycle for QKart User signup and login"
                        },
                        {
                            img: authQkart,
                            title: "User flow on website for signup and login"
                        }
                    ],
                },
                {
                    id: "Display products and implement search feature",
                    title: "Display products and implement search feature",
                    scope: [
                        "Utilized the useEffect() hook to fetch products data after DOM is rendered for faster page loading",
                        "Added search bar to display only on the Products page’s header and implemented search logic",
                        "Implemented debouncing for improved UX and reduced API calls on search"                    ],
                    skills: [
                        "Keyword Search",
                        "Debouncing",
                        "Material UI Grid"   
                    ],
                    images: [
                        {
                            img: searchQkartProduct,
                            title: "QKart Products page"
                        },
                    ],
                },
                {
                    id: "Add shopping cart and implement checkout flow",
                    title: "Add shopping cart and implement checkout flow",
                    scope: [
                        "Added Cart to Products page and made it responsive",
                        "Made authenticated POST API calls to implement Cart logic",
                        "Rendered Cart with differing designs in Products page and Checkout page using conditional rendering",
                        "Implemented UI and logic to add and select new addresses"                    ],
                    skills: [
                        "Responsive Design",
                        "Reusable Components"
                    ],
                    images: [
                        {
                            img: responsiveQkart,
                            title: "Products page UI with responsive Cart design (Left: Desktop, Right: Mobile)"
                        },
                        {
                            img: checkoutQkart,
                            title: "QKart Checkout page"
                        }
                    ],
                },
                {
                    id: "Deploy the QKart website",
                    title: "Deploy the QKart website",
                    scope:  [
                        "Deployed the QKart React app to Netlify",
                        "Configured Netlify to support visiting any subpages directly as React is a single-page application"
                      ],
                    skills: [
                       "Deployment",
                        "Netlify"
                    ],
                    images: [],
                },
            ]
        }
    },
    //4
    {
        id: "projectJun24",
        project_name: "XBoard",
        date: "Jun 2024",
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
        img: xBoard,
        link: "https://xboard-newsfeed.vercel.app/",
        details: {
            topic: ["Overview", "Build XBoard completely from scratch"],
            overview: {
                title: "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
                desc: {
                    title: "During the course of this project,",
                    points: [
                       "Built XBoard using HTML, CSS, Bootstrap, and JavaScript",
                        "Utilized the Figma file to understand the design requirements",
                        "Used Accordions and Image Carousel to improve UI",
                        "Fetched news content from Flipboard's RSS feed using REST API",
                        "Deployed the website to Netlify/Vercel"
                      ]
                },
                images: [
                    {
                        img: xboardAccordian,
                        title: "XBoard FIgma design (Left: Accordion expanded, Right: Accordion collapsed)"
                    },
                    {
                        img: xboardResponsive,
                        title: "XBoard Figma Design (Left: Desktop view, Right: Mobile view)"
                    },
                    {
                        img: xboardCarousel,
                        title: "XBoard Image Carousel"
                    }
                ]
            },
            details: [
                {
                    id: "Build XBoard completely from scratch",
                    title: "Build XBoard completely from scratch",
                    scope: [
                        "Created web page for XBoard to show news articles",
                        "Invoked API to fetch the necessary data from Flipboard’s RSS feed and integrated it into the web page",
                        "Implemented desktop and mobile views with reference to the Figma design",
                        "Improved UI by setting each section as an accordion and including image carousels",
                        "Deployed the dynamic webpage to Netlify"
                      ],
                    skills: [
                       "HTML",
                        "CSS",
                        "Bootstrap",
                        "JavaScript",
                      ]
                      ,
                    images: [],
                },
            ]
        }
    },
    //5
    {
        id: "projectnov242",
        project_name: "QTrip Dynamic",
        date: "Jun 2024",
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
        img: qtripDynamic,
        link: "https://qtrip-dynamic-eta-coral.vercel.app/",
        details: {
            topic: ["Overview", "Fetch data using REST API", "Implement the Adventures page", "Create the Adventure details page", "Deploy QTrip Dynamic website"],
            overview: {
                title: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
                desc: {
                    title: "During the course of this project,",
                    points: [
                        "Created web pages using HTML and CSS and made them dynamic using JavaScript",
                        "Improved UX with multi-select filters and image carousels",
                        "Implemented conditional rendering of page elements",
                        "Utilized localStorage to persist user preferences at the client-side",
                        "Facilitated reservation form submission using fetch API",
                        "Deployed the website using Netlify/Vercel for Frontend and Render for Backend"
                    ]
                },
                images: []
            },
            details: [
                {
                    id: "Fetch data using REST API",
                    title: "Fetch data using REST API and dynamically render landing page",
                    scope: [
                        "Retrieved cities data from the backend REST API endpoint using JavaScript’s Fetch API",
                        "Created HTML for the cities grid with Bootstrap classes to add responsiveness",
                        "Implemented logic to dynamically plug in city data to the Landing page’s DOM"
                      ],
                    skills: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Bootstrap",
                        "REST APIs",
                        "JSON",
                        "DOM Manipulation",
                        "cURL"
                    ],
                    images: [
                        {
                            img: qtripDynamic,
                            title: "QTrip Landing page"
                        }
                    ],
                },
                {
                    id: "Implement the Adventures page",
                    title: "Implement the adventures page with multi-select filters",
                    scope: [
                        "Fetched adventures data for the city by invoking the backend API from the page URL’s query parameter",
                        "Inserted HTML populated with API response data to the adventure page’s DOM",
                        "Implemented logic to add both multi-select and single-select filters",
                        "Added logic to persist the filters selected by the user in the browser’s localStorage"
                      ],
                    skills: [
                        "JavaScript",
                        "Bootstrap Flex",
                        "Bootstrap Spacing",
                        "ES6",
                        "localStorage"
                    ],
                    images: [
                        {
                            img: qtripDynamicAdventure,
                            title: "QTrip Adventures page"
                        }
                    ],
                },
                {
                    id: "Create the Adventure details page",
                    title: "Create the Adventure details page with reservation support and the Reservations page to show all reservations",
                    scope: [
                        "Added a sleek image carousel using Bootstrap",
                        "Implemented reservation logic by using Fetch API to send a POST request to the backend on form submission",
                        "Conditionally rendered the 'Sold out' panel and the reservations page based on the API response"
                      ],
                    skills: [
                        "JavaScript",
                        "Bootstrap",
                        "Conditional Rendering",
                        "Bootstrap Carousel"
                    ],
                    images: [
                        {
                            img: qtripDynamicAdventuresDetails2,
                            title: "QTrip Adventure Details"
                        },
                        {
                            img: qtripDynamicAdventureDetails,
                            title: "Image carousel on the Adventures page"
                        },
                        {
                            img: qtripDynamicReservation,
                            title: "QTrip Reservations page"
                        }
                    ],
                },
                {
                    id: "Deploy QTrip Dynamic website",
                    title: "Deploy QTrip Dynamic website",
                    scope: [
                        "Deployed the QTrip backend to Heroku",
                        "Configured the QTrip dynamic frontend to use the Heroku-deployed backend",
                        "Deployed the QTrip dynamic frontend to Netlify"
                        ],
                    skills: [
                        "Deployment",
                        "Heroku",
                        "Vercel"],
                    images: [],
                },
            ]
        }
    },
];
