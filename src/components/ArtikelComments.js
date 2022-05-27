import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const ArtikelComments = ({ comments, handleCommentSubmit }) => {
  return (
    <>
      <CommentList comments={comments} />
      <CommentForm handleCommentSubmit={handleCommentSubmit} />
    </>
  );
};

export default ArtikelComments;
