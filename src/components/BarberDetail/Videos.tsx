import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";
import SectionPartName from "../UI/section/SectionPartName";
import YoutubeVideo from "../UI/YoutubeVideo";

const Videos = () => (
    <div className="videos">
        <SectionPartName text="My Videos" />
        <Row>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
            <Column lg={3} xl={3}>
                <YoutubeVideo videoId="PS9wzU6iWYc" />
            </Column>
        </Row>
    </div>
);

export default Videos;
