import icon from "../../assets/x.svg";

const OrderCard = (props) => {
  const { id, title, image, price, deleteItem, index } = props;
  let renderIcon = null;

  if (deleteItem) {
    renderIcon = (
      <img
        className="h-6 w-6 cursor-pointer"
        onClick={() => deleteItem(index)}
        src={icon}
        alt="Delete"
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <figure className="w-20 h-20 max-w-full"> 
        <img
          className="w-full h-full rounded-lg object-cover"
          src={image}
          alt={title}
        />
      </figure>
      <div className="flex items-center gap-2">
        <p className="text-sm font-light overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[10rem] mx-0.5">
          
          {title}
        </p>
        <p className="text-lg font-medium">${price}</p>
        {renderIcon}
      </div>
    </div>
  );
};

export default OrderCard;
