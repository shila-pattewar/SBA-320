//https://fakestoreapi.com/docs

import { useState } from "react";
import { useEffect } from "react";

function Products() {
  // declare a state vairable ( like Products = [])
  let [Products, setProducts] = useState([]);

  useEffect(() => {
    console.log("loading use effect");

    // calling fakeApi
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // get the json data
        console.log(json);
        setProducts(json); // calling json data and storing in setproduct function
      })

      // to catch the error
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Products">
      {Products.map((product, index) => {
        return (
          <div className="product" key={index}>
            <img className="product-img" src={product.image} alt="product" />
            <h2>{product.title}</h2>
            <h3>Price {product.price}</h3>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
