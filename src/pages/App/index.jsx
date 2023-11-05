import { useRoutes, BrowserRouter } from "react-router-dom";

import { cartProvider } from "../../useContext";
import MyAccount from "../MyAccount/index";
import MyOrder from "../MyOrder/index";
import MyOrders from "../MyOrders/index";
import SignUp from "../SignUp/index";
import NotFound from "../NotFound/index";
import Home from "../Home/index";
import NavBar from "../../components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-up", element: <SignUp /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <>
      <cartProvider>
        <BrowserRouter>
          <AppRoutes />
          <NavBar />
        </BrowserRouter>
      </cartProvider>
    </>
  );
};

export default App;
