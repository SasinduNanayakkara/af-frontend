import React, { useState, useEffect } from "react";
import Profile from "../Assets/Profile.png";
import Modal from "react-modal";
import videoIcon from "../Assets/Pages-Vectors/videoIcon.svg";
import locationimg from "../Assets/Pages-Vectors/Location.svg";
import chatimg from "../Assets/Pages-Vectors/chatIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ConsultantDetailsCard({
  id,
  fname,
  lname,
  onClick,
  specilization,
  status,
  location,
  aboutme,
  email,
  phone,
  profilePic,
  skills,
}) {
  const [showRejectionNotification, setShowRejectionNotification] = useState(false);
  const [consultantId, setConsultantId] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [isRemoveModalOpen, setRemoveModalOpen] = useState(false);

  const openApproveModal = () => {
    setIsApproveModalOpen(true);
    setConsultantId(id);
  };

  const openRejectModal = () => {
    setRejectModalOpen(true);
    setConsultantId(id);
  };

  const openRemoveModal = () => {
    setRemoveModalOpen(true);
    // Store the ID of the consultant to be removed in state
    setConsultantId(id);
  };

  const closeApproveModal = () => {
    setIsApproveModalOpen(false);
    setConsultantId(null);
  };

  const closRejecteModal = () => {
    setRejectModalOpen(false);
    setConsultantId(null);
  };

  const closeRemoveModal = () => {
    setRemoveModalOpen(false);
    setConsultantId(null); // Reset the stored consultant ID
  };

  useEffect(() => {
    // Simulating data loading delay with a setTimeout
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

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

  const handleApprove = (consultantId) => {
    axios
      .put(
        `https://af-backend.azurewebsites.net/api/consultant/status/${consultantId}`,
        { status: "Approved" }
      )
      .then((response) => {
        // Handle successful approval, such as updating the UI or showing a success message
        console.log("Consultant approved successfully");
        // Close the modal if needed
        closeApproveModal();
      })
      .catch((error) => {
        // Handle error, such as displaying an error message
        console.error("Error approving consultant:", error);
      });
  };

  const handleReject = (consultantId) => {
    axios
      .put(
        `https://af-backend.azurewebsites.net/api/consultant/status/${consultantId}`,
        { status: "Rejected" }
      )
      .then((response) => {
        console.log("Consultant rejected successfully");
        setShowRejectionNotification(true); // Show the rejection notification
        closRejecteModal();
      })
      .catch((error) => {
        console.error("Error rejecting consultant:", error);
      });
  };

  const handleRemove = (consultantId) => {
    axios
      .delete(
        `https://af-backend.azurewebsites.net/api/consultant/${consultantId}`
      )
      .then((response) => {
        // Handle successful deletion, such as updating the UI or showing a success message
        console.log("Consultant removed successfully");
        // Close the modal if needed
        closeRemoveModal();
      })
      .catch((error) => {
        // Handle error, such as displaying an error message
        console.error("Error removing consultant:", error);
      });
  };

  return (
    <>
      {isLoaded && (
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
              <h2 className="font-bold mt-10 ml-8 text-xl mb-3">
                {fname} {lname}
              </h2>
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
          <h5 className="text-[#000000] font-bold text-xl">{skills}</h5>
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
          <div className="w-28 flex justify-end mt-5 md:ml-[800px] md:mr-20">
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
              onClick={openApproveModal}
            >
              Approve
            </button>
            <Modal
              isOpen={isApproveModalOpen}
              onRequestClose={closeApproveModal}
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
                    onClick={closeApproveModal}
                  />
                </div>
                {/* Rest of the modal content */}
              </div>
              <h2 className="flex justify-center font-bold text-3xl mb-4">
                Are you sure?
              </h2>
              <p className="font-normal ml-6">
                Are you sure you want to approve this profile? This process
                cannot be undone.
              </p>
              <div className="w-28 flex justify-center mt-5 ml-64">
                <button
                  type="submit"
                  className="bg-[#000000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={() => handleApprove(id)}
                >
                  Confirm
                </button>
                <button
                  type="submit"
                  className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                  onClick={closeApproveModal}
                >
                  Cancel
                </button>
              </div>
            </Modal>

            <button
              type="submit"
              className="bg-[#FF1F00] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
              onClick={openRejectModal}
            >
              Reject
            </button>
            <Modal
              isOpen={isRejectModalOpen}
              onRequestClose={closRejecteModal}
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
                    onClick={closRejecteModal}
                  />
                </div>
                {/* Rest of the modal content */}
              </div>
              <h2 className="flex justify-center font-bold text-3xl mb-4">
                Are you sure?
              </h2>
              <p className="font-normal ml-6">
                Are you sure you want to reject this profile? This process
                cannot be undone.
              </p>
              <div className="w-28 flex justify-center mt-5 ml-64">
                <button
                  type="submit"
                  className="bg-[#FF1F00] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={() => handleReject(id)}
                >
                  Confirm
                </button>
                <button
                  type="submit"
                  className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                  onClick={closRejecteModal}
                >
                  Cancel
                </button>
              </div>
            </Modal>

            <button
              type="submit"
              className="bg-[#FD7373] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
              onClick={openRemoveModal}
            >
              Remove
            </button>
            <Modal
              isOpen={isRemoveModalOpen}
              onRequestClose={closeRemoveModal}
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
                    onClick={closeRemoveModal}
                  />
                </div>
                {/* Rest of the modal content */}
              </div>
              <h2 className="flex justify-center font-bold text-3xl mb-4">
                Are you sure?
              </h2>
              <p className="font-normal flex justify-center">
                Are you sure you want to remove this profile? This process
                cannot be undone.
              </p>
              <div className="w-28 flex justify-center mt-5 ml-64">
                <button
                  type="submit"
                  className="bg-[#FD7373] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={() => handleRemove(id)}
                >
                  Confirm
                </button>
                <button
                  type="submit"
                  className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                  onClick={closeRemoveModal}
                >
                  Cancel
                </button>
              </div>
            </Modal>
          </div>
        </div>
      )}

{showRejectionNotification && (
        <div className="right-side-notification">
          {/* Notification content */}
          Rejection Successful!
        </div>
      )}
    </>
  );
}

export default ConsultantDetailsCard;
