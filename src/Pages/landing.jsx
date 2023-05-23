import React from "react";
import LandingImg from "../Assets/Landing-home.svg";
import LogoLightPng from "../Assets/LogoLanding.svg";


import ThirdColLeft from "../Assets/Landing-third-section/left-col.svg"
import ThirdColRight from "../Assets/Landing-third-section/right-col.svg"

import Footer from "../Components/Footer";

const Header = () => {
  return (
    <div className="pt-8 px-8">
      <div className="justify-between flex flex-row px-12'">
        <img src={LogoLightPng} className="h-20" />
        <div >
            <ul className='flex-row flex mt-5'>
                <li className="transition hover:-translate-y hover:scale-150 duration-300 ease-in-out hover:font-semibold mr-20 font-medium"> <a href="">Articles</a></li>
                <li className="transition hover:-translate-y hover:scale-150 duration-300 ease-in-out hover:font-semibold mr-20 font-medium"> <a href="">Consultants</a></li>
                <li className="transition hover:-translate-y hover:scale-150 duration-300 ease-in-out hover:font-semibold mr-20 font-medium"> <a href="">FAQ</a></li>
            </ul>
        </div>
        <div className="flex-row flex">
          <div className="mr-4">
            <button className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border bg-black text-white border border-black rounded-md h-fit w-fit border-2 px-8 py-1">SignIn</button>
          </div>
          <div className="mr-4">
          <button className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border  border-black rounded-md h-fit w-fit border-2 px-8 py-1">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstSection = () => {
  return (
    <div className="h-screen bg-white">
      <Header />
      <img src={LandingImg} className="absolute bottom-0 left-0" />
    </div>
  );
};

const SecondSection = () => {
  return <div className="h-screen bg-black"></div>;
};

const ThirdSection = () => {
  return <div className="h-screen bg-white">
    <img src={ThirdColLeft} className="inline-block h-screen pl-40" />
    <img src={ThirdColRight} className="inline-block float-right h-screen" />
  </div>;
};

const ForthSection = () => {
  return <div className="h-screen bg-black"></div>;
};

function Landing() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <Footer />
    </div>
  );
}

export default Landing;
