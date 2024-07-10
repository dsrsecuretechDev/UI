# React Sidebar Project

This project is a simple web page with a sidebar created using React.js and Tailwind CSS. We also use the `react-icons` library for icons.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-sidebar-project
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

### Running the Project

To run the project, you need to start Tailwind CSS and the React development server.

1. **Start Tailwind CSS:**

   This command watches your files and compiles the Tailwind CSS:

   ```bash
   npm run tailwind
   ```

2. **Start the React development server:**

   This command starts the React development server and opens the project in your default browser:

   ```bash
   npm run dev
   ```

### File Structure

Here's an overview of the project's file structure:

```
react-sidebar-project/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── ...
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── tailwind.config.js
├── package.json
└── README.md
```

### Usage

To create the sidebar, follow these steps:

1. **Create the Sidebar Component:**

   In `src/components/Sidebar.jsx`, create a functional component for the sidebar:

   ```jsx
   import React, { useState } from "react";
   import profile from "../assets/profile.jpg";
   import {
     FaArrowCircleLeft,
     FaHome,
     FaSearch,
     FaUser,
     FaCog,
     FaChartBar,
     FaEnvelope,
   } from "react-icons/fa";

   function Sidebar() {
     const [open, setOpen] = useState(true);

     return (
       <div className="flex">
         <div
           className={`${
             open ? "w-72" : "w-20"
           } bg-blue-800 h-screen p-5 pt-8 relative duration-300`}
         >
           <button
             className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full ${!open && "rotate-180"}`}
             onClick={() => setOpen(!open)}
           >
             <FaArrowCircleLeft color="white" size={18} />
           </button>
           <div className="flex gap-x-4 items-center justify-start">
             <img
               src={profile}
               onClick={() => setOpen(!open)}
               className={`cursor-pointer duration-500 h-8 w-8 rounded-full ${
                 open && "rotate-[360deg] h-12 w-12"
               }`}
             />
             <h1
               className={`text-white origin-left font-medium text-xl duration-200 ${
                 !open && "scale-0"
               }`}
             >
               SideBar Task
             </h1>
           </div>
           <ul className="flex pt-10 flex-col gap-7">
             <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
               <FaHome size={20} />
               <h1
                 className={`${
                   !open && "hidden"
                 }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
               >
                 Dashboard
               </h1>
             </li>

             <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
               <FaUser size={20} />
               <h1
                 className={`${
                   !open && "hidden"
                 }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
               >
                 Profile
               </h1>
             </li>
             <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-black text-gray-300 text-sm items-center gap-x-4">
               <FaCog size={20} />
               <h1
                 className={`${
                   !open && "hidden"
                 }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
               >
                 Settings
               </h1>
             </li>
             <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-slate-900 text-gray-300 text-sm items-center gap-x-4">
               <FaChartBar size={20} />
               <h1
                 className={`${
                   !open && "hidden"
                 } o text-white origin-left font-medium text-xl duration-200 hover:text-black`}
               >
                 Analytics
               </h1>
             </li>
             <li className="flex rounded-md p-2 cursor-pointer hover:bg-slate-200 hover:text-slate-950 text-gr text-gray-300 text-sm items-center gap-x-4">
               <FaEnvelope size={20} />
               <h1
                 className={`${
                   !open && "hidden"
                 }  text-white origin-left font-medium text-xl duration-200 hover:text-black`}
               >
                 Messages
               </h1>
             </li>
           </ul>
         </div>
         <div className="h-screen flex-1 p-7 bg-slate-800">
           <h1 className="text-2xl font-semibold">Home Page</h1>
         </div>
       </div>
     );
   }

   export default Sidebar;
   ```

2. **Include the Sidebar Component in the App:**

   In `src/App.js`, import and use the `Sidebar` component:

   ```jsx
   import React from 'react';
   import Sidebar from './components/Sidebar';

   const App = () => {
     return (
       <div className="flex">
         <Sidebar />
         <div className="flex-1 p-10 text-2xl font-bold">
           Main Content Area
         </div>
       </div>
     );
   };

   export default App;
   ```

### Tailwind CSS Configuration

Ensure your `tailwind.config.js` file is set up correctly to watch for your class changes:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Scripts

In your `package.json`, ensure you have the following scripts set up:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "tailwind": "tailwindcss -i ./src/index.css -o ./src/output.css --watch",
  "dev": "vite"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

This `README.md` provides an overview of your project, setup instructions, and usage guidelines. Customize it further based on your project's specific needs.
