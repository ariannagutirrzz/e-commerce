import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const [isProductOpen, setIsProductOpen] = useState(false)
  const openProduct = () => setIsProductOpen(true)
  const closeProduct = () => setIsProductOpen(false)

  return (
    <CartContext.Provider value={{
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
