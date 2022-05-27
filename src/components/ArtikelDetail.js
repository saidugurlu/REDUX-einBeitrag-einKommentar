import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArtikelComments from "./ArtikelComments";
import axios from "axios";

const ArtikelDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);

  const handleCommentSubmit = async (e, comment) => {
    e.preventDefault();
    await axios.post(
      `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
      comment
    );
  };

  useEffect(() => {
    (async () => {
      setArticleDetails(
        (await axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)).data
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
      <ArtikelComments
        comments={comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default ArtikelDetail;
