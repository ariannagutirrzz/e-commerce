import { useContext } from "react";
import { CartContext } from "../../components/Context/Context";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-left.svg"

function MyOrder() {
  const context = useContext(CartContext);
  const latestProduct = context.order?.slice(-1)[0].products;

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <img
              src={arrow}
              alt="arrow'left"
              className="h'6 w'6 text-black cursor-pointer"
            />
          </Link>
          <h1> My order</h1>
        </div>
        <div className="flex flex-col w-80">
          {latestProduct.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
