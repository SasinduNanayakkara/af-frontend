import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ArticleCompose from "../../Components/ArticleComposeWrapper";

const profile = {
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
};

function NewArticle() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="px-20 mt-4 min-h-max">
          <ArticleCompose
            name={profile.name}
            location={profile.location}
            specilization={profile.specilization}
          />
        </div>
        <div className="mb-0"></div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default NewArticle;
