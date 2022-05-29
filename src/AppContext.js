import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const api = () => {
    return axios.create(
      {
        baseURL: "https://react-yazi-yorum.herokuapp.com"
      }
    )
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://react-yazi-yorum.herokuapp.com/posts"
      );

      setArticles(response.data);
    })();
  }, []);
  return (
    <AppContext.Provider value={{ articles, api}}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
