import React from "react";
import quotation from "../Assets/quotation.svg";
const Testimonial = () => {
  return (
    <>
      <div className="con">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 mx-auto text-center">
            <div className=" col-start-2  sm:col-start-4 col-span-10 sm:col-span-6 my-28">
              <h1 className=" text-semibold text-[2.5rem] text-customBlack2  dark:text-gray-400">
                Testimonials
              </h1>
              <hr className="w-24 h-1.5 bg-customYellow mx-auto dark:bg-slate-400" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3   my-0 sm:my-36">
            <div className="col col-span-2 relative">
              <img
                src={quotation}
                alt=""
                className="absolute dark:stroke-blue-400  left-4 2xl:left-32 2xl:bottom-64 sm:left-8   bottom-[550px]  sm:bottom-64 md:left-2 md:bottom-[320px]"
              />
            </div>
            <div className="col col-span-10 mx-6 sm:mx-0">
              <p className="text-lg leading-8 text-customBlack2 dark:text-gray-400">
                Vestibulum placerat scelerisque turpis, ut laoreet erat varius
                ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
                lorem. Nullam sodales lorem libero, ut viverra diam suscipit et.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Etiam ac posuere nunc.
              </p>
              <div className="grid grid-cols-2 my-12">
                <div className="col flex gap-2" id="dots">
                  <svg
                    width="16"
                    className="one"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.80078" cy="7.5" r="7.5" fill="#1b1b1b" />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    className="two"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.80078" cy="7.5" r="7.5" fill="#AEAEAE" />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    className="three"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.80078" cy="7.5" r="7.5" fill="#AEAEAE" />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    className="four"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.80078" cy="7.5" r="7.5" fill="#AEAEAE" />
                  </svg>
                  <svg
                    width="16"
                    height="15"
                    className="five"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.80078" cy="7.5" r="7.5" fill="#AEAEAE" />
                  </svg>
                </div>
                <div className="col flex  justify-end flex-col">
                  <div className="con bg-transparent ml-auto">
                    <p className="dark:text-gray-400">____________</p>
                    <p className="font-semibold  text-xl sm:text-[2.5rem] text-customBlack2 my-4 dark:text-gray-400">
                      Martin Reich
                    </p>
                    <p className="text-sm sm:text-2xl dark:text-gray-400">
                      Physical Therapist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
