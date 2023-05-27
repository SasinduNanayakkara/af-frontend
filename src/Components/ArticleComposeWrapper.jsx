import React, { useState, useEffect } from "react";
import Dante from "Dante2";
import Profile from "../Assets/Profile.svg";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const onChangeHandler = (editor) => {
  contents = editor.emitSerializedOutput();
  console.log(JSON.stringify(contents));
  //how to print this console log array as a string
};

let contents = {
  "blocks":[
    {"key":"2lbgc","text":"Title","type":"header-one","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"BOLD"}],"entityRanges":[],"data":{}},
    {"key":"3vo84","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},
    {"key":"4uu09","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},
    {"key":"7usas","text":"","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]
    ,"entityMap":{}}

const author = JSON.parse(localStorage.getItem("user"))._id;
console.log("author", author);

function ArticleCompose({
  profilePic,
  name,
  specilization,
  locationimg,
  location,
}) {
  const [isSaveeModalOpen, setisSaveeModalOpen] = useState(false);
  const [isDiscardModalOpen, setisDiscardModalOpen] = useState(false);

  const openSaveModal = () => {
    setisSaveeModalOpen(true);
  };

  const openDiscardeModal = () => {
    setisDiscardModalOpen(true);
  };

  const closeSaveModal = () => {
    setisSaveeModalOpen(false);
  };

  const closeDiscardeModal = () => {
    setisDiscardModalOpen(false);
  };

  const confirmDiscardeModal = () => {
    setisDiscardModalOpen(false);
    window.location.reload();
  };

  const confirmPublishModal = async () => {
    setisSaveeModalOpen(false);
    // axios call to post the article to "https://af-backend.azurewebsites.net/api/article/"
    const article = {
      title:contents.blocks[0].text,
      content:contents,
      author:author,
    };
    try {
      const response = await axios.post("https://af-backend.azurewebsites.net/api/article/",article);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" flex-col px-5 w-full">
        <div className="flex flex-row">
          <div className="w-1/9">
            <img
              src={profilePic ? profilePic : Profile}
              alt="Profile"
              className="w-24 h-24 mt-7"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mt-10 ml-8 text-xl mb-3">{name}</h4>
            <h6 className="text-[18px] ml-8 mb-3 text-[#858585] font-semibold">
              {specilization}
            </h6>

          </div>
          <div className="flex flex-col">

          </div>
        </div>
        <div className="flex">
              <div className="w-28 flex justify-end ml-[850px] mr-20">
                <button
                  type="submit"
                  className="bg-[#BABABA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={openDiscardeModal}
                >
                  Discard
                </button>
                <Modal
                  isOpen={isDiscardModalOpen}
                  onRequestClose={closeDiscardeModal}
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
                        onClick={closeDiscardeModal}
                      />
                    </div>
                    {/* Rest of the modal content */}
                  </div>
                  <h2 className="flex justify-center font-bold text-3xl mb-4">
                    Are you sure?
                  </h2>
                  <p className="font-normal ml-6">
                    Are you sure you want to discard this content? This process
                    cannot be undone.
                  </p>
                  <div className="w-28 flex justify-center mt-5 ml-64">
                    <button
                      type="submit"
                      className="bg-[#FF1F00] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                      onClick={confirmDiscardeModal}
                    >
                      Confirm
                    </button>
                    <button
                      type="submit"
                      className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                      onClick={closeDiscardeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Modal>

                <button
                  type="submit"
                  className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                  onClick={openSaveModal}
                >
                  Publish
                </button>
                <Modal
                  isOpen={isSaveeModalOpen}
                  onRequestClose={closeSaveModal}
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
                  <div className="w-2/2 ml-10 z-50">
                    <div className="flex justify-end">
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="text-gray-500 cursor-pointer"
                        onClick={closeSaveModal}
                      />
                    </div>
                    {/* Rest of the modal content */}
                  </div>
                  <h2 className="flex justify-center font-bold text-3xl mb-4">
                    Are you sure?
                  </h2>
                  <p className="font-normal ml-6">
                    Are you sure you want to publish this content? This process
                    cannot be undone.
                  </p>
                  <div className="w-28 flex justify-center mt-5 ml-64">
                    <button
                      type="submit"
                      className="bg-[#000000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mr-2"
                      onClick={confirmPublishModal}
                    >
                      Confirm
                    </button>
                    <button
                      type="submit"
                      className="bg-[#969696] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ml-2"
                      onClick={closeSaveModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
      </div>
      <div className="mx-12 mt-12 editorContainer relative">
        <Dante onChange={onChangeHandler} content={contents} />
      </div>
    </div>
  );
}

export default ArticleCompose;
