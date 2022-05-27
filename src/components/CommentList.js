import React from "react";

const CommentList = ({ comments }) => {
  return (
    <>
      
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
    </>
  );
};

export default CommentList;
