import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Shopping cart
    const [count, setCount] = useState(0);

  //product detail - open/close
  const [isProductOpen, setIsProductOpen] = useState(false)
  const openProduct = () => setIsProductOpen(true)
  const closeProduct = () => setIsProductOpen(false)

  //product detail - show product

  const [productToShow, setProductToShow] = useState({})

  return (
    <CartContext.Provider value={{
        count,
        setCount,
        openProduct,
        closeProduct,
        isProductOpen,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
