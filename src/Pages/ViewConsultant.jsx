import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const articleData = [];
  const [formValues, setFormValues] = useState({
    title: "",
    targetAudience: "",
    content: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // Access form values from the `formValues` state object
  };

  return (
    <div>
      <Header />
      <div>
        <div className="h-48 w-[100px] mt-5 bg-[#D9D9D9] ml-[500px]">
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={openModal} // Open the modal when the button is clicked
            >
              Add Announcement
            </button>
          </div>
        </div>

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
                    className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-ash"
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
                    className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-ash"
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
                    className="border border-formLable rounded px-2 py-2 mb-4 mt-1 w-full bg-ash"
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

      <Footer />
    </div>
  );
}

export default Articles;
