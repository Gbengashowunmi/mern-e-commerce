import { useContext} from "react";
import { Link } from "react-router-dom";
// import data from "../Data";
// import axios from "axios";
import Ratings from "./Ratings";
import { ProductsContext } from "../ProductsContextProvider";

// export const UserContext = createContext();

export default function HomeScreen() {
  const products = useContext(ProductsContext)
  // console.log(data.products);
  console.log(products);
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
              <Ratings rating={product.rating} review={product.numReviews} />
              <p>
                <strong>${product.price}</strong>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
