import Select from "react-select";

import image from "../../assets/images/intro.jpg";

const options = [{ value: "test", label: "tes" }];

const Intro = () => {
    return (
        <section id="intro" style={{ backgroundImage: `url("${image}")` }}>
            <div className="section_backdrop">
                <div className="section_content">
                    <div className="text_part">
                        <h3>Find your style with us</h3>
                        <p>Get best barber in country just one click</p>
                    </div>
                    <div className="search_part">
                        <Select options={options} />
                        <select name="services" id="services">
                            <option value={0}>Select service</option>
                            <option value={1}>Haircut</option>
                            <option value={2}>BeardShape</option>
                            <option value={3}>Nail</option>
                            <option value={4}>Laser</option>
                        </select>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder={"select"}
                        />
                        <input type="time" name="date" id="date" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Intro;
