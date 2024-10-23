// app/articles/[slug]/page.js
import React from "react";
import axios from "axios";
import Header from "@/app/components/Header";
import parse, { domToReact } from "html-react-parser";
import Footer from "../components/Footer";

const ArticleDetailPage = async ({ params }) => {
  const { slug } = params;

  const fetchArticle = async () => {
    try {
      const response = await axios.get(
        "https://abbscout1987.vercel.app/api/articles"
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch articles");
      }
      const articles = response.data;

      const article = articles.find((article) => {
        const formattedTitle = article.title[0]
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "");
        return formattedTitle === slug;
      });

      // Extract content and images
      const contentEncoded = article["content:encoded"][0] || "";
      const imageUrls = [
        ...new Set(
          [...contentEncoded.matchAll(/<img[^>]+src="([^">]+)"/g)].map(
            (match) => match[1]
          )
        ),
      ];

      // Add image URLs to the article object
      article.images = imageUrls.map((url) => ({ url }));

      return article;
    } catch (error) {
      console.error("Error fetching articles:", error);
      return null;
    }
  };

  const article = await fetchArticle();

  if (!article) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }

  const contentEncoded = article["content:encoded"][0] || "";

  // Custom parser function to add classes to <p> and <figcaption> tags
  const options = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        return <p className="mb-6">{domToReact(domNode.children)}</p>; // Add margin-bottom class
      }
      if (domNode.name === "figcaption") {
        return (
          <figcaption className="text-center mt-4 mb-8">
            {domToReact(domNode.children)}
          </figcaption> // Center the figcaption
        );
      }
    },
  };

  return (
    <>
      <Header gradient="textGradient2" />
      <div className="w-full mx-auto px-4 py-6">
        {" "}
        {/* Background black, text white */}
        <div className="w-[70%] md:w-[60%] mx-auto">
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold mb-4">
            {article.title[0]}
          </h1>

          {/* Use html-react-parser to render HTML content */}
          <div className="mt-4 text-black leading-relaxed text-[1.5rem]">
            {" "}
            {/* Ensure text is white */}
            {parse(contentEncoded, options)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetailPage;