import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SignPage from "./pages/(auth)/sign/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashBoardPage from "./pages/(admin)/dashboard/page";
import NotFoundPage from "./pages/404/page";
import AboutPage from "./pages/(website)/about/page";
import ContactPage from "./pages/(website)/contact/page";
import PaymentPage from "./pages/(website)/payment/page";
import CartPage from "./pages/(website)/cart/page";
import ProductDetail from "./pages/(website)/product-detail/page";
import ShopPage from "./pages/(website)/shop/page";

function App() {
  return (
    <>
      <Routes>
        {/* ROUTER WEBSITE */}
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>

        {/* ROUTER ADMIN */}
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<DashBoardPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
