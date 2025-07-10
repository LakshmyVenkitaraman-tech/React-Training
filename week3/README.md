            React Image Carousel (Week 3 – Task 1)

This task demonstrates a  Image Carousel component built using React, Tailwind CSS. The carousel supports image transitions using navigation arrows .Also used React Icons for navigation arrows

Getting Started:
 Navigate to the carousel task folder first:

cd week3/task1/src

1.Install Dependencies

npm install

Includes:

-react

-vite

-tailwindcss

-postcss

-autoprefixer

-react-icons

2.Run the Development Server

npm run dev
Open http://localhost:5173 in your browser.

Tailwind Setup
Tailwind CSS is configured via:

tailwind.config.js

index.css includes:

@tailwind base;
@tailwind components;
@tailwind utilities;

 
           React Profile Card Component (Week 3 – Assignment 1)

This assignment showcases a r profile card component in React using Tailwind CSS Modular `ProfileCard` and `ProfileDetails` components

Getting Started:
1.Install Dependencies

npm install

2.Run the App

npm run dev 

3.Tailwind Setup
Tailwind CSS is configured via:

tailwind.config.js

index.css includes:

@tailwind base;
@tailwind components;
@tailwind utilities;

Directory structure:
week3/
├── assignment1/                        # Profile Card Assignment
│   ├── App.jsx                         # Root component rendering ProfileCard
│   ├── index.css                       # Tailwind base styles
│   ├── main.jsx                        # React app entry point
│   ├── ProfileCard.jsx                 # Reusable profile card component
│   ├── ProfileDetails.jsx              # Sub-component for profile details
│   ├── img4.webp                       # Profile image
│   └── README.md                       # Assignment setup and documentation
│
├── task1/                              # Task: React Image Carousel
│   ├── App.jsx                         # Renders the Carousel component
│   ├── main.jsx                        # React app entry point
│   ├── index.css                       # Tailwind base styles
│   ├── Carousel.jsx                    # Custom carousel logic with navigation
│   ├── images/                         # Folder containing carousel images
│   │   ├── img1.jpg
│   │   ├── img2.webp
│   │   ├── img3.jpg
│   │   ├── img4.webp
│   │   ├── img5.png
│   │   └── img6.png
│   
│
├── tailwind.config.js                  # Tailwind config shared across both
└── vite.config.js                      # Vite config for build/dev server






