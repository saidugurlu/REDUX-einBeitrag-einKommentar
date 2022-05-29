import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArtikelForm = () => {
  const [article, setArticle] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const onInputChange = (e) =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const onFormSubmit = async () => {
    await axios.post("https://react-yazi-yorum.herokuapp.com/posts", article);
    setArticle(article);
    navigate("/")
  };



  return (
    <div className="ui form">
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
