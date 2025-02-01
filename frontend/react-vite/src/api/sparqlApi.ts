import { Article } from "../interfaces/Article";
import { ArticleCard } from "../interfaces/ArticleCard";
import { SparqlResponse } from "../interfaces/SparqlResponse";

const baseUrl = "https://localhost:7008/api/Sparql";

export const getAllArticleCardsPagination = async (
  offset: number
): Promise<ArticleCard[] | string> => {
  try {
    const response = await fetch(`${baseUrl}/article-cards/${offset}`);
    if (!response.ok) {
      throw new Error("Failed to fetch article cards");
    }
    const data: SparqlResponse<ArticleCard[]> = await response.json();
    if (data.statusCode === 200) {
      return data.content;
    } else {
      return data.message;
    }
  } catch (error) {
    console.error("Error:", error);
    return `Error: ${error.message}`;
  }
};

export const getArticleById = async (
  articleId: string
): Promise<Article | string> => {
  try {
    const response = await fetch(`${baseUrl}/${articleId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }
    const data: SparqlResponse<Article> = await response.json();
    if (data.statusCode === 200) {
      return data.content;
    } else {
      return data.message;
    }
  } catch (error) {
    console.error("Error:", error);
    return `Error: ${error.message}`;
  }
};
