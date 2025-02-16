import { useEffect } from "react";

function Product() {
  useEffect(() => {
    console.log("loading use effect");
  });

  return (
    <div className="products">
      <h1>This is Product area</h1>
    </div>
  );
}

export default Product;
