import RegisterCard from "../../../components/UI/RegisterCard";
import SectionPartName from "../../../components/UI/section/SectionPartName";

const OwnerCreate = () => (
    <>
        <SectionPartName className="my-4" text="Create new owner" />
        <RegisterCard actionName="RegisterOwner" navigateTo="/admin/owners" />
    </>
);

export default OwnerCreate;
