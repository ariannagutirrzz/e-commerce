import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
    console.log("count: " + count)
  return (
    <CartContext.Provider value={{
        count,
        setCount,
        increment
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
