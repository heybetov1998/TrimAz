import { useState } from "react";
import Card from "../components/UI/Card";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";

const Blogs = () => {
    const day = new Date().getDate();
    const month = new Date().toLocaleString("en-US", { month: "long" });
    const year = new Date().getFullYear();

    const dateString = `${month} ${day}, ${year}`;

    return (
        <section id="blogs">
            <div className="container">
                <Row>
                    <Column lg={9} xl={9}>
                        <Row>
                            <Column className="mb-4" lg={6} xl={6}>
                                <Card
                                    image={{
                                        src: require("../assets/images/612-500x500.jpg"),
                                        alt: "Booking alt",
                                    }}
                                    title="assasdfdfdf"
                                    author={{
                                        image: {
                                            src: require("../assets/images/555-500x500.jpg"),
                                            alt: "Author image",
                                        },
                                        name: "Adil Heybetov",
                                    }}
                                    description="loremadsfajdhfj akdsjfhaskdfhaksdhf hadskfhakdsfh kahsdkfhasdkjfhaskdfhkjasdhf kjasdhfkjashdfkjashdfkj hakjsdfhkasdhfkj hakjsdfhaksd hfkjasdhfk hakdsfhkasdhfkjasdhfkja"
                                    createdDate={dateString}
                                />
                            </Column>
                            <Column className="mb-4" lg={6} xl={6}>
                                <Card
                                    image={{
                                        src: require("../assets/images/612-500x500.jpg"),
                                        alt: "Booking alt",
                                    }}
                                    title="assasdfdfdf"
                                    author={{
                                        image: {
                                            src: require("../assets/images/555-500x500.jpg"),
                                            alt: "Author image",
                                        },
                                        name: "Adil Heybetov",
                                    }}
                                    description="loremadsfajdhfj akdsjfhaskdfhaksdhf hadskfhakdsfh kahsdkfhasdkjfhaskdfhkjasdhf kjasdhfkjashdfkjashdfkj hakjsdfhkasdhfkj hakjsdfhaksd hfkjasdhfk hakdsfhkasdhfkjasdhfkja"
                                    createdDate={dateString}
                                />
                            </Column>
                            <Column className="mb-4" lg={6} xl={6}>
                                <Card
                                    image={{
                                        src: require("../assets/images/612-500x500.jpg"),
                                        alt: "Booking alt",
                                    }}
                                    title="assasdfdfdf"
                                    author={{
                                        image: {
                                            src: require("../assets/images/555-500x500.jpg"),
                                            alt: "Author image",
                                        },
                                        name: "Adil Heybetov",
                                    }}
                                    description="loremadsfajdhfj akdsjfhaskdfhaksdhf hadskfhakdsfh kahsdkfhasdkjfhaskdfhkjasdhf kjasdhfkjashdfkjashdfkj hakjsdfhkasdhfkj hakjsdfhaksd hfkjasdhfk hakdsfhkasdhfkjasdhfkja"
                                    createdDate={dateString}
                                />
                            </Column>
                            <Column className="mb-4" lg={6} xl={6}>
                                <Card
                                    image={{
                                        src: require("../assets/images/612-500x500.jpg"),
                                        alt: "Booking alt",
                                    }}
                                    title="assasdfdfdf"
                                    author={{
                                        image: {
                                            src: require("../assets/images/555-500x500.jpg"),
                                            alt: "Author image",
                                        },
                                        name: "Adil Heybetov",
                                    }}
                                    description="loremadsfajdhfj akdsjfhaskdfhaksdhf hadskfhakdsfh kahsdkfhasdkjfhaskdfhkjasdhf kjasdhfkjashdfkjashdfkj hakjsdfhkasdhfkj hakjsdfhaksd hfkjasdhfk hakdsfhkasdhfkjasdhfkja"
                                    createdDate={dateString}
                                />
                            </Column>
                        </Row>
                    </Column>
                    <Column lg={3} xl={3}>
                        dasdff
                    </Column>
                </Row>
            </div>
        </section>
    );
};

export default Blogs;
