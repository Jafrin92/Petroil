import React from "react";

const Banner = () => {
  return (
    <section
      style={{ background: "url(images/banner.png) no-repeat center/cover" }}
    >
      <div className="bg-ovarly h-full w-full py-64">
        <div className="max-w-container mx-auto text-white">
          <h1 className="font-pop font-bold text-[64px] w-[842px] mb-7">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            className="text-white font-pop font-semibold text-base border-2 border-solid border-primary bg-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear duration-300"
            href="#"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
