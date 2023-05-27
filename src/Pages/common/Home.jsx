import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ArticleCard from "../../Components/ArticleCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Articles() {
  const [articleData, setarticleData] = React.useState([]);
  // const articleData = [
  //   {
  //     author: "Sasindu Nanayakkara",
  //     designation: "Emergency Medicine Specialists",
  //     title: "Each year management consultants in the United",
  //     description:
  //       "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
  //     rating: 4,
  //     profilePic: "",
  //     articlePic: "",
  //     article: "Consulting is defined as the practise of providing a third party with expertise on a matter in exchange for a fee. The service can involve either advisory or implementation services. For the consultant, taking an independent and unbiased stance on an issue is central to their role. A consultant can, in principle, service any sector. Over the past decades, the term has become synonymous with business advisory – which focuses mostly on business strategy, management, organisation, operational processes and technology. The history of the consulting industry traces back to the late nineteenth century, with the founding of the world’s first modern consulting organisations, also known as business advisory firms. In the early days of the consulting industry (starting in the US and later crossing over to Europe and the rest of the world) the first consultancies focused their advisory services mainly on solving technical and financial concerns. Today, over 300,000 consulting firms in the UK alone – of which the majority are sole proprietorships – offer all sorts of different services, spanning across countless fields, disciplines and sectors."
  //   },
  //   {
  //     author: "Susith Rupasinghe",
  //     designation: "Emergency Medicine Specialists",
  //     title: "Each year management consultants in the United",
  //     description:
  //       "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
  //     rating: 4,
  //     profilePic: "",
  //     articlePic: "",
  //   },
  //   {
  //     author: "Sasindu Nanayakkara",
  //     designation: "Emergency Medicine Specialists",
  //     title: "Each year management consultants in the United",
  //     description:
  //       "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
  //     rating: 4,
  //     profilePic: "",
  //     articlePic: "",
  //   },
  //   {
  //     author: "Sasindu Nanayakkara",
  //     designation: "Emergency Medicine Specialists",
  //     title: "Each year management consultants in the United",
  //     description:
  //       "States receive more than $2 billion for their services.1 Much of this money pays for impractical data and poorly implemented recommendations.2 ",
  //     rating: 4,
  //     profilePic: "",
  //     articlePic: "",
  //   },
  // ];

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://af-backend.azurewebsites.net/api/article/"
      );
      
      const filteredData = response.data.data.map((article) => {

        const newcontennt = article.content.blocks.map((block) =>  block.text);
        console.log("newcontent",newcontennt);
        return {
          author: article.author.firstName+" "+article.author.lastName,
          designation: article.author.specialization,
          title: article.title,
          description: newcontennt.join(" ").substr(0, 100),
          //random number between 1 and 5
          rating: Math.floor(Math.random() * 5) + 1,
          profilePic:"" ,
          articlePic: "",
        }
      });
      console.log(filteredData);
      setarticleData(filteredData);
      console.log(response.data.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const navigate = useNavigate();

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
              onClick={() => {
                navigate("/article", {
                  state: {
                    profilePic: article.profilePic,
                    author: article.author,
                    designation: article.designation,
                    title: article.title,
                    description: article.description,
                    rating: article.rating,
                    articleImage: article.articlePic,
                    article: article.article,
                  },
                });
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
