import React from "react";
import review1 from "../Assets/review1.svg";
import review2 from "../Assets/review2.svg";
import review3 from "../Assets/review3.svg";

const Review1 = () => {
  const data = [
    {
      id: 1,
      head: "1.1m",
      img: review1,
    },
    {
      id: 2,
      head: "#1",
      img: review3,
    },
    {
      id: 3,
      head: "90#",
      img: review2,
    },
  ];
  return (
    <>
      <div className="con">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mx-auto text-center">
            <div className=" col-start-2  sm:col-start-3 col-span-10 sm:col-span-8 my-12">
              <h1 className=" text-semibold text-[2.5rem] text-customBlack2  my-6 dark:text-gray-400">
                User Reviews
              </h1>
              <p className="text-2xl font-normal text-customBlack2 dark:text-gray-400">
                More than 1000 users are satisfied with our services and want to
                share their experience with you
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-16">
            {data.map((item) => (
              <div
                className="col items-center flex flex-col relative  my-8 "
                key={item.id}
              >
                <svg
                  width="40"
                  className="absolute -top-4 right-14 2xl:right-40 "
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="url(#paint0_radial_1913_235)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1913_235"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(13.0092 8.89307) rotate(56.5493) scale(33.1991)"
                    >
                      <stop stop-color="#FFCF87" />
                      <stop offset="0.3125" stop-color="#FFA621" />
                      <stop offset="0.651042" stop-color="#EF9103" />
                      <stop offset="1" stop-color="#FFAC2F" />
                    </radialGradient>
                  </defs>
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="absolute top-12 left-16 2xl:left-44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8.5"
                    stroke="#FFA621"
                    stroke-width="3"
                  />
                </svg>
                <svg
                  width="16"
                  height="15"
                  className="absolute bottom-28 left-28 2xl:left-60"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="7.5"
                    r="7.5"
                    fill="url(#paint0_radial_1913_236)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1913_236"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(5.37843 3.3349) rotate(56.5493) scale(12.4497)"
                    >
                      <stop stop-color="#FFCF87" />
                      <stop offset="0.3125" stop-color="#FFA621" />
                      <stop offset="0.651042" stop-color="#EF9103" />
                      <stop offset="1" stop-color="#FFAC2F" />
                    </radialGradient>
                  </defs>
                </svg>

                <div className="bg-reviewColor dark:bg-slate-600 p-14 text-center w-44">
                  <p className="text-4xl text-customBlue3 dark:text-white font-semibold">
                    {item.head}
                  </p>
                </div>
                <p className="text-center text-customBlack2 leading-5 my-6 group-hover:text-white mx-8 px-2 sm:px-6 dark:text-gray-400">
                  We have reached more than 1.1 million users around the globe
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review1;
