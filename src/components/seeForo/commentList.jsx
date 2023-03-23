import React, { useEffect, useState } from "react";

const initialComments = [
  {
    id: 1,
    username: "John",
    comment: "This is a sample comment.",
    time: new Date(),
    replies: [
      {
        id: 2,
        username: "Jane",
        comment: "I agree with you, John.",
        time: new Date(),
     },
    ],
  },
];

function CommentList({ comments = initialComments }) {
  const [newComment, setNewComment] = useState({ username: "", comment: "" });
  const [commentList, setCommentList] = useState(comments);

  function Comment({ username, comment, replies = [], timestamp }) {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div className="timestamp">{timestamp}</div>
          <div style={{ marginLeft: "10px" }}>
            <h2>{username}</h2>
            <p>{comment}</p>
          </div>
        </div>
        {replies &&
          replies.map((reply) => (
            <div style={{ marginLeft: "20px" }}>
              <Comment {...reply} />
            </div>
          ))}
      </div>
    );
  }


  function NewComment() {
    const [newComment, setNewComment] = useState({ username: "", comment: "" });

    const handleUsernameChange = (event) => {
      setNewComment((prevState) => ({
        ...prevState,
        username: event.target.value,
      }));
    };

    const handleCommentChange = (event) => {
      setNewComment((prevState) => ({
        ...prevState,
        comment: event.target.value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const newCommentList = [
        ...commentList,
        {
          id: commentList.length + 1,
          username: newComment.username,
          comment: newComment.comment,
          time: new Date(),
        },
      ];
      setCommentList(newCommentList);
      setNewComment({ username: "", comment: "" });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newComment.username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Comment:
          <textarea
            value={newComment.comment}
            onChange={handleCommentChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  useEffect(() => {
    // realizar operaciones de inicialización aquí, si es necesario
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}
      <NewComment />
    </div>
  );
}

export default CommentList;
