import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer pt-[149px] pb-[170px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between">
            <div className="w-[334px] text-white">
              <picture>
                <img className="mb-8" src="images/footerlogo.png" />
              </picture>
              <p className="font-pop font-normal text-xs relative pl-6">
                <AiOutlineMail className="absolute left-0 text-sm" />
                mail@yourcompany.com
              </p>
              <p className="font-pop font-normal text-xs relative pl-6 my-4">
                <BiPhoneCall className="absolute left-0 text-base" />
                +896 120 5889 (Toll free)
              </p>
              <p className="font-pop font-normal text-xs relative pl-6">
                <GoLocation className="absolute text-white left-0 text-sm" />
                101 Baker Street, New York, USA, 12345
              </p>
              <div className="flex mt-8">
                <div className="bg-primary p-2.5 text-white rounded-[50px] border-2 border-solid border-primary mr-3 hover:bg-transparent hover:border-white ease-linear duration-300">
                  <FaFacebookF className="text-base" />
                </div>
                <div className="bg-primary p-2.5 text-white rounded-[50px] border-2 border-solid border-primary mr-3 hover:bg-transparent hover:border-white ease-linear duration-300">
                  <AiOutlineTwitter className="text-base" />
                </div>
                <div className="bg-primary p-2.5 text-white rounded-[50px] border-2 border-solid border-primary mr-3 hover:bg-transparent hover:border-white ease-linear duration-300">
                  <FaLinkedinIn className="text-base" />
                </div>
                <div className="bg-primary p-2.5 text-white rounded-[50px] border-2 border-solid border-primary mr-3 hover:bg-transparent hover:border-white ease-linear duration-300">
                  <AiOutlineInstagram className="text-base" />
                </div>
              </div>
            </div>
            <div className="w-[173px] text-white">
              <h3 className="font-pop font-bold text-base mb-5">Company</h3>
              <ul className="font-pop font-regular text-sm ">
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Home</a>
                </li>
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">About</a>
                </li>
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Company</a>
                </li>
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="w-[173px] text-white">
              <h3 className="font-pop font-bold text-base mb-5">Others</h3>
              <ul className="font-pop font-regular text-sm">
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Contact</a>
                </li>
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="mb-4 text-white hover:text-primary hover:ml-1.5 ease-linear duration-300">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="w-[225px] text-white">
              <h3 className="font-pop font-bold text-base mb-5">Certificate</h3>
              <div className="flex">
                <img className="mr-1.5" src="images/cert1.png" loading="lazy" />
                <img src="images/cert2.png" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-topbottom p-10">
        <div className="max-w-container mx-auto">
          <p className="font=pop font-medium text-base text-paragraph">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
