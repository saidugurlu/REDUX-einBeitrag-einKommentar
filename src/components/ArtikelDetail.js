import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const initialComment = {
  display_name: "",
  body: "",
};
const ArtikelDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);
  const [comment, setComment] = useState(initialComment);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
      comment
    );
    setComment(initialComment);
  };

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      setArticleDetails(
        (await axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`))
          .data
      );
    })();
  });

  useEffect(() => {
    (async () => {
      setComments(
        (
          await axios.get(
            `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
          )
        ).data
      );
    })();
  });

  return (
    <>
      <h2 className="ui header">{articleDetails.title}</h2>
      <p>{articleDetails.created_at}</p>
      <p>{articleDetails.content}</p>
      <h3>Kommentare</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div className="ui relaxed list">
              <div className="item">
                <img
                  className="ui avatar image"
                  src="/images/avatar.jpg"
                  alt=""
                />
                <div className="content">
                  <a href="#d" className="header">
                    {comment.display_name}
                  </a>
                  <div className="description">{comment.body}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h3>Kommentieren</h3>
      <form className="ui form" onSubmit={handleCommentSubmit}>
        <div className="ui mini icon input">
          <input
            value={comment.display_name}
            name="display_name"
            onChange={handleOnChange}
            type="text"
            placeholder="Name..."
          />
        </div>
        <textarea
          value={comment.body}
          name="body"
          onChange={handleOnChange}
          placeholder="Dein Kommentar..."
          rows="3"
        ></textarea>
        <button className="ui black basic button" type="submit">
          Senden
        </button>
      </form>
    </>
  );
};

export default ArtikelDetail;
