import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogs } from "../../redux/features/blogsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { convertDate } from "./Author/AuthorInfo";
import CardFrame from "./CardFrame";
import Column from "./grid/Column";
import Row from "./grid/Row";
import Loader from "./Loaders/Loader";
import NotFoundMessage from "./Messages/NotFoundMessage";
import { useEffect } from "react";

const PopularPosts = () => {
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    return (
        <CardFrame className="popular_posts" title="Popular blogs">
            {loading && <Loader />}
            {!loading && blogs.length === 0 && <NotFoundMessage />}
            {!loading &&
                blogs.length > 0 &&
                blogs.map((post, index) => {
                    const createdDate = convertDate(post.createdDate);

                    if (index < 5) {
                        return (
                            <Row key={post.id} className="post_item mb-3">
                                <Column default={4} sm={4} md={4} lg={4} xl={4}>
                                    <Link
                                        className="post_image"
                                        to={`/blogs/${post.id}`}
                                    >
                                        <img
                                            src={`https://localhost:7231/img/${post.image.name}`}
                                            alt={post.image.alt}
                                        />
                                    </Link>
                                </Column>
                                <Column default={8} sm={8} md={8} lg={8} xl={8}>
                                    <Link
                                        to={`/blogs/${post.id}`}
                                        className="post_title"
                                    >
                                        {post.title}
                                    </Link>
                                    <p>{createdDate}</p>
                                </Column>
                            </Row>
                        );
                    }
                    return null;
                })}
        </CardFrame>
    );
};

export default PopularPosts;
