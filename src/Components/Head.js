import React from "react";
import img from "../Assets/image1.png";
import img2 from "../Assets/polygon.png";
import polygon from "../Assets/polygon.svg";
import headGroupImage from "../Assets/headGroupImage.svg";

const Head = () => {
  return (
    <>
      <div className="z-10 jn">
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 items-center justify-end my-28 gap-x-16">
            <div className="col  hidden sm:block z-30">
              <img src={headGroupImage} alt="" className="" />
            </div>
            <div className="col text-center sm:text-left relative z-30">
              <p className="text-blueCustom font-medium text-2xl dark:text-gray-400">
                Qusique Tincidun sapien
              </p>
              <h1 className="font-semibold  text-[4.6rem] text-customBlack dark:text-gray-400">
                All natural ingredients
              </h1>
              <p className="text-base font-normal text-customBlack2 my-8 leading-8 px-10 sm:px-0 dark:text-gray-400">
                Vestibulum placerat scelerisque turpis, ut laoreet erat varius
                ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper
                lorem. Nullam sodales lorem libero, ut viverra diam suscipit et.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Etiam ac posuere nunc.
              </p>
              <div className="grid grid-cols-12 gap-x-3 bg-white p-4 shadow-lg dark:bg-slate-900 ">
                <div className="col  col-span-6  sm:col-span-4 flex items-center dark:text-gray-400">
                  <svg
                    width="14"
                    height="20"
                    className="stroke-svgColor dark:stroke-white"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.56738 8.50659C8.77652 8.50659 10.5674 6.71573 10.5674 4.50659C10.5674 2.29745 8.77652 0.506592 6.56738 0.506592C4.35824 0.506592 2.56738 2.29745 2.56738 4.50659C2.56738 6.71573 4.35824 8.50659 6.56738 8.50659Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.567383 18.5066V16.5066C0.567383 15.4457 0.98881 14.4283 1.73896 13.6782C2.4891 12.928 3.50652 12.5066 4.56738 12.5066H8.56738C9.62825 12.5066 10.6457 12.928 11.3958 13.6782C12.146 14.4283 12.5674 15.4457 12.5674 16.5066V18.5066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="ml-2 text-customBlack2 text-sm break-all dark:text-gray-400">
                    Doctor name
                  </span>
                </div>
                <div className="col flex items-center  col-span-6  sm:col-span-3">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    className="stroke-svgColor dark:stroke-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.88916 21.5066H21.8892"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.88916 21.5066V5.50659C5.88916 4.97616 6.09987 4.46745 6.47495 4.09238C6.85002 3.71731 7.35873 3.50659 7.88916 3.50659H17.8892C18.4196 3.50659 18.9283 3.71731 19.3034 4.09238C19.6784 4.46745 19.8892 4.97616 19.8892 5.50659V21.5066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.88916 21.5066V17.5066C9.88916 16.9762 10.0999 16.4675 10.4749 16.0924C10.85 15.7173 11.3587 15.5066 11.8892 15.5066H13.8892C14.4196 15.5066 14.9283 15.7173 15.3034 16.0924C15.6784 16.4675 15.8892 16.9762 15.8892 17.5066V21.5066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.8892 9.50659H14.8892"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.8892 7.50659V11.5066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="ml-2 text-customBlack2 text-sm dark:text-gray-400">
                    Zip code
                  </span>
                </div>
                <div className="col flex items-center col-span-6  sm:col-span-3">
                  <svg
                    width="25"
                    height="25"
                    className="stroke-svgColor dark:stroke-white"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18811 5.50659V21.5066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.1881 5.50659V14.5066"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.18811 5.50643C6.12275 4.5903 7.37935 4.07715 8.68811 4.07715C9.99687 4.07715 11.2535 4.5903 12.1881 5.50643C13.1228 6.42257 14.3793 6.93572 15.6881 6.93572C16.9969 6.93572 18.2535 6.42257 19.1881 5.50643"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.18811 14.5067C6.12275 13.5905 7.37935 13.0774 8.68811 13.0774C9.99687 13.0774 11.2535 13.5905 12.1881 14.5067C13.1228 15.4228 14.3793 15.936 15.6881 15.936C16.9969 15.936 18.2535 15.4228 19.1881 14.5067"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="ml-2 text-customBlack2 text-sm dark:text-gray-400">
                    Insurance
                  </span>
                </div>
                <div className="col flex items-center sm:justify-self-end justify-self-start col-span-6  sm:col-span-2">
                  <span className=" bg-blueCustom p-2 rounded-md ml-auto text-sm">
                    <svg
                      width="25"
                      height="24"
                      className="stroke-svgColor dark:stroke-white"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6456 17C14.5116 17 17.6456 13.866 17.6456 10C17.6456 6.13401 14.5116 3 10.6456 3C6.77964 3 3.64563 6.13401 3.64563 10C3.64563 13.866 6.77964 17 10.6456 17Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.6456 21L15.6456 15"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
