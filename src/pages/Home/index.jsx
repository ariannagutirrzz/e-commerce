import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Cards";
import { getApi } from "../../Api-services/fakestore";
import ProductDetail from "../../components/ProductDetail";
function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
   const getData = async() => {
    const data = await getApi();
    setItems(data)
   }; 
   getData();
  }, []);

  return (
    <>
      <Layout>
        Home
       <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
       {items?.map(item => {
          return <Card key={item.id} data={item} />;
        })}
       </div>
        <ProductDetail/>
      </Layout>
    </>
  );
}

export default Home;
