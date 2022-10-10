import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BarberInfo from "../components/BarberDetail/BarberInfo";
import MyServices from "../components/BarberDetail/MyServices";
import Portfolio from "../components/BarberDetail/Portfolio";
import Videos from "../components/BarberDetail/Videos";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import Reviews from "../components/UI/Reviews/Reviews";
import { getBarberDetails } from "../redux/features/barberDetailsSlice";
import { AppDispatch, RootState } from "../redux/store";

const BarberDetail = () => {
    const { id } = useParams();

    const { barber, loading } = useSelector(
        (state: RootState) => state.barberDetails
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarberDetails(id));
    }, [dispatch, id]);

    return (
        <section id="barbershopDetail">
            <div className="container">
                <Row>
                    <Column className="order-1 order-md-0" md={8} lg={9} xl={9}>
                        <Portfolio images={barber.images} isLoading={loading} />
                        <MyServices
                            services={barber.services}
                            isLoading={loading}
                        />
                        {/* <Videos videos={barber.videos} isLoading={loading} /> */}
                        <Reviews reviews={barber.reviews} isWritable={true}/>
                    </Column>
                    <Column className="order-0 order-md-1" md={4} lg={3} xl={3}>
                        <BarberInfo barber={barber} isLoading={loading} />
                    </Column>
                </Row>
            </div>
        </section>
    );
};

export default BarberDetail;
