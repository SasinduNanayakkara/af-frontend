import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import anouncementImange from "../Assets/Pages-Vectors/Admin-Announcement.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../App";

function AnnouncementDetailsCard({id, description, title, date, time, target }) {
  const [consultantId, setAnnouncementId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelModalOpen, setDelModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementTarget, setAnnouncementTarget] = useState("");
  const [content, setContent] = useState("");

 



  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URL}/announcement`);
    }
    catch (error) {
      console.error(error);
    }
  }


  const openModal = () => {
    setIsModalOpen(true);
  };

  const openDelModal = () => {
    setDelModalOpen(true);
    setAnnouncementId(id);
  };

  const openEditModal = () => {
    setAnnouncementTarget(target);
    setAnnouncementTitle(title);
    setContent(description);
    setEditModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closDeleModal = () => {
    setDelModalOpen(false);
    setAnnouncementId(id);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form values from the `formValues` state object
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

    const handleDelete = (announcementId) => {
      axios
        .delete(
          `https://af-backend.azurewebsites.net/api/announcement/${announcementId}`
        )
        .then((response) => {
          // Handle successful deletion, such as updating the UI or showing a success message
          console.log("Announcement removed successfully");
          // Close the modal if needed
          closDeleModal();
        })
        .catch((error) => {
          // Handle error, such as displaying an error message
          console.error("Error removing consultant:", error);
        });
    };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    {isLoaded && (
    <div>
       <div className=" flex-col px-9 w-full">
        <div className="flex justify-center items-center mt-10">
          <img src={anouncementImange} alt="announcement" className="h-96" />
        </div>
        <h1 className="font-bold text-xl mt-9">{title}</h1>
        <div className="h-[2px] w-full bg-[#D1D1D1] my-2"></div>
      </div>
      <h5 className="text-[#8B8B8B] ml-9">
      {formatDateTime(date)}
      </h5>
      <p className="mt-6 mx-9 text-justify">{description}</p> 
      <div className="w-28 flex justify-end mt-5 ml-[850px]">
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
              onClick={openEditModal}
            >
              Edit
            </button>
            <Modal
              isOpen={isEditModalOpen}
              onRequestClose={closeEditModal}
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
                    onClick={closeEditModal}
                  />
                </div>
                {/* Rest of the modal content */}
              </div>
              <div className="w-2/2 ml-10 mr-10">
                <h2 className="text-black font-bold text-center text-3xl">
                  Edit Announcement
                </h2>
                <div className="flex justify-center">
                  <div className="w-44 h-[3px] bg-[#F5A624] mt-3 mb-3"></div>
                </div>
                <form>
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
                        onChange={(e) => setAnnouncementTitle(e.target.value)}
                        value={announcementTitle}
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
                        defaultValue={announcementTarget}
                        onChange={(e) => setAnnouncementTarget(e.target.value)}
                      >
                        <option value="client">Client</option>
                        <option value="consultant">Consultant</option>
                        <option value="all">Both</option>
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
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full flex justify-center">
                      <button
                      conClick={() => handleUpdate()}
                        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Modal>
            <button
              type="submit"
              className="bg-[#FD4F4F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
              onClick={openDelModal} // Open the modal when the button is clicked
            >
              Delete
            </button>
            <Modal
              isOpen={isDelModalOpen}
              onRequestClose={closDeleModal}
              style={{
                content: {
                  height: "240px", // Set the desired height
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
                    onClick={closDeleModal}
                  />
                </div>
                {/* Rest of the modal content */}
              </div>
              <h2 className="flex justify-center font-bold text-3xl mb-4">Are you sure?</h2>
              <p className="font-normal ml-6">Do you really want to delete these records? This process cannot be undone.</p>
              <div className="w-28 flex justify-center mt-5 ml-64">
                <button
                type="submit"
                className="bg-[#FD4F4F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                onClick={() => handleDelete(id)}
              >
                Confirm
              </button>
              <button
                type="submit"
                className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                onClick={closDeleModal}
              >
                Cancel
              </button>
              </div>
              
            </Modal>
          </div>
    </div>
    
    )}
    </>
  );
}

export default AnnouncementDetailsCard;
