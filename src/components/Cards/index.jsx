import { CartContext } from "../Context/Context";
import { useContext } from "react";
import plus from "../../assets/plus.svg";

const Card = ({ data }) => {
  const context = useContext(CartContext);

  const showProduct = (productDetail) => {
    context.openProduct();
    context.setProductToShow(productDetail);
    context.closeCheckoutMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutMenu();
    context.closeProduct();

  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg "
      onClick={() => showProduct(data)}
    >
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg rounded-b-none"
          src={data.image}
          alt="product-image"
        />
        <div
          onClick={(event) => addProductsToCart(event, data)}
          className="absolute top-0 right-0 flex justify-center items-center bg-white/80 w-6 h-6 m-2 p-1 rounded-lg"
        >
          <img src={plus} alt="" />
        </div>
      </figure>
      <p className="flex justify-between items-center rounded-lg rounded-t-none bg-black/10 px-2 h-18">
        <span className="text-sm font-medium truncate mr-2">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
