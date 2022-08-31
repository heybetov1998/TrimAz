import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header>
                <nav>navbare</nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
};

export default MainLayout;
