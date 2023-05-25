import React, { useState , useEffect} from "react";
import ViewConsultantCard from "../Components/ViewConsultantCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ConsultantDetailsCard from "../Components/ConsultantDetailsCard";

function Consultants() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [
    selectedAnnouncementSpecilization,
    setSelectedAnnouncementSpecilization,
  ] = useState(null);
  const [selectedAnnouncementName, setSelectedAnnouncementName] =
    useState(null);
  const [selectedAnnouncementDate, setSelectedAnnouncementDate] =
    useState(null);
  const [selectedAnnouncementTime, setSelectedAnnouncementTime] =
    useState(null);
  const [selectedAnnouncementStatus, setSelectedAnnouncementStatus] =
    useState(null);

  const handleAnnouncementClick = (specilization, name, date, time, status) => {
    setSelectedAnnouncementSpecilization(specilization);
    setSelectedAnnouncementDate(date);
    setSelectedAnnouncementTime(time);
    setSelectedAnnouncementName(name);
    setSelectedAnnouncementStatus(status);
  };

  const consultantData = [
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Approved",
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
    },
    {
      name: "Dr.Shavidini Abhewardhana",
      date: "05 May 2023",
      time: "03:00:10",
      specilization: "Emergency Medicine Specialists",
      status: "Pending",
    },
  ];

  const filteredData = selectedStatus
  ? consultantData.filter((item) => item.status === selectedStatus)
  : consultantData;

  useEffect(() => {
    setSelectedAnnouncementSpecilization(null);
    setSelectedAnnouncementDate(null);
    setSelectedAnnouncementTime(null);
    setSelectedAnnouncementName(null);
    setSelectedAnnouncementStatus(null);
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
              <option value="">
                All
              </option>
              <option value="Pending">Pending</option>
              <option value="Approved">Aprroved</option>
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
                    handleAnnouncementClick(
                      item.specilization,
                      item.name,
                      item.date,
                      item.time,
                      item.status
                    );
                  }}
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
            specilization={selectedAnnouncementSpecilization}
            title={selectedAnnouncementName}
            date={selectedAnnouncementDate}
            time={selectedAnnouncementTime}
            status={selectedAnnouncementStatus}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Consultants;
