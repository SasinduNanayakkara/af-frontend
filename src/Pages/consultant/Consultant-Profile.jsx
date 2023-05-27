import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProfileWrapper from "../../Components/ProfileWrapper";
import { faL } from "@fortawesome/free-solid-svg-icons";

const User = JSON.parse(localStorage.user ? localStorage.user : '{}');

const profile = {
    id: User._id,
  name: User.prefix + ' ' + User.firstName + ' ' + User.lastName ,
  specilization: User.specialization,
  location: User.location
};

function ConsultantProfile() {
  const [isLoaded, setisLoaded] = useState(false);
  const [consultantProfileData, setconsultantProfileData] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        "https://af-backend.azurewebsites.net/api/consultant/" + User._id
      );
      if (response.status == 200) {
        const data = response.data.data;
        // Update the announcementData state with the fetched data
        setconsultantProfileData(data);
        setisLoaded(true);
        console.log(data);
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        {isLoaded && (
          <div>
            <div className="px-20 mt-4 min-h-max">
              <ProfileWrapper
                userId={profile.id}
                name={profile.name}
                location={profile.location}
                specilization={profile.specilization}
                content= {consultantProfileData}
              />
            </div>
          </div>
        )}

        <div className="mb-0"></div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default ConsultantProfile;
