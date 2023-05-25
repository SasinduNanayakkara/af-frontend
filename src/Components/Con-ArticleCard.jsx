import React, { useState } from "react";
import Profile from "../Assets/Profile.png";
import Modal from "react-modal";
import articleImg from "../Assets/ArticleImage.svg";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function MyArticleCard({
  profilePic,
  author,
  designation,
  title,
  description,
  rating,
  articleImage,
}) {
  const [ratingCount, setRatingCount] = useState(0);
  const [isDelModalOpen, setDelModalOpen] = useState(false);

  const openDelModal = () => {
    setDelModalOpen(true);
  };

  const confirmPass = () => {
    
  }
  
  const closDeleModal = () => {
    setDelModalOpen(false);
  };

  const ratingChanged = (newRating = rating) => {
    console.log(newRating);
    setRatingCount(newRating);
  };
  return (
    <div className="border-2 border-white border-b-[#D1D1D1] ">
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row">
            <img
              src={profilePic ? profilePic : Profile}
              alt="Profile"
              className="w-10 h-10 mt-3"
            />
            <div className="flex, flex-col">
              <h2 className="font-bold mt-3 ml-3">{author}</h2>
              <h6 className="text-sm ml-3 text-[#858585]">{designation}</h6>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="mt-6">{description}</p>
            <div className="flex flex-row mt-2">
              <div>
                <ReactStars
                  count={5}
                  value={rating}
                  size={32}
                  activeColor={"#ffd700"}
                  onChange={ratingChanged}
                  className="focus:border-none"
                />
              </div>
              <div className="md:ml-[40rem]">
                <Link to="/edit"
                  type="submit"
                  className="bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full"
                >
                  Edit
                </Link>
              </div>
              <div className="ml-2">
                <button
                  type="submit"
                  className="bg-[#FD4F4F] hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full"
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
                onClick={confirmPass}
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
          </div>
        </div>
        <div className="mt-4 ml-4">
          <img src={articleImage ? articleImage : articleImg} alt="article" />
        </div>
      </div>
    </div>
  );
}

export default MyArticleCard;
