import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
  );
};
