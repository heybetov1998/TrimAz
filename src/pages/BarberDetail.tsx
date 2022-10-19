import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BarberInfo from "../components/BarberDetail/BarberInfo";
import MyServices from "../components/BarberDetail/MyServices";
import { PortfolioMemo } from "../components/BarberDetail/Portfolio";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import Reviews from "../components/UI/Reviews/Reviews";
import { getBarberDetails } from "../redux/features/barberDetailsSlice";
import { AppDispatch, RootState } from "../redux/store";
import SectionPartName from "../components/UI/section/SectionPartName";
import SubmitButton from "../components/UI/Buttons/SubmitButton";

const BarberDetail = () => {
    const review = useSelector((state: RootState) => state.review);
    const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}");

    const submitHandler = (ev: any) => {
        ev.preventDefault();
        const input = ev.target.firstChild as HTMLInputElement;

        fetch(
            `https://localhost:7231/api/Barbers/${id}?timeId=${input.value}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                dispatch(getBarberDetails(id));
                console.log(data);
            });
    };

    const commentHandler = (ev: any) => {
        ev.preventDefault();

        if (review.starValue !== 0 && review.commentValue !== "") {
            console.log(review.starValue, review.commentValue);

            fetch("https://localhost:7231/api/Reviews/barber", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    barberId: id,
                    userId: loggedUser.id,
                    rating: review.starValue,
                    comment: review.commentValue,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        }
    };

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
                        <PortfolioMemo
                            images={barber.images}
                            isLoading={loading}
                        />
                        <MyServices
                            services={barber.services}
                            isLoading={loading}
                        />
                        <SectionPartName text="Available times" />
                        <table className="table text-white mb-5">
                            <thead>
                                <tr>
                                    <th>Time range</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {barber.times.map((time) => (
                                    <tr key={time.id} className="align-middle">
                                        <td>{time.range}</td>
                                        <td>
                                            <form onSubmit={submitHandler}>
                                                <input
                                                    name={`time-${time.id}`}
                                                    type="hidden"
                                                    value={time.id}
                                                />
                                                {localStorage.getItem(
                                                    "logged_user"
                                                ) && (
                                                    <SubmitButton
                                                        text="Reserve"
                                                        type="submit"
                                                    />
                                                )}
                                                {!localStorage.getItem(
                                                    "logged_user"
                                                ) && (
                                                    <Link
                                                        className="submit_button d-block text-center"
                                                        to="/login"
                                                    >
                                                        Reserve
                                                    </Link>
                                                )}
                                            </form>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <Videos videos={barber.videos} isLoading={loading} /> */}
                        <Reviews
                            submitter={commentHandler}
                            reviews={barber.reviews}
                            isWritable={true}
                        />
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
