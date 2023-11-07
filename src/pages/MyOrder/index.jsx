import { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext } from "../../components/Context/Context";
import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const context = useContext(CartContext)
  const latestProduct = context.order?.slice(-1)[0].products;

  return (
    <>
      <Layout>
        My order
        <div className="flex flex-col w-80">
          {latestProduct.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))
          }
        </div>
      </Layout>
    </>
  );
}

export default MyOrder;
