import brandLogo from "../../assets/svg/brand-logo.svg";

const BrandLogo = () => {
    return (
        <div className="h-100 d-flex justify-content-start align-items-center">
            <img className="img-fluid" src={brandLogo} alt="App logo" />
        </div>
    );
};

export default BrandLogo;
