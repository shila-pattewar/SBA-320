import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Nav from "./component/Nav/Categories";
import "./App.css";

function App() {
  return (
    <div>
      <h1>SBA 320</h1>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
