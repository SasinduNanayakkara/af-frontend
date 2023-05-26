import React from "react";
import Profile from "../Assets/Profile.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReactStars from "react-rating-stars-component"
import messageIcon from "../Assets/messageIcon.svg";
import { useLocation } from "react-router-dom";


function ClientArticle() {
  const location = useLocation();
  const {profilePic, author, designation, title, description, rating, articleImage, article} = location.state;
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-between mx-16">
        <div className="flex flex-row">
          <img src={Profile} alt="Profile" className="w-15 h-15 mt-3" />
          <div className="flex, flex-col ml-1">
            <h2 className="font-bold mt-3 ml-3">{author}</h2>
            <h6 className="text-sm ml-3 text-[#858585]">{designation}</h6>
          </div>
        </div>
        <img src={messageIcon} alt="msg" />
      </div>
      <div className="mx-16">
        <div className="h-[2px] w-full bg-[#D1D1D1] my-2 mt-5"></div>
      </div>
      <div className="mx-16">
        <h1 className="font-bold mt-3 text-[26px]">
          {title}
        </h1>
        <h5 className="text-[#868686] text-lg">
          {description}
        </h5>
      </div>
      <div className="mx-16 mt-4 mb-7">
        <img
          src="https://cdn.vox-cdn.com/thumbor/Ud01bY7Cq96hTiS6CPRjc2rngXw=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg"
          alt="articleimage"
        />
      </div>
      <div className="mx-16">
        <p className="text-lg">
          {article}
        </p>
      </div>
      <div className="mx-16 mt-5 mb-8">
      <ReactStars count={5} value={rating} size={32} activeColor={"#ffd700"} className="focus:border-none" />
      </div>
      <Footer />
    </div>
  );
}

export default ClientArticle;
