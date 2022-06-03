/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ArtikelComments from "./ArtikelComments";
import { AppContext } from "../AppContext";
import DeleteModal from "./DeleteModal";

const ArtikelDetail = () => {
  const { api } = useContext(AppContext);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [articleDetails, setArticleDetails] = useState({});

  const handleCommentSubmit = async (e, comment) => {
    e.preventDefault();
    await api().post(`/posts/${id}/comments`, comment);
  };

  useEffect(() => {
    (async () => {
      setArticleDetails((await api().get(`/posts/${id}`)).data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setComments((await api().get(`/posts/${id}/comments`)).data);
    })();
  }, []);

  return (
    <>
      <h2 className="ui header">{articleDetails.title}</h2>
      <p>{articleDetails.created_at}</p>

      <div className="ui buttons">
        <Link to={`/posts/${id}/edit`} className="ui black button">
          Bearbeiten
        </Link>
        <div className="or" data-text="<>"></div>
          <DeleteModal /> 
      </div>

      <p>{articleDetails.content}</p>
      <ArtikelComments
        comments={comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
};

export default ArtikelDetail;
