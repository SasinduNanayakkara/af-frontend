import React, { useState } from "react";
import Footer from "../../Components/Footer";
import LandingImg from "../../Assets/Landing-home.svg";
import LogoLightPng from "../../Assets/LogoLanding.svg";
import image from "../../Assets/Pages-Vectors/signIn.svg";
import { Link } from "react-router-dom";
import { API_URL } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            <button onClick={()=> navigate("/signin")} className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border bg-black text-white border border-black rounded-md h-fit w-fit border-2 px-8 py-1">
              SignIn
            </button>
          </div>
          <div className="mr-4">
            <button onClick={()=> navigate("/signup")} className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border  border-black rounded-md h-fit w-fit border-2 px-8 py-1">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.access_token);
        localStorage.setItem("role", response.data.data.user.role);
        if (localStorage.getItem("role") === "client") {
          localStorage.setItem("user", JSON.stringify(response.data.data.user.isClient));
        }
        if (localStorage.getItem("role") === "consultant") {
          localStorage.setItem("user", JSON.stringify(response.data.data.user.isConsultant));
        }
        console.log(localStorage.getItem("token"));
        console.log("user data", localStorage.getItem("user"));
        console.log(localStorage.getItem("role"));
        if (localStorage.getItem("role") === "client") {
          navigate("/client/home");
        }
        if (localStorage.getItem("role") === "consultant") {
          navigate("/consultant/home");
        }
      }
    }
    catch (error) {
      console.log(error);
    }

    // Handle form submission logic here
    // Access form values from the `formValues` state object
  };

  return (
    <div className="flex mb-10">
      <div className="bg-white rounded-l-lg overflow-hidden shadow-md flex-1 ml-32 mt-8">
        {/* Content for the left card */}
        <img
          src={image}
          alt="Left Card Image"
          className="w-96 h-96 mx-auto mt-4"
        />
      </div>
      <div className="bg-ash rounded-r-lg overflow-hidden shadow-md flex-1 mr-32 mt-8">
        {/* Content for the right card */}
        <h1 className="text-black font-bold text-center mt-8 text-3xl">
          Log in to Consult Therapy
        </h1>
        <form
          className="flex flex-wrap ml-20 mr-20 mt-8 justify-center"
        >
          <div className="w-full">
            <label
              htmlFor="username"
              className="text-formLable font-semibold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-ash"
              //   value={formValues.userName}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="password"
              className="text-formLable font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-ash"
              //   value={formValues.password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center mt-4 mb-8">
          <p>
            <Link to="/forgotpassword" className="text-ashforsignup font-bold">
              Forgot Password
            </Link>
          </p>
        </div>

        </form>
          <div className="w-full flex justify-center mb-4">
            <button
            onClick={() => handleSubmit()}
              className="bg-black hover:bg-blue-700 text-white mx-14 font-bold py-2 px-4 rounded w-full"
            >
              SignIn
            </button>
          </div>
        <div className="text-center mt-4 mb-8">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-ashforsignup font-bold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

function SignUp() {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default SignUp;
