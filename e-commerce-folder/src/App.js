// import data from "./Data";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import ProductsContextProvider from "./ProductsContextProvider";

// import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Ma'ruf</Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <ProductsContextProvider>
                <HomeScreen />
              </ProductsContextProvider>
            }
          />
          <Route
            path="/product/:slug"
            element={
              <ProductsContextProvider>
                <ProductScreen />
              </ProductsContextProvider>
            }
          />
        </Routes>
        <main></main>
      </div>
    </BrowserRouter>
  );
}

export default App;
