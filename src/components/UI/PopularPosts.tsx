import { Link } from "react-router-dom";
import { convertDate } from "./Author/AuthorInfo";
import CardFrame from "./CardFrame";
import Column from "./grid/Column";
import Row from "./grid/Row";
import Loader from "./Loaders/Loader";
import NotFoundMessage from "./Messages/NotFoundMessage";

type PropsType = {
    isLoading?: boolean;
    posts: {
        id: string | number;
        title: string;
        createdDate: string;
        image: {
            name: string;
            alt: string;
        };
    }[];
};

const PopularPosts = (props: PropsType) => {
    return (
        <CardFrame className="popular_posts" title="Popular blogs">
            {props.isLoading && <Loader />}
            {!props.isLoading && props.posts.length === 0 && (
                <NotFoundMessage />
            )}
            {!props.isLoading &&
                props.posts.length > 0 &&
                props.posts.map((post) => {
                    const createdDate = convertDate(post.createdDate);

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
                })}
        </CardFrame>
    );
};

export default PopularPosts;
