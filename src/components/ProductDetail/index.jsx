import "./styles.css"
import closeIcon from "../../assets/x.svg"

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border bg-white border-black rounded-lg >">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div><img src={closeIcon} alt="close-icon" /></div>
      </div>
    </aside>
  );
};

export default ProductDetail;
