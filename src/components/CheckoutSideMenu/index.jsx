import "./styles.css";
import closeIcon from "../../assets/x.svg";
import { useContext } from "react";
import { CartContext } from "../Context/Context";

const CheckoutSideMenu = () => {
  const context = useContext(CartContext);
  console.log("effe:" + context.productToShow)

  return (
    <aside
      className={`${
        context.isCheckoutMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border bg-white border-black rounded-lg >`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div>
          <img className="cursor-pointer" onClick={context.closeCheckoutMenu} src={closeIcon} alt="close-icon" />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
