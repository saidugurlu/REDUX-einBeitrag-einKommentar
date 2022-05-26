import { useState, useEffect } from "react";
import axios from "axios";
import Artikelliste from './components/Artikelliste'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://react-yazi-yorum.herokuapp.com/posts"
      );
   
      setArticles(response.data); 


    })();
  }, []);
  console.log(articles);
  return (
    <div className="mainContainer">
      <header></header>

      <div className="ui raised very padded text container segment">
        <div className="ui relaxed divided list">
          {articles.map((article, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
