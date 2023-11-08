import { useContext } from "react";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import { CartContext } from "../../components/Context/Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(CartContext);

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80">
          <h1> My Orders</h1>
        </div>
        {context.order.map((order, index  ) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
}

export default MyOrders;
