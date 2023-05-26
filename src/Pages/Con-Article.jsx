import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MyArticleCard from "../Components/Con-ArticleCard";
import { Link } from "react-router-dom";

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
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="font-bold text-4xl">ARTICLES</h1>
            <div className="w-12 h-[2px] bg-[#F5A624]"></div>
          </div>
          <div className="md:ml-[29rem]">
          <Link to="/newarticle"
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Write Article
            </Link>
          </div>
        </div>

        <div className="mt-16">
          {articleData.map((article) => (
            <MyArticleCard
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
