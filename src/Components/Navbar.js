import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const links = [
    {
      id: 1,
      link: "Products",
    },
    {
      id: 2,
      link: "Claims",
    },
    {
      id: 3,
      link: "Renewals",
    },
    {
      id: 4,
      link: "Support",
    },
  ];

  const menu = document.getElementById("menu");
  const ulMenu = document.getElementById("ulMenu");

  function menuToggle() {
    menu.classList.toggle("h-32");
  }
  return (
    <>
      <nav className="py-5 z-100">
        <div className="container flex flex-wrap items-center justify-between mx-auto sm:relative absolute overflow-hidden">
          <a className="flex" href="#" className="flex ml-5 md:ml-3 lg:ml-0">
            <svg
              className="fill-blueCustom dark:fill-white"
              width="33"
              height="29"
              viewBox="0 0 33 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.2944 14.0282C15.6833 14.4393 16.3167 14.4393 16.7111 14.0282L22.7611 7.68377C24.5167 5.83933 24.4167 2.78377 22.45 1.08377C20.7389 -0.399562 18.1889 -0.132896 16.6222 1.51155L16 2.16155L15.3833 1.5171C13.8167 -0.132896 11.2667 -0.399562 9.55556 1.08377C7.59444 2.78377 7.48889 5.83933 9.24444 7.68377L15.2944 14.0282ZM31.4056 18.3393C30.75 17.7449 29.7278 17.7838 29.0389 18.3393L23.9056 22.4449C23.2778 22.9504 22.4944 23.2227 21.6833 23.2227H15.1111C14.6222 23.2227 14.2222 22.8227 14.2222 22.3338C14.2222 21.8449 14.6222 21.4449 15.1111 21.4449H19.4611C20.3444 21.4449 21.1667 20.8393 21.3111 19.9671C21.4944 18.856 20.6389 17.8893 19.5556 17.8893H10.6667C9.16667 17.8893 7.71667 18.406 6.55 19.3504L3.96667 21.4449H0.888889C0.4 21.4449 0 21.8449 0 22.3338V27.6671C0 28.156 0.4 28.556 0.888889 28.556H20.7111C21.5167 28.556 22.3 28.2838 22.9333 27.7782L31.3333 21.056C32.1778 20.3838 32.2444 19.0949 31.4056 18.3393Z" />
            </svg>
            <span className="text-blueCustom text-2xl font-bold ml-2 dark:text-white">
              WeCare
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            // data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 mr-4 sm:mr-0 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
            // aria-controls="mobile-menu-2"
            // aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class={`w-6 h-6 ${
                open ? "hidden" : ""
              } transition-all duration-900`}
              // `
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class={` w-6 h-6 ${
                open ? "" : "hidden"
              } transition-all duration-900`}
              //
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            id="navLinks"
            class={`my-5 transition ease-out duration-500 sm:transition-transform-none  grow md:flex md:items-center w-full  sm:bg-transparent bg-reviewColor z-40 ${
              !open ? "hidden sm:flex " : ""
            } flex  md:w-auto `}
          >
            {/* bg-gradient-to-b from-cyan-100 to-cyan-50 sm:bg-gradient-to-b
            sm:from-[rgba(0,0,0,0)] sm:to-[rgba[0,0,0,0]] */}
            <ul
              class={`scroll-smooth flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium  md:text-center mx-auto sm:py-0 py-4`}
            >
              {links.map((items) => (
                <li key={items.id}>
                  <a
                    key={items.id}
                    // onClick={() => {
                    //   setClicked2(false);
                    //   setClicked3(false);

                    //   setClicked4(false);
                    //   setClicked(true);
                    // }}
                    href="#"
                    class={`active:border-2 block transition py-2 pr-4 pl-3 text-gray-700  border-gray-100 font-normal text-base  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white  dark:border-gray-700 ${
                      clicked ? "border-b-2 border-slate-400" : ""
                    }`}
                  >
                    {items.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button className="rounded-lg py-2 px-5 font-semibold text-white bg-blueCustom hidden sm:block dark:bg-slate-800 dark:text-white">
            Live chat
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
