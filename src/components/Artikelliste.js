import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../actions";
import { useEffect } from "react";

const Artikelliste = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <>
      <Link to="/artikeladd" className="ui top attached button" tabindex="0">
        Neuer Artikel
      </Link>
      {articles.map((article, index) => {
        return (
          <div key={index} className="ui relaxed divided list">
            <div className="item">
              <i className="large quote left middle aligned icon"></i>
              <div className="content">
                <Link to={`/posts/${article.id}`} className="header">
                  {article.title}
                </Link>
                <div className="description">{article.created_at}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Artikelliste;
