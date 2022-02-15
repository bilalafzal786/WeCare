import React from "react";
import team1 from "../Assets/team1.svg";
import team2 from "../Assets/team2.svg";
import team3 from "../Assets/team3.svg";
import team4 from "../Assets/team4.svg";

const Team = () => {
  const data = [
    {
      id: 1,

      img: team1,
    },
    {
      id: 2,

      img: team2,
    },
    {
      id: 3,

      img: team3,
    },
    {
      id: 4,

      img: team4,
    },
  ];
  return (
    <>
      <div className="con">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mx-auto text-center">
            <div className=" col-start-0  sm:col-start-4 col-span-12 sm:col-span-6 my-28">
              <h1 className=" text-semibold text-[2.5rem] text-customBlack2   dark:text-gray-400">
                Our Talented Team
              </h1>
              <hr className="w-24 h-1.5 bg-customYellow mx-auto dark:bg-slate-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-16">
            {data.map((item) => (
              <div
                className="col items-center flex flex-col   my-8 "
                key={item.id}
              >
                <img src={item.img} alt="" />
                <p className="font-medium text-2xl text-black mt-3  mb-4  mx-6 text-center dark:text-gray-400">
                  Richard Bell
                </p>
                <p className="dark:text-gray-400">Richard.bell@gmail.com</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 ">
            <button className="bg-customYellow rounded-md text-white text-2xl font-semibold px-8 py-3 w-48 mx-auto hover:translate-y-2 hover:bg-customYellow2 dark:bg-slate-600">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
