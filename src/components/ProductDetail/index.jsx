import "./styles.css";
import closeIcon from "../../assets/x.svg";
import { useContext } from "react";
import { CartContext } from "../Context/Context";
const ProductDetail = () => {
  const context = useContext(CartContext);
  
  return (
    <aside
      className={`${
        context.isProductOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border bg-white border-black rounded-lg >`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <img className="cursor-pointer" onClick={context.closeProduct} src={closeIcon} alt="close-icon" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">$ {context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-medium text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
