import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
const articles2 = useSelector((state) => state.articles)

  const api = () => {
    return axios.create(
      {
        baseURL: "https://react-yazi-yorum.herokuapp.com"
      }
    )
  }
const getArticles = () => {
  (async () => {
    const response = await axios.get(
      "https://react-yazi-yorum.herokuapp.com/posts"
    );

    setArticles(response.data);
  })();
}
  useEffect(() => {
    getArticles();
  
  }, []);
  return (
    <AppContext.Provider value={{ getArticles, articles, api}}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
