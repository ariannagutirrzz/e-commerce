import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Shopping cart
    const [count, setCount] = useState(0);

  //product detail - open/close
  const [isProductOpen, setIsProductOpen] = useState(false)
  const openProduct = () => setIsProductOpen(true)
  const closeProduct = () => setIsProductOpen(false)

  //checkout side menu
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false)
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)

  //product detail - show product

  const [productToShow, setProductToShow] = useState({})

  //Shopping cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <CartContext.Provider value={{
        count,
        setCount,
        openProduct,
        closeProduct,
        isProductOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu
           }}
    >
      {children}
    </CartContext.Provider>
  );
};
