/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Logo from 'assets/img/layout/dhyanaWhiteLogo.png'
// import goldLogo from 'assets/svg/Asset 9.svg'

import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  
  return (
    <div
      className={`sm:none weekly-sidenav duration-175  fixed !z-50 flex  flex-col  pb-10 shadow-2xl shadow-white/5 transition-all text-white  md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mb-5 mt-[20px] flex items-center`}>
        <div className="mt-1 mb-5 h-2.5  text-[26px] font-bold text-white">
        
          <img src={Logo} style={{width:"260px"}} className="logoimg"/>
          {/* <img src={goldLogo} style={{width:"260px"}} className="logoimg"/> */}
    
        
        </div>
      </div>
      <div class="mt-[41px] mb-7 h-px bg-white/30 " />
      {/* Nav item */}

      <ul className="mb-auto overflow-y-visible   pt-1 ">
        <Links routes={routes} />
      </ul>
      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
 