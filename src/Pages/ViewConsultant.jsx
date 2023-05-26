import React, { useState, useEffect } from "react";
import ViewConsultantCard from "../Components/ViewConsultantCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ConsultantDetailsCard from "../Components/ConsultantDetailsCard";


function Consultants() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedConsultantName, setSelectedConsultantName] = useState(null);
  const [selectedConsultantDate, setSelectedConsultantDate] = useState(null);
  const [selectedConsultantTime, setSelectedConsultantTime] = useState(null);
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
    name,
    date,
    time,
    specilization,
    status,
    location,
    aboutme,
    email,
    phone,
    skills,
    index
  ) => {
    setSelectedConsultantName(name);
    setSelectedConsultantDate(date);
    setSelectedConsultantTime(time);
    setSelectedConsultantSpecilization(specilization);
    setSelectedConsultantStatus(status);
    setSelectedConsultantLocation(location);
    setSelectedConsultantAboutMe(aboutme);
    setSelectedConsultantEmail(email);
    setSelectedConsultantPhone(phone);
    setSelectedConsultantSkill(skills);
    setSelectedConsultantIndex(index);
  };

  const consultantData = [
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Approved",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Removed",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Rejected",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
      location: "New Kandy Road,Malabe",
      aboutme:
        "Hi, I'm Sarah, a certified health consultant with over 8 years of experience helping individuals achieve their health and wellness goals. My approach is holistic and personalized, taking into account each client's unique needs and preferences.Health and wellness consulting services, including nutrition counseling, fitness coaching, stress management, and lifestyle modification. I specialize in working with individuals who want to improve their overall health and well-being, manage chronic conditions, or achieve specific health goals.Relevant Experience:Health Consultant at ABC Wellness, where I provided one-on-one health coaching services and designed and delivered corporate wellness programs.Nutritionist at XYZ Clinic, where I provided nutrition counseling to individuals with various health conditions, including diabetes, heart disease, and obesity.",
      emial: "abhegunwarshana@gmail.com",
      phone: "+94703009912",
      skills: ["Stress Management ", "Lifestyle Modification "],
    },
  ];

  const filteredData = selectedStatus
    ? consultantData.filter((item) => item.status === selectedStatus)
    : consultantData;

  useEffect(() => {
    setSelectedConsultantName(null);
    setSelectedConsultantDate(null);
    setSelectedConsultantTime(null);
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
              <div>
                <ViewConsultantCard
                  name={item.name}
                  date={item.date}
                  time={item.time}
                  specilization={item.specilization}
                  status={item.status}
                  onClick={() => {
                    handleConsultantClick(
                      item.name,
                      item.date,
                      item.time,
                      item.specilization,
                      item.status,
                      item.location,
                      item.aboutme,
                      item.emial,
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
            specilization={selectedConsultantSpecilization}
            name={selectedConsultantName}
            date={selectedConsultantDate}
            time={selectedConsultantTime}
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
