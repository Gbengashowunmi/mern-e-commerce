import data from "./Data";

function App() {
  return (
    <div>
      <header>
        <a href="/">Ma'ruf</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className='products'>
          {data.products.map((product) => (
            <div className='product' key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div className='product-desc'>
              <p>{product.name}</p>
              <p><strong>${product.price}</strong></p>
              <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
