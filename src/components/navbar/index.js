import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary py-4">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-1/5">
            <picture>
              <img src="images/logo.png" loading="lazy" />
            </picture>
          </div>
          <div className="w-4/5 flex items-center justify-end">
            <ul className="text-white font-pop font-semibold text-base flex gap-x-12">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <a
              className="text-white font-pop font-semibold text-base border-2 border-solid border-white py-3 px-8 ml-[72px]"
              href="#"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
