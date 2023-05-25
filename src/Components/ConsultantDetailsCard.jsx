import React from "react";
import Profile from "../Assets/Profile.png";
import videoIcon from "../Assets/Pages-Vectors/videoIcon.svg";
import locationimg from "../Assets/Pages-Vectors/Location.svg";
import chatimg from "../Assets/Pages-Vectors/chatIcon.svg";

function ConsultantDetailsCard({
  name,
  date,
  time,
  onClick,
  specilization,
  status,
  location,
  aboutme,
  email,
  phone,
  profilePic,
  skills
}) {
  const handleClick = () => {
    onClick();
  };

  let statusClass = "";
  let statusBackgroundClass = "";

  if (status === "Pending") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#007320]";
  } else if (status === "Approved") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#F5A624]";
  } else if (status === "Rejected") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#FF1F00]";
  } else if (status === "Removed") {
    statusClass = "text-white";
    statusBackgroundClass = "bg-[#FD7373]";
  }

  return (
    <>
      <div className=" flex-col px-9 w-full">
        <div className="flex flex-row">
          <div className="w-1/7">
            <img
              src={profilePic ? profilePic : Profile}
              alt="Profile"
              className="w-32 h-32 mt-10"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold mt-10 ml-8 text-xl mb-3">{name}</h2>
            <h6 className="text-[18px] ml-8 mb-3 text-[#858585] font-semibold">
              {specilization}
            </h6>
            <div className="flex flex-row ml-8 mb-3">
              <div>
                <img src={locationimg} alt="Profile" className="w-6 h-6" />
              </div>
              <div>
                <h6 className="text-[18px] text-[#858585] font-semibold ml-4">
                  {location}
                </h6>
              </div>
            </div>
            <p
              className={`font-medium ${statusClass} ${statusBackgroundClass} ml-8 mb-6 w-20 h-5 px-3 py-1 flex items-center justify-center rounded-2xl text-[0.85rem]`}
            >
              {status}
            </p>
          </div>
          <div className="flex flex-col w-1/2 mt-10">
            <div className="flex justify-end">
              <img src={videoIcon} alt="video" className="w-10 h-10" />
            </div>
            <div className="flex justify-end">
              <img src={chatimg} alt="chat" className="w-9 h-9" />
            </div>
          </div>
        </div>
        <h5 className="text-[#000000] font-bold text-xl">
          {skills}
        </h5>
        <p className="mt-6 text-justify mr-10">{aboutme}</p>
        <div className="flex flex-row">
          <p className="font-semibold text-formLable mt-6 mr-3 text-justify">
            Contact Information:
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-6 text-justify text-[#1f2980]"
          >
            {email}
          </a>
        </div>
        <p className="mt-2 ml-[10rem] text-justify">{phone}</p>
        <button type="submit" className="bg-black text-white">
              AAA
            </button>
      </div>
    </>
  );
}

export default ConsultantDetailsCard;
