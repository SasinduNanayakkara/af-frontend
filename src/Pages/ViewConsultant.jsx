import React, { useState, useEffect } from "react";
import ViewConsultantCard from "../Components/ViewConsultantCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ConsultantDetailsCard from "../Components/ConsultantDetailsCard";
import axios from "axios";

function Consultants() {
  const [consultantData, setConsultantData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedConsultantId, setSelectedConsultantId] = useState(null);
  const [selectedConsultantFName, setSelectedConsultantFName] = useState(null);
  const [selectedConsultantLName, setSelectedConsultantLName] = useState(null);
  const [selectedConsultantDate, setSelectedConsultantDate] = useState(null);
  const [selectedConsultantSpecilization, setSelectedConsultantSpecilization] =
    useState(null);
  const [selectedConsultantStatus, setSelectedConsultantStatus] =
    useState(null);
  const [selectedConsultantLocation, setSelectedConsultantLocation] =
    useState(null);
  const [selectedConsultantAboutMe, setSelectedConsultantAboutMe] =
    useState(null);
  const [selectedConsultantEmail, setSelectedConsultantEmail] = useState(null);
  const [selectedConsultantPhone, setSelectedConsultantPhone] = useState(null);
  const [selectedConsultantSkill, setSelectedConsultantSkill] = useState(null);
  const [selectedConsultantIndex, setSelectedConsultantIndex] = useState(null);

  const handleConsultantClick = (
    id,
    fname,
    lname,
    date,
    specilization,
    status,
    location,
    aboutme,
    email,
    phone,
    skills,
    index
  ) => {
    setSelectedConsultantId(id);
    setSelectedConsultantFName(fname);
    setSelectedConsultantLName(lname);
    setSelectedConsultantDate(date);
    setSelectedConsultantSpecilization(specilization);
    setSelectedConsultantStatus(status);
    setSelectedConsultantLocation(location);
    setSelectedConsultantAboutMe(aboutme);
    setSelectedConsultantEmail(email);
    setSelectedConsultantPhone(phone);
    setSelectedConsultantSkill(skills);
    setSelectedConsultantIndex(index);
  };

  const filteredData = selectedStatus
    ? consultantData.filter((item) => item.status === selectedStatus)
    : consultantData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://af-backend.azurewebsites.net/api/consultant/"
        );
        const data = response.data.data;
        // Set the fetched data in your component state
        setConsultantData(data);
      } catch (error) {
        console.error("Error fetching consultant data:", error);
      }
    };

    fetchData();
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

  useEffect(() => {
    setSelectedConsultantId(null);
    setSelectedConsultantFName(null);
    setSelectedConsultantLName(null);
    setSelectedConsultantDate(null);
    setSelectedConsultantSpecilization(null);
    setSelectedConsultantStatus(null);
    setSelectedConsultantLocation(null);
    setSelectedConsultantAboutMe(null);
    setSelectedConsultantEmail(null);
    setSelectedConsultantPhone(null);
    setSelectedConsultantSkill(null);
  }, [selectedStatus]);

  return (
    <div className="">
      <Header />
      <div className="flex flex-row ">
        <div className="w-1/3">
          <div className="w-full flex justify-center ml-8 mt-4">
            <select
              id="status"
              className="border-2 border-[#9B9B9B] px-2 py-2 mb-4 mt-1 w-full bg-white mr-8 rounded-lg font-semibold text-[#CACACA]"
              // defaultValue=""
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Aprroved</option>
              <option value="Rejected">Rejected</option>
              <option value="Removed">Removed</option>
            </select>
          </div>

          <div className="flex flex-col ml-8 overflow-y-scroll max-h-screen">
            {filteredData.map((item, index) => (
              <div key={item._id}>
                <ViewConsultantCard
                  id={item._id}
                  fname={item.firstName}
                  lname={item.lastName}
                  date={formatDateTime(item.dateTime)}
                  specilization={item.specialization}
                  status={item.status}
                  onClick={() => {
                    handleConsultantClick(
                      item._id,
                      item.firstName,
                      item.lastName,
                      item.dateTime,
                      item.specialization,
                      item.status,
                      item.location,
                      item.description,
                      item.email,
                      item.phone,
                      item.skills,
                      index
                    );
                  }}
                  isSelected={selectedConsultantIndex === index}
                  isVisible={!selectedStatus || item.status === selectedStatus}
                />
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-2"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-screen w-[1px] mt-5 bg-[#D9D9D9] ml-5"></div>
        <div className="w-2/3">
          <ConsultantDetailsCard
            id={selectedConsultantId}
            specilization={selectedConsultantSpecilization}
            fname={selectedConsultantFName}
            lname={selectedConsultantLName}
            date={selectedConsultantDate}
            status={selectedConsultantStatus}
            location={selectedConsultantLocation}
            aboutme={selectedConsultantAboutMe}
            email={selectedConsultantEmail}
            phone={selectedConsultantPhone}
            skills={selectedConsultantSkill}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultants;
