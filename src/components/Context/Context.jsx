import { createContext } from "react";

const cartContext = createContext();

export const cartProvider = ({ children }) => {
    return (
        <cartProvider>
            {children}
        </cartProvider>
    )
}