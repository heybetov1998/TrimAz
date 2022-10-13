import RegisterCard from "../../../components/UI/RegisterCard";
import SectionPartName from "../../../components/UI/section/SectionPartName";

const BarberCreate = () => (
    <>
        <SectionPartName className="my-4" text="Create new barber" />
        <RegisterCard actionName="RegisterBarber" navigateTo="/admin/barbers" />
    </>
);

export default BarberCreate;
