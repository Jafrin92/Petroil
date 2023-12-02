import React from "react";

const Contact = () => {
  return (
    <section>
      <div
        className="h-[450px]"
        style={{ background: "url(images/maps.png)" }}
      ></div>
      <div className="bg-primary border-b-4 border-solid border-mainborder">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between">
            <div className="w-4/5 py-11">
              <h3 className="font-pop text-white text-4xl font-bold ">
                Want to join as member branch in your area?
              </h3>
            </div>
            <div className="w-1/5 py-12">
              <a
                className="text-white font-pop font-semibold text-base border-2 border-solid border-white py-3 px-8 "
                href="#"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
