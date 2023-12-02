import React from "react";

const Service = () => {
  return (
    <section className="mt-7">
      <div className="flex flex-wrap">
        <div className="w-1/2 flex flex-col justify-center items-end">
          <h2 className="font-pop font-bold text-[64px] mr-36">Our Services</h2>
          <p className="font-pop font-medium text-base text-paragraph w-[405px] mr-36">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="w-1/2 "
          style={{ background: "url(images/service1.png) no-repeat" }}
        >
          <div className="bg-ovarly h-full w-full px-28 py-32">
            <h3 className="font-pop font-bold text-white text-3xl leading-[54px] mb-[19px]">
              Modern natural oil and gas refineries.
            </h3>
            <a
              className="text-white font-pop font-semibold text-base border-2 border-solid border-primary bg-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear duration-300"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="w-1/2 "
          style={{ background: "url(images/service2.png) no-repeat" }}
        >
          <div className="bg-ovarly h-full w-full px-28 py-32">
            <h3 className="font-pop font-bold text-white text-3xl leading-[54px] mb-[19px]">
              Supply of national industries.
            </h3>
            <a
              className="text-white font-pop font-semibold text-base border-2 border-solid border-primary bg-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear duration-300"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="w-1/2 "
          style={{ background: "url(images/service3.png) no-repeat" }}
        >
          <div className="bg-ovarly h-full w-full px-28 py-32">
            <h3 className="font-pop font-bold text-white text-3xl leading-[54px] mb-[19px]">
              National fuel distribution and supply.
            </h3>
            <a
              className="text-white font-pop font-semibold text-base border-2 border-solid border-primary bg-primary py-3 px-8 hover:bg-transparent hover:border-white ease-linear duration-300"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
