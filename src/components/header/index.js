import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-topbottom py-4 border-b-4 border-solid border-mainborder">
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="md:flex">
          <div className="md:w-1/2 text-white md:flex mx-auto ">
            <p className="font-pop font-normal text-xs relative pl-6 after:absolute after:content-[''] after:top-0 after:right-[-28px] after:h-full after:w-0.5 md:after:bg-mainborder my-2.5 md:my-0">
              <AiOutlineMail className="absolute left-0 text-sm" />
              mail@yourcompany.com
            </p>
            <p className="font-pop font-normal text-xs relative pl-6 md:ml-14 ">
              <BiPhoneCall className="absolute left-0 text-base" />
              +896 120 5889 (Toll free)
            </p>
          </div>
          <div className="md:w-1/2 text-white flex mx-auto md:justify-end gap-x-3 md:gap-x-4 text-base my-2.5 md:my-0">
            <FaFacebookF />
            <AiOutlineTwitter />
            <FaLinkedinIn />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
