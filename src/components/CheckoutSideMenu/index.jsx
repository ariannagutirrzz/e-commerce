import "./styles.css";
import closeIcon from "../../assets/x.svg";
import { useContext } from "react";
import { CartContext } from "../Context/Context";
import { totalPrice } from "../Utils";
import OrderCard from "../OrderCard";
const CheckoutSideMenu = () => {
  const context = useContext(CartContext);

  const deleteItem = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };
  return (
    <aside
      className={`${
        context.isCheckoutMenuOpen ? "flex" : "hidden"
      } checkout-side-menu scrollable-cards flex-col fixed right-0 border bg-white border-black rounded-lg >`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div>
          <img
            className="cursor-pointer"
            onClick={context.closeCheckoutMenu}
            src={closeIcon}
            alt="close-icon"
          />
        </div>
      </div>
      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <div className="px-6">
            <p className="flex justify-between items-center">
                <span className="font-light text-2xl">Total:</span>
                <span className="font-medium text-2xl">{totalPrice(context.cartProducts)}</span>
            </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
