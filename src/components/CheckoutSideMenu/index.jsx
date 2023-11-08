import { useContext } from "react";
import { CartContext } from "../Context/Context";
import { totalPrice } from "../Utils";
import { Link } from "react-router-dom";
import OrderCard from "../OrderCard";
import closeIcon from "../../assets/x.svg";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(CartContext);

  const deleteItem = (i) => {
    const filteredProducts = context.cartProducts.filter(
      (product,index) => index != i
    );
    context.setCount(context.count - 1);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    context.closeCheckoutMenu();
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      // totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
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
      <div className="px-6 flex-1">
        {context.cartProducts.map((product,index) => (
          <OrderCard
            key={index}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            deleteItem={deleteItem}
            index={index}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light text-2xl">Total:</span>
          <span className="font-medium text-2xl">
            {totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="my-orders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg "
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
