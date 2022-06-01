import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";

const ArtikelForm = (edit) => {
  const { api } = useContext(AppContext);
  const [article, setArticle] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();
  const onInputChange = (e) =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (edit) {
      try {
        await api().put(`/posts/${id}`, article);
        navigate(`/posts/${id}`, { replace: true });
      } catch (error) {
        setError("Artikeltitel und Textinhalt müssen ausgefüllt werden!");
      }
    } else {
      try {
        await api().post("/posts", article);
        navigate("/", { replace: true });
      } catch (error) {
        setError("Artikeltitel und Textinhalt müssen ausgefüllt werden!");
      }
    }
  };

  useEffect(() => {
    if ({ edit }) setArticle(edit);
    //if(edit?.title && edit.content) setArticle(edit) (solve for edit / title undefinied)
  }, [edit]);

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
