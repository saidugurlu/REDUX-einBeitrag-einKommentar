import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";

const ArtikelForm = (props) => {

  const { api, getArticles } = useContext(AppContext);
  const [article, setArticle] = useState(props.article);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const onInputChange = (e) => {
    const _article = article;
    _article[e.target.name] = e.target.value;
    setArticle({ ..._article });
  };

  const onFormSubmit = async () => {
    setError("");

    if (props.type === "edit") {
    
      try {
        await api().put(`/posts/${id}`, article);
        console.log(article);
        navigate(`/posts/${id}`, { replace: true });
      } catch (error) {
        setError("Artikeltitel und Textinhalt müssen ausgefüllt werden!");
      }
    } 
    
    else {

      try {
        console.log("POST");
        await api().post("/posts", article);
        getArticles();
        navigate("/", { replace: true });
      } catch (error) {
        setError("Artikeltitel und Textinhalt müssen ausgefüllt werden!");
      }
      
    }
  };


  return (
    <div className="ui form">
      {error && (
        <div className="ui negative message">
          <div className="header">Ups!</div>
          <p>{error}</p>
        </div>
      )}

      <div className="field">
        <label>Artikeltitel</label>
        <input
          value={article.title}
          name="title"
          onChange={onInputChange}
          type="text"
        />
      </div>
      <div className="field">
        <label>Textinhalt</label>
        <textarea
          value={article.content}
          onChange={onInputChange}
          rows="3"
          name="content"
        ></textarea>
      </div>

      <div className="ui buttons">
        <button className="ui black button" onClick={onFormSubmit}>
          Speichern
        </button>
        <div className="or" data-text="<>"></div>
        <button className="ui button ">Absagen</button>
      </div>
    </div>
  );
};

export default ArtikelForm;
