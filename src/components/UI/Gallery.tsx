import Column from "./grid/Column";
import Row from "./grid/Row";

type ImageType = {
    id: string | number;
    src: any;
    alt?: string;
};

type PropsType = {
    images: ImageType[];
};

const Gallery = (props: PropsType) => (
    <div className="gallery">
        <Row>
            <Column lg={4} xl={4}>
                <div className="gallery_item_holder">
                    <div className="gallery_item">
                        <img
                            src={props.images[0].src}
                            alt={props.images[0].alt ?? "Gallery image"}
                        />
                    </div>
                    <div className="gallery_item">
                        <img
                            src={props.images[0].src}
                            alt={props.images[0].alt ?? "Gallery image"}
                        />
                    </div>
                </div>
            </Column>
            <Column lg={4} xl={4}>
                <div className="gallery_item_holder single">
                    <div className="gallery_item">
                        <img
                            src={props.images[0].src}
                            alt={props.images[0].alt ?? "Gallery image"}
                        />
                    </div>
                </div>
            </Column>
            <Column lg={4} xl={4}>
                <div className="gallery_item_holder">
                    <div className="gallery_item">
                        <img
                            src={props.images[0].src}
                            alt={props.images[0].alt ?? "Gallery image"}
                        />
                    </div>
                    <div className="gallery_item">
                        <img
                            src={props.images[0].src}
                            alt={props.images[0].alt ?? "Gallery image"}
                        />
                    </div>
                </div>
            </Column>
        </Row>
    </div>
);

export default Gallery;
