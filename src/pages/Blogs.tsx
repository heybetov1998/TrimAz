import { useDispatch, useSelector } from "react-redux";
import Card from "../components/UI/Card";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import PopularPosts from "../components/UI/PopularPosts";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getBlogs } from "../redux/features/blogsSlice";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";

const Blogs = () => {
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    return (
        <section id="blogs">
            <div className="container">
                <Row>
                    <Column className="order-1 order-md-0" md={6} lg={8} xl={8}>
                        <Row>
                            {loading && <Loader />}
                            {!loading && blogs.length === 0 && (
                                <NotFoundMessage />
                            )}
                            {!loading &&
                                blogs.length > 0 &&
                                blogs.map((blog) => (
                                    <Column
                                        key={blog.id}
                                        className="mb-4"
                                        lg={6}
                                        xl={6}
                                    >
                                        <Card
                                            blogId={blog.id}
                                            image={blog.image}
                                            title={blog.title}
                                            author={blog.author}
                                            description={blog.content}
                                            createdDate={blog.createdDate}
                                        />
                                    </Column>
                                ))}
                        </Row>
                    </Column>
                    <Column className="order-0 order-md-1" md={6} lg={4} xl={4}>
                        <FilterSearch />
                        <PopularPosts />
                    </Column>
                </Row>
            </div>
        </section>
    );
};

export default Blogs;
