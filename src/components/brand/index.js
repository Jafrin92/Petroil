import React from "react";

const Brand = () => {
  return (
    <section className="my-[117px]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between">
          <div className="w-1/4">
            <picture>
              <img src="images/logo1.png" loading="lazy" />
            </picture>
          </div>
          <div className="w-1/4">
            <picture>
              <img src="images/logo2.png" loading="lazy" />
            </picture>
          </div>
          <div className="w-1/4">
            <picture>
              <img src="images/logo3.png" loading="lazy" />
            </picture>
          </div>
          <div className="w-1/4">
            <picture>
              <img src="images/logo4.png" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
