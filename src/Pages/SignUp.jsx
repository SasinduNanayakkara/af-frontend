import React, { useState } from "react";
import Footer from "../Components/Footer";
import LandingImg from "../Assets/Landing-home.svg";
import LogoLightPng from "../Assets/LogoLanding.svg";
import image from "../Assets/Pages-Vectors/signUp.svg";
import { Link } from 'react-router-dom';

const Header = () => {
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
            <button className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border bg-black text-white border border-black rounded-md h-fit w-fit border-2 px-8 py-1">
              SignIn
            </button>
          </div>
          <div className="mr-4">
            <button className="transition hover:-translate-y hover:scale-105 duration-200 ease-in-out border  border-black rounded-md h-fit w-fit border-2 px-8 py-1">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const [userType, setUserType] = useState("Client");
  const [formValues, setFormValues] = useState({
    prefix: "Mr.",
    firstName: "",
    lastName: "",
    userType: "Client",
    email: "",
    password: "",
    phone: "",
  });

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleInputChange = (e) => {
    console.log("jj");
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Access form values from the `formValues` state object
  };

  return (
    <div className="flex">
      <div className="bg-white rounded-l-lg overflow-hidden shadow-md flex-1 ml-32 mt-10">
        {/* Content for the left card */}
        <img
          src={image}
          alt="Left Card Image"
          className="w-96 h-96 mx-auto mt-4"
        />
        <p className="font-inter text-ashforsignup text-center ml-20 mr-20 mb-4">
          Our team of experienced consultants is committed to helping you
          achieve your goals and maximize your success. Whether you are a small
          business owner, an entrepreneur, or an individual looking to improve
          your personal or professional life, we are here to help.
        </p>
      </div>
      <div className="bg-ash rounded-r-lg overflow-hidden shadow-md flex-1 mr-32 mt-10">
        {/* Content for the right card */}
        <h1 className="text-black font-bold text-center mt-12 text-4xl">
          Join with Consult Therapy
        </h1>
        <form className="flex flex-wrap ml-10 mt-10" onSubmit={handleSubmit}>
          <div className="w-1/3">
            <label
              htmlFor="prefix"
              className="text-ashforsignup font-bold mb-2"
            >
              Prefix
            </label>
            <select
              id="prefix"
              className="border-2 border-ashforsignup rounded px-2 py-2 mb-4 mt-1 w-44"
              value={formValues.prefix}
              onChange={handleInputChange}
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </div>
          <div className="w-1/3">
            <label
              htmlFor="firstName"
              className="text-ashforsignup font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="border-2 border-ashforsignup rounded px-2 py-2 mb-4 mt-1 w-44"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="lastName"
              className="text-ashforsignup font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="border-2 border-ashforsignup rounded px-3 py-2 mb-4 mt-1 w-44"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="userType"
              className="text-ashforsignup font-bold mb-2"
            >
              User Type
            </label>
            <select
              id="userType"
              className="border-2 border-ashforsignup rounded px-2 py-2 mb-4 mt-1 w-72"
              value={formValues.userType}
              onChange={handleInputChange}
            >
              <option value="Client">Client</option>
              <option value="Consultant">Consultant</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="text-ashforsignup font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 border-ashforsignup rounded px-3 py-2 mb-4 mt-1 w-72"
            />
          </div>
          {formValues.userType === "Consultant" && (
            <>
              <div className="w-1/2">
                <label
                  htmlFor="password"
                  className="text-ashforsignup font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border-2 border-ashforsignup rounded px-3 py-2 mb-4 mt-1 w-72"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className="text-ashforsignup font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  className="border-2 border-ashforsignup rounded px-3 py-2 mb-4 mt-1 w-72"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
          <label htmlFor="location" className="text-ashforsignup font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="border-2 border-ashforsignup rounded px-3 py-2 mb-4 mt-1 w-full"
            value={formValues.location}
            onChange={handleInputChange}
          />
        </div>
            </>
          )}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-ashforsignup font-bold">
            Log In
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
