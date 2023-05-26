import React, { useState } from "react";
import Dante from "Dante2";
import Profile from "../Assets/Profile.svg";

const onChangeHandler = (editor) => {
  console.log(editor);
};

function ArticleCompose({
  profilePic,
  name,
  specilization,
  locationimg,
  location,
}) {
  return (
    <div>
      <div className=" flex-col px-5 w-full">
        <div className="flex flex-row">
          <div className="w-1/9">
            <img
              src={profilePic ? profilePic : Profile}
              alt="Profile"
              className="w-24 h-24 mt-7"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mt-10 ml-8 text-xl mb-3">{name}</h4>
            <h6 className="text-[18px] ml-8 mb-3 text-[#858585] font-semibold">
              {specilization}
            </h6>
          </div>
        </div>
      </div>
      <div className="h-screen mx-12 mt-12">
        <Dante onChange={onChangeHandler} />
      </div>
    </div>
  );
}

export default ArticleCompose;
