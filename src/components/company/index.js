import React from "react";

const Company = () => {
  return (
    <section className="bg-bg py-[136px]">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-2/5 bg-primary">
            <h2 className="font-pop text-4xl font-bold text-white pl-[77px] py-24 w-[290px]">
              Learn more about our company
            </h2>
          </div>
          <div
            className="w-3/5 flex justify-center items-center group"
            style={{ background: "url(images/company.png)" }}
          >
            <a
              className="text-primary font-pop font-semibold text-base border-2 border-solid border-white bg-white py-3 px-8 group-hover:bg-primary group-hover:border-primary group-hover:text-white ease-linear duration-300"
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

export default Company;
