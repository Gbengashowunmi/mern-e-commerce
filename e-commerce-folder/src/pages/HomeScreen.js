import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../Data";
import axios from "axios";
import Ratings from "./Ratings";


export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/products-API");
      setProducts(result.data)
      // console.log(result);
    }; 
    fetchData() 
  }, []);
  // console.log(data.products);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-desc">
              <Link to={`product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <Ratings rating={product.rating}/>

              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to Cart</button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
