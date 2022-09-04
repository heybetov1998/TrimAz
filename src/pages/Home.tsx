import Intro from "../components/Home/Intro";
import LatestProducts from "../components/Home/LatestProducts/LatestProducts";
import TopBarbers from "../components/Home/TopBarbers/TopBarbers";

const Home = () => {
    return (
        <>
            <Intro />
            <TopBarbers />
            <LatestProducts />
        </>
    );
};

export default Home;
