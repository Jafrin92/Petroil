import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Blog = () => {
  return (
    <section className="bg-bg pt-[110px] pb-[162px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between">
          <div
            className="w-[339px] group"
            style={{ background: "url(images/blog1.png) no-repeat" }}
          >
            <div className="bg-ovarly h-full w-full px-11 pb-16">
              <h4 className="font-pop font-bold text-white text-2xl mb-[52px] pt-[75px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                className="text-white font-pop font-semibold text-base border-2 border-solid border-white/50 bg-white/50 py-3 px-8 group-hover:bg-transparent group-hover:border-white ease-linear duration-300"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
          <div
            className="w-[339px] group"
            style={{ background: "url(images/blog2.png) no-repeat" }}
          >
            <div className="bg-ovarly h-full w-full px-11 pb-16">
              <h4 className="font-pop font-bold text-white text-2xl mb-[52px] pt-[75px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                className="text-white font-pop font-semibold text-base border-2 border-solid border-white/50 bg-white/50 py-3 px-8 group-hover:bg-transparent group-hover:border-white ease-linear duration-300"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
          <div
            className="w-[339px] group"
            style={{ background: "url(images/blog3.png) no-repeat" }}
          >
            <div className="bg-ovarly h-full w-full px-11 pb-16">
              <h4 className="font-pop font-bold text-white text-2xl mb-[52px] pt-[75px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                className="text-white font-pop font-semibold text-base border-2 border-solid border-white/50 bg-white/50 py-3 px-8 group-hover:bg-transparent group-hover:border-white ease-linear duration-300"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <h4 className="relative font-bold text-base font-pop text-right pr-7 mt-[29px]">
          MORE FROM THE BLLOG
          <AiOutlineRight className="absolute right-0 top-[3px] text-base font-bold" />
        </h4>
      </div>
    </section>
  );
};

export default Blog;
