import "./App.css";
import bgSvg from "./Assets/bgImage.svg";

import darkHead from "./Assets/darkHead.svg";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Review1 from "./Components/Review1";
import Services from "./Components/Services";
import Team from "./Components/Team";

import Testimonial from "./Components/Testimonial";
import Tips from "./Components/Tips";

function App() {
  return (
    <div className="App ">
      <div
        className="relative  h-full w-full  "
        // style={{ backgroundImage: "url(./Assets/bgImage.png)" }}
      >
        <img
          src={bgSvg}
          alt=""
          className="absolute dark:hidden  block w-screen "
        />
        <img
          src={darkHead}
          alt=""
          className="absolute  dark:block  hidden w-screen sm:hidden"
        />
      </div>
      <Navbar />
      <Head />
      <Services />
      <Tips />
      <Team />
      <Review1 />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
