import { Route, Routes } from "react-router-dom";
import { Cart } from "../components/cart";
import { Mainpage } from "../components/Main";
import { SingleData } from "../components/singleStore";
import { Store } from "../components/store";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<SingleData />} />
        <Route path="/store/:id/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
