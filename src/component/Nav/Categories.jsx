import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Categories.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("loading categories");

    // calling fakeApi
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCategories(json); // store the fetched categories
      })

      // to catch the error
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Combine both static categories and fetched categories
  const allCategories = [...categories];

  return (
    <div>
      <select>
        {allCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
