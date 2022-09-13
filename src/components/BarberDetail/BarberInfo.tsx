import SubmitButton from "../UI/Buttons/SubmitButton";
import CardFrame from "../UI/CardFrame";
import StandartCheckbox from "../UI/Checkboxes/StandartCheckbox";
import Stars from "../UI/Stars";

const BarberInfo = () => (
    <CardFrame className="barber_info">
        <div className="profile_picture">
            <img
                src={require("../../assets/images/profile-picture.png")}
                alt="testtest"
            />
        </div>
        <div>
            <div>
                <h2 className="name">Barber Name</h2>
                <div className="star_holder d-flex justify-content-center">
                    <Stars edit={false} value={2.3} />
                </div>
            </div>
            <div>
                <h4 className="info_heading">My Services</h4>
                <div className="service_holder">
                    <StandartCheckbox text="test" isChecked isDisabled />
                    <StandartCheckbox text="jest" isChecked isDisabled />
                    <StandartCheckbox text="fest" isChecked isDisabled />
                    <StandartCheckbox text="dest" isChecked isDisabled />
                </div>
            </div>
            <div>
                <SubmitButton className="mt-3" text="Reserve" type="button" />
            </div>
        </div>
    </CardFrame>
);

export default BarberInfo;
