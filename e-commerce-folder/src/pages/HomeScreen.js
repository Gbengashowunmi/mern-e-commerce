import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
// import data from './Data'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function HomeScreen() {
  const [{loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/products-API");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => {
            return (
              <div className="product" key={product.slug}>
                <Link to="/product/me">
                  <img src={product.image} alt="nike-slim-shirt" />
                </Link>
                <Link to="/product/me">
                  <p>{product.name}</p>
                </Link>
                <p>${product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
