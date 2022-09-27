import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorInfo from "../components/UI/Author/AuthorInfo";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import PopularPosts from "../components/UI/PopularPosts";
import { getBlogDetails } from "../redux/features/blogDetailsSlice";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";
import GridGallery from "../components/UI/GridGallery";

const BlogDetail = () => {
    const { id } = useParams();

    const { blog, loading } = useSelector(
        (state: RootState) => state.blogDetails
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBlogDetails(id));
    }, [dispatch, id]);

    return (
        <section id="blogs">
            <div className="container">
                <Row>
                    <Column
                        className="blog_part order-1 order-md-0"
                        md={6}
                        lg={8}
                        xl={8}
                    >
                        {loading && <Loader />}
                        {!loading && !blog && (
                            <NotFoundMessage text="Blog content is empty" />
                        )}
                        {!loading && blog && (
                            <>
                                {blog.images.map((image, index) => {
                                    if (image.isMain) {
                                        return (
                                            <div
                                                key={index}
                                                className="main_image"
                                            >
                                                <img
                                                    src={`https://localhost:7231/img/${image.name}`}
                                                    alt={image.name}
                                                />
                                            </div>
                                        );
                                    }
                                    return <div key={index}></div>;
                                })}
                                <div className="blog_info">
                                    <h2 className="blog_title">{blog.title}</h2>
                                    <AuthorInfo
                                        className="blog_author"
                                        author={blog.author}
                                        createdDate="September 1, 2003"
                                    />
                                </div>
                                <div className="blog_content">
                                    <p>{blog.content}</p>
                                    <GridGallery images={blog.images} />
                                </div>
                            </>
                        )}
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

export default BlogDetail;
