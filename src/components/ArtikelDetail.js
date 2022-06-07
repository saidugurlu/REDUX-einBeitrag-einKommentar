/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import ArtikelComments from "./ArtikelComments";
import { AppContext } from "../AppContext";
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { getArticle, getComment } from "../actions";

const ArtikelDetail = () => {
  //const { api } = useContext(AppContext);
  const { id } = useParams();

  const articleDetails = useSelector((state) => state.articleDetails);
  const dispatch = useDispatch();

  /*  const handleCommentSubmit = async (e, comment) => {
    e.preventDefault();
    await api().post(`/posts/${id}/comments`, comment);
  }; */

  useEffect(() => {
    //dispatch(getComment(id));
    dispatch(getArticle(id));
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
    {/*   <ArtikelComments
        comments={articleDetails.comments}
        handleCommentSubmit={handleCommentSubmit}
      /> */}
    </>
  );
};

export default ArtikelDetail;
