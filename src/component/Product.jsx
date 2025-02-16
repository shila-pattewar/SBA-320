import { useEffect } from "react";

let [products, setProducts] = useState([]);

function Product() {
  useEffect(() => {
    console.log("loading use effect");
  });

  return (
    <>
      <h1>This is Product Page</h1>
    </>
  );
}

export default Product;
