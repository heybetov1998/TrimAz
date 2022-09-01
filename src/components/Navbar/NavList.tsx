import NavItem from "./NavItem";

const dataArray = [
    { where: "/", text: "Home" },
    { where: "/men", text: "For men" },
    { where: "/women", text: "For women" },
    { where: "/market", text: "Market" },
    { where: "/blogs", text: "Blogs" },
    { where: "/contact", text: "Contact" },
];

const NavList = () => {
    return (
        <ul className="d-flex justify-content-center align-items-center h-100">
            {dataArray.map((data) => (
                <NavItem where={data.where} text={data.text} />
            ))}
        </ul>
    );
};

export default NavList;
