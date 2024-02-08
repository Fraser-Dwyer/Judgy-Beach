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
      className="w-screen bg-[#999] absolute bottom-0 h-[65%] z-40 sm:w-[800px] hidden shadow-top"
      variants={variants}
      animate={showComments ? "show" : "hide"}
    >
      <div className="flex justify-between mb-[2vw] items-center sm:mb-[0px]">
        <p className="p-[3vw] font-bold text-lg sm:p-[20px] sm:text-xlPC">
          Comments
        </p>
        <div
          className="p-[3vw] sm:p-[20px] sm:hover:cursor-pointer sm:hover:scale-[1.05]"
          onClick={() => closeCommentSection()}
        >
          <img
            src={closeButton}
            alt="Close Button"
            className="w-[6vw] h-[6vw] sm:w-[30px] sm:h-[30px]"
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
