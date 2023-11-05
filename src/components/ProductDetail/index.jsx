import "./styles.css"
const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border bg-white border-black rounded-lg >">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div><img src="src/assets/close.svg" alt="close-icon" /></div>
      </div>
    </aside>
  );
};

export default ProductDetail;
