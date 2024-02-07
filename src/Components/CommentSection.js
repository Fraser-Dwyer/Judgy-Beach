import closeButton from "../Images/crossIcon.png";
import Comment from "./Comment";
import { useRef } from "react";

export default function CommentSection({ comments, commentsFunction }) {
  const commentSectionRef = useRef(null);

  const closeCommentSection = () => {
    commentsFunction();
  };

  return (
    <div
      ref={commentSectionRef}
      className="w-screen bg-background absolute bottom-0 h-[65%] z-50"
    >
      <div className="flex justify-between mb-[2vw]">
        <p className="p-[3vw] font-bold text-lg">Comments</p>
        <div className="p-[3vw]" onClick={() => closeCommentSection()}>
          <img
            src={closeButton}
            alt="Close Button"
            className="w-[6vw] h-[6vw]"
          />
        </div>
      </div>

      {comments && (
        <div className="">
          {comments.map((comment) => {
            return <Comment key={comment.username} commentInfo={comment} />;
          })}
        </div>
      )}
    </div>
  );
}
