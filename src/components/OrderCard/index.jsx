import icon from "../../assets/x.svg"

const OrderCard = props => {
    const {id,title,image,price, deleteItem} = props;
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover truncate" src={image} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <img className="h-6 w-6 cursor-pointer" onClick={() => deleteItem(id)} src={icon} alt="" />
      </div>
    </div>
  );
};

export default OrderCard;
