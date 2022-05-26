import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ArtikelDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);

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
      {comments.map((comment ) => {
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
                  <div className="description">
                    {comment.body} 
                    <a href="#d">
                      <b>Arrested Development</b>
                    </a>
                    just now.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArtikelDetail;
