import closeButton from "../Images/crossIcon.png";
import Comment from "./Comment";
import { motion } from "framer-motion";

export default function CommentSection({
  comments,
  showComments,
  commentsFunction,
}) {
  const closeCommentSection = () => {
    commentsFunction();
  };

  const variants = {
    show: { bottom: 0, display: "block" },
    hide: {
      bottom: "-80vh",
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      className="w-screen bg-background absolute bottom-0 h-[65%] z-40"
      variants={variants}
      animate={showComments ? "show" : "hide"}
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
    </motion.div>
  );
}
