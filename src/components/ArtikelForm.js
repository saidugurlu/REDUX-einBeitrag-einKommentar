/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../AppContext";

const ArtikelForm = (props) => {
  const { api } = useContext(AppContext);
  const [article, setArticle] = useState(props.article);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();
  const onInputChange = (e) => {
    const _article = article;
    _article[e.target.name] = e.target.value;
    setArticle(_article);
  };
  //setArticle({ ...article, [e.target.name]: e.target.value });}

  const onFormSubmit = async () => {
    //alert("HalloEdward");
    // e.preventDefault();
    setError("");
    console.log("Form");
    /*  const articleExists = () => {
      console.log(Object.entries(article));
      return Object.entries(article).length > 0;
    }; */

    //console.log(articleToEdit);
    if (props.type === "edit") {
      console.log("is edit");
      try {
        await api().put(`/posts/${id}`, article);
        console.log(article);
        navigate(`/posts/${id}`, { replace: true });
      } catch (error) {
        setError("Artikeltitel und Textinhalt müssen ausgefüllt werden!");
      }
    } else {
      try {
        console.log("POST");
        await api().post("/posts", article);

        navigate("/", { replace: true });
      } catch (error) {
        setError("Artikeltitel und Textinhalt müssen ausgefüllt werden!");
      }
      console.log(error);
    }
  };

  /*   useEffect(() => {
    if ({}) setArticle(articleToEdit);
    //if(articleToEdit?.title && articleToEdit.content) setArticle(edit) // (solve for edit / title undefinied)
  }, []); */

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
