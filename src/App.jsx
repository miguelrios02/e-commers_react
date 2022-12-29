import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import ProtectedRoutes from "./components/app/ProtectedRoutes";
import Header from "./layout/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductId from "./pages/ProductId";
import Purchases from "./pages/Purchases";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductId />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
