import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";
import Loader from "../UI/Loaders/Loader";
import NotFoundMessage from "../UI/Messages/NotFoundMessage";
import SectionPartName from "../UI/section/SectionPartName";
import YoutubeVideo from "../UI/YoutubeVideo";

type PropsType = {
    isLoading?: boolean;
    videos: {
        id: number;
        youtubeId: string;
    }[];
};

const Videos = (props: PropsType) => (
    <div className="videos">
        <SectionPartName text="My Videos" />
        {props.isLoading && <Loader />}
        {!props.isLoading && props.videos.length === 0 && (
            <NotFoundMessage text="No video was added" />
        )}
        {!props.isLoading && props.videos.length > 0 && (
            <Row>
                {props.videos.map((video) => (
                    <Column
                        key={video.id}
                        default={6}
                        sm={4}
                        md={4}
                        lg={3}
                        xl={3}
                    >
                        <YoutubeVideo videoId={video.youtubeId} />
                    </Column>
                ))}
            </Row>
        )}
    </div>
);

export default Videos;
