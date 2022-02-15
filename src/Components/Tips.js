import React from "react";
import tips1Image from "../Assets/tips1.svg";
import tips2Image from "../Assets/tips2.svg";
import tips3Image from "../Assets/tips3.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    paritialVisibilityGutter: 60,
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    paritialVisibilityGutter: 50,

    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    paritialVisibilityGutter: 40,

    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    paritialVisibilityGutter: 30,

    items: 1,
  },
};

const Tips = () => {
  const data = [
    {
      id: 1,
      heading: "Qualitative research in nursing and healthcare",
      img: tips1Image,
      p1: "05 min read",
      p2: "Healthcare",
    },
    {
      id: 2,
      heading: "Journal of healthcare management",
      img: tips2Image,
      p1: "07 min read",
      p2: "Management",
    },
    {
      id: 3,
      heading: "Solving covid pandemic’s mental health crisis",
      img: tips3Image,
      p1: "02 min read",
      p2: "Corona Virus",
    },
  ];
  return (
    <>
      <div className="con">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mx-auto text-center">
            <div className="">
              <h1 className=" text-semibold text-[2.5rem] text-customBlack2  my-6 dark:text-gray-400">
                Health Tips and Tricks
              </h1>
              <p className="text-2xl font-normal text-customBlack2 dark:text-gray-400 lg:px-44">
                A Collection of guides, tips, suggestions and tricks to improve
                your Health
              </p>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-16"> */}
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="my-8 mx-12"
          >
            {data.map((item) => (
              <div
                className="col items-center flex flex-col border   my-8 mx-12 sm:mx-0 cursor-pointer"
                key={item.id}
              >
                <img src={item.img} alt="" />
                <p className="font-semibold text-2xl text-blueCustom2 mt-4  mb-6 group-hover:text-white text-center dark:text-gray-400">
                  {item.heading}
                </p>
                <div className="grid grid-cols-2 my-3 felx-row">
                  <p className="text-center text-customBlack2 leading-5 my-2 group-hover:text-white mx-4 dark:text-gray-400">
                    {item.p1}
                  </p>
                  <p className="text-center text-customBlack2 leading-5 my-2  group-hover:text-white  mx-4 dark:text-gray-400">
                    {item.p2}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
          {/* </div> */}
          <div className="grid grid-cols-1 ">
            <button className="bg-customYellow rounded-md text-white text-2xl font-semibold px-8 py-3 w-48 mx-auto hover:translate-y-2 hover:bg-customYellow2 dark:bg-slate-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
