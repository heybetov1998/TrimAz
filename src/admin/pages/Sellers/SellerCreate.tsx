import RegisterCard from "../../../components/UI/RegisterCard";
import SectionPartName from "../../../components/UI/section/SectionPartName";

const SellerCreate = () => (
    <>
        <SectionPartName className="my-4" text="Create new Seller" />
        <RegisterCard actionName="RegisterSeller" navigateTo="/admin/sellers" />
    </>
);

export default SellerCreate;
