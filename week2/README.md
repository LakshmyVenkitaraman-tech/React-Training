Week2-React Training Tasks and Assignment
Common Dependencies:
The following npm packages are used across tasks:
- tailwindcss
- postcss
- autoprefixer

Tailwind is configured via tailwind.config.js and initialized using:

@tailwind base;
@tailwind components;
@tailwind utilities;

Setup:
cd foldername
npm install
npm run dev   # or use a live server
Task 1:To Create a layout with three columns where users can drag and drop items between columns.

- Built using HTML,Tailwind CSS(Cdn), and JavaScript
- Basic drag-and-drop functionality implemented manually

Task2:Build a simple to-do list application where data persists using the browser's `localStorage`.

- Add, delete, and mark tasks as done
- Tasks persist after page reloads
- Tailwind CSS used for styling


Task 3:Render a folder-file tree structure using a JSON object and recursive JavaScript.

- JSON used to define nested data
- Recursive logic used to display hierarchy

Assignment :Build a simple Kanban board where tasks can be moved between To Do, In Progress, and Done columns.

- Users can add, move , and delete tasks
-UI updates in real-time
-Tailwind CSS used for layout and styling

Directory structure:

week2/
├── assignment/                     # Kanban board assignment project
│   ├── dist/                       # Compiled Tailwind output 
│   ├── node_modules/               # Node dependencies
│   ├── index.html                  # Main HTML file
│   ├── input.css                   # Tailwind CSS input file
│   ├── output.css                  # Compiled CSS output from Tailwind
│   ├── package-lock.json           # Exact versions of installed packages
│   ├── package.json                # npm config (tailwind, postcss, etc.)
│   ├── script.js                   # JS for adding/moving/deleting tasks
│   ├── style.css                   # Custom styling or compiled CSS
│   └── tailwind.config.js          # Tailwind CSS configuration
│
├── node_modules/                   # Global node_modules from root
├── task1/                          
│   ├── drag.js                     # JS for optional drag-and-drop handling
│   ├── dragdrop.html               # HTML file related to drag-and-drop testing
│
├── task2/                          # Task 2: To-do list with localStorage
│   ├── package.json                # npm configuration
│   ├── postcss.config.js           # PostCSS setup for Tailwind
│   ├── styles.css                  # Tailwind and custom CSS
│   ├── tailwind.config.js          # Tailwind CSS config
│   ├── todo.html                   # Main HTML for the to-do app
│   └── todo.js                     # JS logic to manage todos
│
├── task3/                          # Task 3: Recursive file tree viewer
│   ├── dist/                       # Output directory 
│   ├── index.html                  # HTML to render the file structure
│   ├── script.js                   # Recursive JS for nested rendering
│   ├── style.css                   # Tailwind / custom styles
│   ├── tailwind.config.js          # Tailwind config
│   ├── package-lock.json           # Lockfile
│   └── package.json                # Dependencies and scripts
│
