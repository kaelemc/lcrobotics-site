import YTIcon from "../media/images/youtube.svg"
import FBIcon from "../media/images/facebook.svg"

const Footer = () => {
  return (
    <div className="h-24 w-full bottom-0 border-t-2">
      <div className="flex flex-col h-full justify-center p-5 md:flex-row md:justify-between items-center">
          <p className="text-sm text-gray-600 text-center md:text-base">&copy; 2021 Lynfield College Robotics. All rights reserved</p>
          <div className="inline flex mt-2">
            <a href="https://www.facebook.com/lynfieldrobotics" target="new"><img src={FBIcon} alt="Facebook Icon" className="h-8 w-auto pr-2 hover:fill-current text-blue-900"/></a>
            <a href="https://www.youtube.com/channel/UCK3oDQvqRNloB8Oiu3hAYSg" target="new"><img src={YTIcon} alt="YouTube Icon" className="h-8 w-auto"/></a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
