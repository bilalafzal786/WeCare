import React from "react";
import facebook from "../Assets/facebook.svg";
import twitter from "../Assets/twitter.svg";
import youtube from "../Assets/youtube.svg";

const Footer = () => {
  return (
    <>
      <div className="goo bg-footerColor dark:bg-customBlack">
        <div className="footer bg-right ml-auto">
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-16 sm:py-20 ">
              <div className="col mx-auto mt-12">
                <a
                  className="flex"
                  href="#"
                  className="flex ml-5 md:ml-3 lg:ml-0"
                >
                  <svg
                    className="stroke-blue-700"
                    width="33"
                    height="29"
                    viewBox="0 0 33 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2944 14.0282C15.6833 14.4393 16.3167 14.4393 16.7111 14.0282L22.7611 7.68377C24.5167 5.83933 24.4167 2.78377 22.45 1.08377C20.7389 -0.399562 18.1889 -0.132896 16.6222 1.51155L16 2.16155L15.3833 1.5171C13.8167 -0.132896 11.2667 -0.399562 9.55556 1.08377C7.59444 2.78377 7.48889 5.83933 9.24444 7.68377L15.2944 14.0282ZM31.4056 18.3393C30.75 17.7449 29.7278 17.7838 29.0389 18.3393L23.9056 22.4449C23.2778 22.9504 22.4944 23.2227 21.6833 23.2227H15.1111C14.6222 23.2227 14.2222 22.8227 14.2222 22.3338C14.2222 21.8449 14.6222 21.4449 15.1111 21.4449H19.4611C20.3444 21.4449 21.1667 20.8393 21.3111 19.9671C21.4944 18.856 20.6389 17.8893 19.5556 17.8893H10.6667C9.16667 17.8893 7.71667 18.406 6.55 19.3504L3.96667 21.4449H0.888889C0.4 21.4449 0 21.8449 0 22.3338V27.6671C0 28.156 0.4 28.556 0.888889 28.556H20.7111C21.5167 28.556 22.3 28.2838 22.9333 27.7782L31.3333 21.056C32.1778 20.3838 32.2444 19.0949 31.4056 18.3393Z"
                      fill="#0097FE"
                    />
                  </svg>
                  <span className="text-white text-2xl font-bold ml-2 dark:text-gray-400">
                    WeCare
                  </span>
                </a>
                <p className="text-white text-xl mt-12 sm:text-left text-center dark:text-gray-400">
                  4140 Parker Rd. Allentown, New <br />
                  Mexico 31134
                </p>
              </div>
              <div className="col mx-auto my-12">
                <div className="grid grid-cols-3 gap-x-12 sm:gap-x-8 ">
                  <div className="col">
                    <h1 className="font-bold text-lg text-white dark:text-gray-400">
                      Links
                    </h1>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block  mt-4 "
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Claims
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Renewals
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Support
                    </a>
                  </div>
                  <div className="col">
                    <h1 className="font-bold text-lg text-white dark:text-gray-400">
                      Services
                    </h1>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block  mt-4 "
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Claims
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Renewals
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Support
                    </a>
                  </div>
                  <div className="col">
                    <h1 className="font-bold text-lg text-white dark:text-gray-400">
                      About
                    </h1>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block  mt-4 "
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Claims
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Renewals
                    </a>
                    <a
                      href="#"
                      className="text-base dark:text-gray-400 font-normal text-white block mt-1"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>
              <div className="col mx-auto">
                <div className="flex justify-end mt-2 sm:mt-44">
                  <div className="con w-10 h-10 bg-white rounded-full pl-2 pt-2 dark:bg-slate-600">
                    <svg
                      width="25"
                      height="24"
                      className="dark:fill-white fill-[#0097FE]"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.81238 10V14H10.8124V21H14.8124V14H17.8124L18.8124 10H14.8124V8C14.8124 7.73478 14.9177 7.48043 15.1053 7.29289C15.2928 7.10536 15.5472 7 15.8124 7H18.8124V3H15.8124C14.4863 3 13.2145 3.52678 12.2768 4.46447C11.3392 5.40215 10.8124 6.67392 10.8124 8V10H7.81238Z" />
                    </svg>
                  </div>
                  <div className="con mx-2 w-10 h-10 bg-white rounded-full pl-2 pt-2 dark:bg-slate-600">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      className="dark:fill-white fill-[#0097FE]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.402 4.01001C21.402 4.50001 20.422 4.69901 19.402 5.00001C18.281 3.73501 16.619 3.66501 15.022 4.26301C13.425 4.86101 12.379 6.32301 12.402 8.00001V9.00001C9.15698 9.08301 6.26698 7.60501 4.40198 5.00001C4.40198 5.00001 0.219977 12.433 8.40198 16C6.52998 17.247 4.66298 18.088 2.40198 18C5.70998 19.803 9.31498 20.423 12.436 19.517C16.016 18.477 18.958 15.794 20.087 11.775C20.4238 10.5527 20.591 9.28987 20.584 8.02201C20.582 7.77301 22.094 5.25001 22.402 4.00901V4.01001Z" />
                    </svg>
                  </div>
                  <div className="con mx-2 w-10 h-10 bg-white rounded-full pl-2 pt-2 dark:bg-slate-600">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      className="dark:stroke-white stroke-[#0097FE]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.2948 5.22647L8.30443 4.78708C6.09742 4.69002 4.2296 6.40046 4.13253 8.60747L3.8689 14.6017C3.77183 16.8087 5.48228 18.6765 7.68928 18.7736L17.6796 19.2129C19.8866 19.31 21.7545 17.5996 21.8515 15.3926L22.1151 9.39836C22.2122 7.19136 20.5018 5.32354 18.2948 5.22647Z" />
                      <path d="M10.992 9L15.992 12L10.992 15V9Z" fill="white" />
                    </svg>
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

export default Footer;
