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
   cd UI
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

2. **Include the Sidebar Component in the App:**

   In `src/App.js`, import and use the `Sidebar` component:

### Tailwind CSS Configuration

Ensure your `tailwind.config.js` file is set up correctly to watch for your class changes:

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
