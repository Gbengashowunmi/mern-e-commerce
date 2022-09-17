// import data from "./Data";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";

// import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Ma'ruf</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/product/:slug" element={<ProductScreen />} />
      </Routes>
      <main>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
