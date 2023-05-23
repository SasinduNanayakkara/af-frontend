import React, { useState } from "react";
import Profile from "../Assets/Profile.png";
import articleImg from "../Assets/ArticleImage.svg";
import messageIcon from "../Assets/messageIcon.svg";
import ReactStars from "react-rating-stars-component"

function ArticleCard({profilePic, author, designation, title, description, rating, articleImage}) {
  const [ratingCount, setRatingCount] = useState(0);

  const ratingChanged = (newRating = rating) => {
    console.log(newRating);
    setRatingCount(newRating);
  }
  return (
    <div className="border-2 border-white border-b-[#D1D1D1] ">
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row">
            <img src={profilePic ? profilePic : Profile} alt="Profile" className="w-10 h-10 mt-3" />
            <div className="flex, flex-col">
              <h2 className="font-bold mt-3 ml-3">{author}</h2>
              <h6 className="text-sm ml-3 text-[#858585]">{designation}</h6>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-2xl">
              {title}
            </h1>
            <p className="mt-6">
              {description}
            </p>
            <div className="flex flex-row mt-2">
              <img src={messageIcon} alt="message" className="mr-4" />
              <ReactStars count={5} value={rating} size={32} activeColor={"#ffd700"} onChange={ratingChanged} className="focus:border-none" />
            </div>
          </div>
        </div>
        <div className="mt-4 ml-4">
          <img src={articleImage ? articleImage : articleImg} alt="article"   />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
