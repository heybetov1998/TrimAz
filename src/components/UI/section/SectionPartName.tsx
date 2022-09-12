type PropsType = {
    text: string;
};

const SectionPartName = (props: PropsType) => {
    return <h5 className="section_part_name">{props.text}</h5>;
};

export default SectionPartName;
