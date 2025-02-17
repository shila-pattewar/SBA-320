# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1. README file we can use for React project that utilizes the useEffect hook to fetch data from the Fake Store API.
2. In this project I have shown how to use the useEffect hook in React to fetch data from the Fake Store API and display product information like title, price, description, and images.
3.  - Fetches a list of products from the Fake Store API using fetch.
    - Displays product details like title, price, description, and image.
    - Uses React's useEffect and useState hooks to manage data fetching and state.
4. Essential requirements
    - Node.js
    - npm
5. Getting Started
   - Clone the repository: https://github.com/shila-pattewar/SBA-320
   - npm create vite@latest
   - cd SBA-320 ( project name -> React -> javascript ) 
   - cd SBA-320 ( folder name)
   - npm install
   - npm i react-router-dom
   - npm run dev
   - click on http://localhost:5173
6. Code Explanation
   - useState hook: Declares a Products state variable to store the products fetched from the API.
   - useEffect hook: Fetches product data from the Fake Store API when the component is mounted (the empty dependency array [] ensures it runs only once).
   - Fetch API: Fetches the data from https://fakestoreapi.com/products and converts it into JSON format.
   - Product Display: Loops over the Products array and displays each product's title, price, description, and image.
7. Technologies Used
   - React
   - useEffect and useState hooks
   - Fetch API