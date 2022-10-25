import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.css";
import Market from "./pages/Market";
import Barbershops from "./pages/Barbershops";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BarbershopDetail from "./pages/BarbershopDetail";
import BarbershopSubLayout from "./layouts/BarbershopSubLayout";
import BarberDetail from "./pages/BarberDetail";
import BarberSubLayout from "./layouts/BarberSubLayout";
import Barbers from "./pages/Barbers";
import ProductDetail from "./pages/ProductDetail";
import MarketSubLayout from "./layouts/MarketSubLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BlogDetail from "./pages/BlogDetail";
import BlogSubLayout from "./layouts/BlogSubLayout";
import UserSettings from "./pages/UserSettings";
import AdminLayout from "./admin/layouts/AdminLayout";
import BarbershopDash from "./admin/pages/Barbershops/BarbershopDash";
import BarbershopSubAdmin from "./admin/layouts/BarbershopSubAdmin";
import BarberSubAdmin from "./admin/layouts/BarberSubAdmin";
import BarberDash from "./admin/pages/Barbers/BarberDash";
import ProductSubAdmin from "./admin/layouts/ProductSubAdmin";
import ProductDash from "./admin/pages/Products/ProductDash";
import FeedbackDash from "./admin/pages/Feedbacks/FeedbackDash";
import BlogSubAdmin from "./admin/layouts/BlogSubAdmin";
import BlogDash from "./admin/pages/Blogs/BlogDash";
import RegisterSubLayout from "./layouts/RegisterSubLayout";
import BarbershopCreate from "./admin/pages/Barbershops/BarbershopCreate";
import Logout from "./pages/Logout";
import SellerDash from "./admin/pages/Sellers/SellerDash";
import SellerSubAdmin from "./admin/layouts/SellerSubAdmin";
import SellerCreate from "./admin/pages/Sellers/SellerCreate";
import SellerUpdate from "./admin/pages/Sellers/SellerUpdate";
import BarberCreate from "./admin/pages/Barbers/BarberCreate";
import BarberUpdate from "./admin/pages/Barbers/BarberUpdate";
import ProductCreate from "./admin/pages/Products/ProductCreate";
import ProductUpdate from "./admin/pages/Products/ProductUpdate";
import BlogCreate from "./admin/pages/Blogs/BlogCreate";
import BlogUpdate from "./admin/pages/Blogs/BlogUpdate";
import BarbershopUpdate from "./admin/pages/Barbershops/BarbershopUpdate";
import OwnerSubAdmin from "./admin/layouts/OwnerSubAdmin";
import OwnerDash from "./admin/pages/Owners/OwnerDash";
import OwnerCreate from "./admin/pages/Owners/OwnerCreate";

const App = () => {
    const logged_user = localStorage.getItem("logged_user");

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route path="barbershops" element={<BarbershopSubLayout />}>
                    <Route index element={<Barbershops />} />
                    <Route path=":id" element={<BarbershopDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="barbers" element={<BarberSubLayout />}>
                    <Route index element={<Barbers />} />
                    <Route path=":id" element={<BarberDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="market" element={<MarketSubLayout />}>
                    <Route index element={<Market />} />
                    <Route path="products/:id" element={<ProductDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="blogs" element={<BlogSubLayout />}>
                    <Route index element={<Blogs />} />
                    <Route path=":id" element={<BlogDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route
                    path="register"
                    element={
                        logged_user ? (
                            <Navigate to="/" />
                        ) : (
                            <RegisterSubLayout />
                        )
                    }
                >
                    <Route index element={<Register actionName="Register" />} />
                    <Route
                        path="barber"
                        element={<Register actionName="RegisterBarber" />}
                    />
                    <Route
                        path="owner"
                        element={<Register actionName="RegisterOwner" />}
                    />
                    <Route
                        path="seller"
                        element={<Register actionName="RegisterSeller" />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="contact" element={<Contact />} />
                <Route
                    path="login"
                    element={logged_user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="users/:id/settings"
                    element={
                        logged_user ? (
                            <UserSettings />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route
                path="/admin"
                element={
                    !logged_user ||
                    JSON.parse(logged_user).roleNames.includes("Member") ? (
                        <Navigate to="/" />
                    ) : (
                        <AdminLayout />
                    )
                }
            >
                <Route path="barbershops" element={<BarbershopSubAdmin />}>
                    <Route index element={<BarbershopDash />} />
                    <Route path="create" element={<BarbershopCreate />} />
                    <Route path=":id/update" element={<BarbershopUpdate />} />
                </Route>

                <Route path="barbers" element={<BarberSubAdmin />}>
                    <Route index element={<BarberDash />} />
                    <Route path="create" element={<BarberCreate />} />
                    <Route path=":id/update" element={<BarberUpdate />} />
                </Route>

                <Route path="sellers" element={<SellerSubAdmin />}>
                    <Route index element={<SellerDash />} />
                    <Route path="create" element={<SellerCreate />} />
                    <Route path=":id/update" element={<SellerUpdate />} />
                </Route>

                <Route path="products" element={<ProductSubAdmin />}>
                    <Route index element={<ProductDash />} />
                    <Route path="create" element={<ProductCreate />} />
                    <Route path=":id/update" element={<ProductUpdate />} />
                </Route>

                <Route path="blogs" element={<BlogSubAdmin />}>
                    <Route index element={<BlogDash />} />
                    <Route path="create" element={<BlogCreate />} />
                    <Route path=":id/update" element={<BlogUpdate />} />
                </Route>

                <Route path="owners" element={<OwnerSubAdmin />}>
                    <Route index element={<OwnerDash />} />
                    <Route path="create" element={<OwnerCreate />} />
                    {/* <Route path=":id/update" element={<OwnerUpdate/>} */}
                </Route>

                <Route path="feedbacks" element={<FeedbackDash />} />
            </Route>
        </Routes>
    );
};

export default App;
