import { createContext} from "react";
import axios from "axios";


export const AppContext = createContext();

const AppProvider = ({ children }) => {


  const api = () => {
    return axios.create({
      baseURL: "https://react-yazi-yorum.herokuapp.com",
    });
  };


  return (
    <AppContext.Provider value={{ api }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
