import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.css";
import Market from "./pages/Market";
import Barbershops from "./pages/Barbershops";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/barbershops" element={<Barbershops />} />
                <Route path="/market" element={<Market />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
