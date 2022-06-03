import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    setCart([...cart, item]);
  };

  const onRemove = (id) => {
    const matchedItemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    if (matchedItemIndex !== -1) {
      cart.splice(matchedItemIndex, 1);
      setCart([...cart]);
    }
  };
  
  return (
    <div>
      <CartContext.Provider value={{ cart, onAdd, onRemove }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
};

export default App;
