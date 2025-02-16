//https://fakestoreapi.com/docs

import { useState } from "react";
import { useEffect } from "react";

function Product() {
  // declare a state vairable ( like products = [])
  let [Product, setProduct] = useState([]);

  useEffect(() => {
    console.log("loading use effect");

    // calling fakeApi
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // get the json data
        console.log(json);
        setProduct(json); // calling json data and storing in setproduct function
      })

      // to catch the error
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {Product.map((Product, index) => {
        return <div key={index}>{Product.title} </div>;
      })}
    </div>
  );
}

export default Product;
