import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Cards";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => console.log(setItems(data)))
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
      </Layout>
    </>
  );
}

export default Home;
