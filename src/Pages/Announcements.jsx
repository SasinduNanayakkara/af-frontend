import React, { useState } from "react";
import AnnouncementCard from "../Components/AnnouncementCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AnnouncementDetailsCard from "../Components/AnnouncementDetailsCard";

function Announcements() {
  const [selectedAnnouncementDescription, setSelectedAnnouncementDescription] = useState(null);
    const [selectedAnnouncementTitle, setSelectedAnnouncementTitle] = useState(null);
    const [selectedAnnouncementDate, setSelectedAnnouncementDate] = useState(null);
    const [selectedAnnouncementTime, setSelectedAnnouncementTime] = useState(null);

  const handleAnnouncementClick = (description, title, date, time) => {
    setSelectedAnnouncementDescription(description);
    setSelectedAnnouncementDate(date);
    setSelectedAnnouncementTime(time);
    setSelectedAnnouncementTitle(title);
  };

  const announcementData = [
    {
      title:
        "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
      date: "05 May 2023",
      time: "03:00:10",
      description:
        "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
    },
    {
      title:
        "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
      date: "05 June 2023",
      time: "03:00:10",
      description:
        "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
    },
    {
      title:
        "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
      date: "05 August 2023",
      time: "03:00:10",
      description:
        "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
    },
    {
      title:
        "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
      date: "05 May 2024",
      time: "03:00:10",
      description:
        "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
    },
    {
      title:
        "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
      date: "05 May 2013",
      time: "03:00:10",
      description:
        "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
    },
    {
        title:
          "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
        date: "05 May 2013",
        time: "03:00:10",
        description:
          "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
      },{
        title:
          "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
        date: "05 May 2013",
        time: "03:00:10",
        description:
          "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
      },{
        title:
          "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
        date: "05 May 2013",
        time: "03:00:10",
        description:
          "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
      },{
        title:
          "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
        date: "05 May 2013",
        time: "03:00:10",
        description:
          "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
      },{
        title:
          "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
        date: "05 May 2013",
        time: "03:00:10",
        description:
          "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
      },{
        title:
          "Scheduled maintenance of IT systems is an almost unavoidable part of life.",
        date: "05 May 2013",
        time: "03:00:10",
        description:
          "We would like to inform you that we have scheduled a maintenance period for our IT systems to ensure that we continue to provide you with the best possible service. During this time, there may be some disruptions to our services, but we will do everything we can to keep these to a minimum.",
      },
  ];
  return (
    <div className="">
      <Header />
      <div className="flex flex-row ">
        <div className="w-1/3">
          <div className="flex flex-col ml-8 overflow-scroll max-h-screen">
            {announcementData.map((item, index) => (
              <div>
                <AnnouncementCard
                  title={item.title}
                  date={item.date}
                  time={item.time}
                  onClick={() => {handleAnnouncementClick(item.description, item.title, item.date, item.time)}}
                />
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-2"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-screen w-[1px] mt-5 bg-[#D9D9D9] ml-5"></div>
        <div className="w-2/3">
          <AnnouncementDetailsCard description={selectedAnnouncementDescription} title={selectedAnnouncementTitle} date={selectedAnnouncementDate} time={selectedAnnouncementTime} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Announcements;
