import React from "react";
import service1 from "../Assets/service1.svg";
import service2 from "../Assets/service2.svg";
import service3 from "../Assets/service3.svg";

const Services = () => {
  const data = [
    {
      id: 1,
      heading: "Medical facility",
      img: service3,
    },
    {
      id: 2,
      heading: "HealthCare",
      img: service1,
    },
    {
      id: 3,
      heading: "24 hours Service",
      img: service2,
    },
  ];
  return (
    <>
      <div className="con">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mx-auto text-center">
            <div className=" col-start-3  sm:col-start-6   col-span-8 sm:col-span-3 sm:my-20 my-8 md:col-span-6 md:col-start-4">
              <h1 className=" text-semibold text-[2.5rem] text-customBlack2  dark:text-gray-400">
                Our Services
              </h1>
              <hr className="w-24 h-1.5 bg-customYellow mx-auto dark:bg-gray-600" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-16">
            {data.map((item) => (
              <div
                className="col items-center flex flex-col border shadow-lg p-5 my-8 hover:bg-customYellow hover:text-white group mx-8 sm:mx-0 cursor-pointer"
                key={item.id}
              >
                <img src={item.img} alt="" />
                <p className="font-bold text-2xl text-blueCustom2 my-4 group-hover:text-white dark:text-gray-400">
                  {item.heading}
                </p>
                <p className="text-center text-customBlack2 leading-5 my-2 px:px-4 sm:px-10 group-hover:text-white dark:text-gray-400">
                  Vestibulum placerat scelerisque turpis, ut laoreet <br /> erat
                  varius ut.
                </p>
                <a
                  href="#"
                  className="text-base text-blueCustom3 my-2 underline group-hover:text-white"
                >
                  View more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
