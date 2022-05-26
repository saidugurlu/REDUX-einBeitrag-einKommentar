import { useState, useEffect } from "react";
import axios from "axios";

const Artikelliste = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          "https://react-yazi-yorum.herokuapp.com/posts"
        );
     
        setArticles(response.data); 
  
  
      })();
    }, []);
  return articles.map((article, index) => {
    return (
      <div key={index} className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <a href="#d" className="header">
            {article.title}
          </a>
          <div className="description">{article.created_at}</div>
        </div>
      </div>
    );
  });
};

export default Artikelliste;
