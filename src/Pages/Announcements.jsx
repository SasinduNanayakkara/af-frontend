import React, { useState,useEffect } from "react";
import AnnouncementCard from "../Components/AnnouncementCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AnnouncementDetailsCard from "../Components/AnnouncementDetailsCard";
import axios from "axios";

function Announcements() {
  const [selectedAnnouncementDescription, setSelectedAnnouncementDescription] = useState(null);
    const [selectedAnnouncementTitle, setSelectedAnnouncementTitle] = useState(null);
    const [selectedAnnouncementDate, setSelectedAnnouncementDate] = useState(null);
    const [selectedAnnouncementTime, setSelectedAnnouncementTime] = useState(null);
    const [announcementData, setAnnouncementData] = useState([]);

  const handleAnnouncementClick = (description, title, date, time) => {
    setSelectedAnnouncementDescription(description);
    setSelectedAnnouncementDate(date);
    setSelectedAnnouncementTime(time);
    setSelectedAnnouncementTitle(title);
  };

  const role = "consultant"

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "https://af-backend.azurewebsites.net/api/announcement/"
      );
      const data = response.data.data;
      //map data so that only items with "all" or string assinged to role is in the field target
      const filteredData = data.filter((item) => item.target === role || item.target === "all")

      // Update the announcementData state with the fetched data
      setAnnouncementData(filteredData);
      console.log(data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleDateString(undefined, options);
  };

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
                  date={formatDateTime(item.createdAt)}
                  time={item.time}
                  onClick={() => {handleAnnouncementClick(item.content, item.title, item.date, item.time)}}
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
