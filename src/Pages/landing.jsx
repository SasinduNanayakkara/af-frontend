import React from "react";
import LandingImg from "../Assets/Landing-home.svg";
import LogoLightPng from "../Assets/LogoLanding.svg";
import { useNavigate } from "react-router";

import SecondRight from "../Assets/WorldImgLanding.svg";

import ThirdColLeft from "../Assets/Landing-third-section/left-col.svg";
import ThirdColRight from "../Assets/Landing-third-section/right-col.svg";

import ForthWorld from "../Assets/ForthWordLanding.svg";

import Footer from "../Components/Footer";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-8 px-8">
      <div className="justify-between flex flex-row px-12'">
        <img src={LogoLightPng} className="h-20" />
        <div>
          <ul className="flex-row flex mt-5">
            <li className="transition hover:-translate-y hover:scale-150 duration-300 ease-in-out hover:font-semibold mr-20 font-medium">
              {" "}
              <a href="">Articles</a>
            </li>
            <li className="transition hover:-translate-y hover:scale-150 duration-300 ease-in-out hover:font-semibold mr-20 font-medium">
              {" "}
              <a href="">Consultants</a>
            </li>
            <li className="transition hover:-translate-y hover:scale-150 duration-300 ease-in-out hover:font-semibold mr-20 font-medium">
              {" "}
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex-row flex">
          <div className="mr-4">
            <button
              onClick={() => navigate("/signin")}
              className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border bg-black text-white border border-black rounded-md h-fit w-fit border-2 px-8 py-1"
            >
              SignIn
            </button>
          </div>
          <div className="mr-4">
            <button
              onClick={() => navigate("/signup")}
              className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border  border-black rounded-md h-fit w-fit border-2 px-8 py-1"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FirstSection = () => {
  return (
    <div className=" bg-white ">
      <div className="">
        <Header />
      </div>

      <div>
        <img src={LandingImg} className=" md:ml-20" />
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div className="h-screen bg-black flex justify-center flex-row">
      <div className="w-2/3 pl-20 ">
        <p className="text-white text-5xl font-semibold font-inter mb-10 mt-32">
          Global Community
        </p>
        <p className="text-white text-[1.1rem] font-medium font-inter">
          The community that individuals function within can have a significant
          influence on their identity and connection to others. A community
          counselor can work with groups of people experiencing an increased
          amount of psychological distress to help determine and address the
          source of the disturbance.
        </p>
        <button
          type="submit"
          className="bg-black border-2 font-semibold font-inter border-x-ash hover:bg-blue-700 text-white py-2 px-3 my-20 rounded-3xl w-1/4"
        >
          Meet consultant Now
        </button>
        <p
          className="font-bold mb-5 text-[1.15rem]"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #F9A826, #77E075, #5CF8E5, #1C1D1D)",
          }}
        >
          The community that individuals function within can have a significant
          “Understanding why people suffer, how they change, and how to help
          them live more satisfying and gratifying lives is a fascinating, huge,
          and important undertaking.”
        </p>
        <p
          className="font-bold text-[1.15rem]"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #F9A826, #77E075, #5CF8E5, #1C1D1D)",
          }}
        >
          -Sommers-Flanagan & Sommers-Flanagan
        </p>
      </div>
      <div className="">
        <img src={SecondRight} className="inline-block h-screen" />
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="h-screen bg-white">
      <img src={ThirdColLeft} className="inline-block h-screen pl-40" />
      <img src={ThirdColRight} className="inline-block float-right h-screen" />
    </div>
  );
};

const ForthSection = () => {
  return (
    <div className="h-screen bg-black relative">
      <div className="grid justify-self-end absolute">
        <img
          src={ForthWorld}
          className="inline-block h-screen justify-self-end"
        />
      </div>
      <div className="inline-block w-1/2 pl-20 flex-col">
        <p className="text-white text-5xl font-semibold font-inter md:mt-32">
          Community Feedbacks
        </p>
        <p className="text-white text-base font-semibold font-inter md:mb-5 mt-10">
          Mark is one of the most practical, empathetic, rational and fun
          individuals I’ve been able to interact with. He is ethical,
          thoughtful, balanced yet direct and to the point. I would absolutely
          recommend him to others and have already done so. He provided such a
          great atmosphere for me and my wife to really engage in our views.
          Both of us have come out of our interactions with a positive view on
          how helpful the sessions have been. Of course, there will be tough
          moments, but Mark did a great job of facilitating.
        </p>
        <p className="font-bold text-[1.15rem] text-white">
          - Andrea N.B. Auckland
        </p>
      </div>
      <div className="md:ml-[45rem] w-1/2">
        <p
          className="text-white text-base font-semibold font-inter md:mb-5 mt-10"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #F9A826, #77E075, #5CF8E5, #1C1D1D)",
          }}
        >
          Dr Sebastian Greene has been an instrumental part of a fundamental
          shift in my emotional and mental well-being. With tendencies of
          suffering great lows and destructive patterns of thinking, Mark has
          given me the tools to understand my thoughts, actions and recognize
          behaviors. By increasing my awareness to the shadow he has helped me
          address my biggest hurdle in life, that of relationships. I'm deeply
          grateful to Mark for his sage advice and continuing support
        </p>
        <p
          className="font-bold text-base"
          style={{
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundImage:
              "linear-gradient(to right, #F9A826, #77E075, #5CF8E5, #1C1D1D)",
          }}
        >
          - Darwin L.D. England
        </p>
      </div>
    </div>
  );
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
