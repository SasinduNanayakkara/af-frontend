import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import AnnouncementCard from "../Components/AnnouncementCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Adminannouncement from "../Components/Admin-Announcement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Announcements() {
  const [announcementData, setAnnouncementData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncementid, setSelectedAnnouncementId] = useState(null);
  const [selectedAnnouncementDescription, setSelectedAnnouncementDescription] =
    useState(null);
  const [selectedAnnouncementTitle, setSelectedAnnouncementTitle] =
    useState(null);
  const [selectedAnnouncementDate, setSelectedAnnouncementDate] =
    useState(null);
  const [selectedAnnouncementTarget, setSelectedAnnouncementTarget] =
    useState(null);
  const [selectedAnnouncementIndex, setSelectedAnnouncementIndex] =
    useState(null);

  const handleAnnouncementClick = (
    id,
    description,
    title,
    date,
    target,
    index
  ) => {
    setSelectedAnnouncementId(id);
    setSelectedAnnouncementDescription(description);
    setSelectedAnnouncementDate(date);
    setSelectedAnnouncementTitle(title);
    setSelectedAnnouncementTarget(target);
    setSelectedAnnouncementIndex(index);
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "https://af-backend.azurewebsites.net/api/announcement/"
      );
      const data = response.data.data;
      // Update the announcementData state with the fetched data
      setAnnouncementData(data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  const [formValues, setFormValues] = useState({
    title: "",
    target: "",
    content: "",
    date:"",
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://af-backend.azurewebsites.net/api/announcement/",
        formValues
      );
      // Handle successful submission, e.g., show a success message
      console.log("Announcement submitted successfully");
      // Refresh the announcement data
      fetchAnnouncements();
      // Close the modal
      closeModal();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  // Function to format the date and time string
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
          <div className="flex flex-col ml-8 overflow-y-scroll max-h-screen">
            {announcementData.map((item, index) => (
              <div key={index}>
                <AnnouncementCard
                  id={item._id}
                  title={item.title}
                  date={formatDateTime(item.createdAt)}
                  onClick={() => {
                    handleAnnouncementClick(
                      item._id,
                      item.content,
                      item.title,
                      item.createdAt,
                      index
                    );
                  }}
                  isSelected={index === selectedAnnouncementIndex}
                />
                <div className="h-[1px] bg-[#D9D9D9] my-1 mx-2"></div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mb-5 ml-3">
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-8"
              onClick={openModal} // Open the modal when the button is clicked
            >
              New Announcement
            </button>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={{
                content: {
                  height: "470px", // Set the desired height
                  width: "30rem", // Set the desired width
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally
                  transform: "translate(-50%, -50%)", // Center using translate
                },
              }}
            >
              <div className="w-2/2 ml-10">
                <div className="flex justify-end">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-gray-500 cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
                {/* Rest of the modal content */}
              </div>
              <div className="w-2/2 ml-10 mr-10">
                <h2 className="text-black font-bold text-center text-3xl">
                  Add Announcement
                </h2>
                <div className="flex justify-center">
                  <div className="w-44 h-[3px] bg-[#F5A624] mt-3 mb-3"></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <label
                        htmlFor="title"
                        className="text-formLable font-semibold mb-2"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-white"
                        value={formValues.title}
                        //   onChange={handleInputChange}
                      />
                    </div>
                  </div>{" "}
                  <div className="flex justify-center">
                    <div className="w-full">
                      <label
                        htmlFor="target"
                        className="text-formLable font-semibold mb-2"
                      >
                        Target Audience
                      </label>
                      <select
                        id="target"
                        className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-white"
                        value={formValues.targetAudience}
                        //   onChange={handleInputChange}
                      >
                        <option value="Client">Client</option>
                        <option value="Consultant">Consultant</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <label
                        htmlFor="content"
                        className="text-formLable font-semibold mb-2"
                      >
                        Content
                      </label>
                      <textarea
                        type="text"
                        id="content"
                        className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-white"
                        value={formValues.content}
                        //   onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full flex justify-center">
                      <button
                        type="submit"
                        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
        <div className="h-screen w-[1px] mt-5 bg-[#D9D9D9] ml-5"></div>
        <div className="w-2/3">
          <Adminannouncement
            id={selectedAnnouncementid}
            description={selectedAnnouncementDescription}
            title={selectedAnnouncementTitle}
            target={selectedAnnouncementTarget}
            date={selectedAnnouncementDate}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Announcements;
