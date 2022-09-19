// import { useContext } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../ProductsContextProvider";
import Ratings from "./Ratings";
// import { UserContext } from "./HomeScreen";
// import Ratings from "./Ratings";

export default function ProductScreen() {
  const params = useParams();
  console.log(params.slug)
  console.log(params)
    // const [ price ] = useContext(UserContext);
    // console.log(price);
    const products = useContext(ProductsContext)

  return (

    <div>
<h1>{params.slug}</h1>
    {products.map(function(product){
      console.log(product);
      return (
      <div className="productscreen">
            <img src= {product.image} alt={product.name}/>
      
            <section className="product-details">
              <h2>{product.name}</h2>
              <hr />
              <Ratings rating={product.rating} review={product.numReviews} />
              <hr />
              <p>Price: ${product.price}</p>
              <hr />
              <p>Description: {product.description}</p>
            </section>
      
            <section className="price-box">
              <p>Price: $250</p>
              <hr />
              <p>Status: Unavailable</p>
            </section>
          </div>)
          })}
          </div>
    
  );
}
