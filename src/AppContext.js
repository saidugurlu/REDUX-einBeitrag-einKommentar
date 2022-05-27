import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://react-yazi-yorum.herokuapp.com/posts"
      );

      setArticles(response.data);
    })();
  }, []);
  return (
    <AppContext.Provider value={{ articles }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
