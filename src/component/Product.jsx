import { useEffect } from "react";

function Product() {
  useEffect(() => {
    console.log("loading use effect");

    // calling fakeApi

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="products">
      <h1>This is Product area</h1>
    </div>
  );
}

export default Product;
