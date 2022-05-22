import logo from "../images/cropped-logo.png";
import army from "../images/army.png";
import airforce from "../images/air-force.png";
import navy from "../images/navy.png";
import indianarmedforces from "../images/indian-armed-forces.png";

const Header = () => {
  return (
    <div className=" w-100 mt-10 flex items-center  justify-center lg:justify-between">
      <img className="lg:mr-auto" src={logo} alt="CSD Logo" />

      <div className="flex hidden items-center lg:flex">
        <img className="mr-2" src={army} alt="Army" />
        <img className="mr-2" src={airforce} alt="Air Force" />
        <img className="mr-2" src={navy} alt="Navy" />
        <img src={indianarmedforces} alt="Indian Armed Forces" />
      </div>
    </div>
  );
};

export default Header;
