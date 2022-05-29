import { useState } from "react";

const initialComment = {
  display_name: "",
  body: "",
};

const CommentForm = ({ handleCommentSubmit }) => {
  const [comment, setComment] = useState(initialComment);

  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h3>Kommentieren</h3>
      <form
        className="ui form"
        onSubmit={(event) => {
          handleCommentSubmit(event, comment);
          setComment(initialComment);
        }}
      >
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

export default CommentForm;
