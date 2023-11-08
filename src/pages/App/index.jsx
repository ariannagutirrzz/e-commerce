import { useRoutes, BrowserRouter } from "react-router-dom";

import { CartProvider } from "../../components/Context/Context";
import MyAccount from "../MyAccount/index";
import MyOrder from "../MyOrder/index";
import MyOrders from "../MyOrders/index";
import SignUp from "../SignUp/index";
import NotFound from "../NotFound/index";
import Home from "../Home/index";
import NavBar from "../../components/Navbar";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-up", element: <SignUp /> },
  ]);

  return routes;
};
CartProvider;
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
