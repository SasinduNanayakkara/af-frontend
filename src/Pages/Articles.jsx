import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ArticleCard from "../Components/ArticleCard";

function Articles() {
  const articleData = [
    {
      author: "Sasindu Nanayakkara",
      designation: "Emergency Medicine Specialists",
      title: "Each year management consultants in the United",
      description:
        "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
      rating: 4,
      profilePic: "",
      articlePic: "",
    },
    {
      author: "Susith Rupasinghe",
      designation: "Emergency Medicine Specialists",
      title: "Each year management consultants in the United",
      description:
        "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
      rating: 4,
      profilePic: "",
      articlePic: "",
    },
    {
      author: "Sasindu Nanayakkara",
      designation: "Emergency Medicine Specialists",
      title: "Each year management consultants in the United",
      description:
        "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
      rating: 4,
      profilePic: "",
      articlePic: "",
    },
    {
      author: "Sasindu Nanayakkara",
      designation: "Emergency Medicine Specialists",
      title: "Each year management consultants in the United",
      description:
        "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
      rating: 4,
      profilePic: "",
      articlePic: "",
    },
  ];
  return (
    <div>
      <Header />
      <div className="px-40 mt-16">
        <div>
          <h1 className="font-bold text-4xl">ARTICLES</h1>
          <div className="w-12 h-[2px] bg-[#F5A624]"></div>
        </div>
        <div className="mt-16">
          {articleData.map((article) => (
            <ArticleCard
              title={article.title}
              author={article.author}
              designation={article.designation}
              description={article.description}
              rating={article.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
