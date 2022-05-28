import { useState } from "react";
import axios from "axios";

const ArtikelForm = () => {
  const [article, setArticle] = useState({ title: "", content: "" });

  const onInputChange = (e) =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault(); // for sicherheit

    await axios.post("https://react-yazi-yorum.herokuapp.com/posts", article)
      .data;
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
        <button className="ui red button ">Absagen</button>
        <div className="or" data-text="<>"></div>
        <button className="ui positive button" onClick={onFormSubmit}>
          Speichern
        </button>
      </div>
    </div>
  );
};

export default ArtikelForm;
