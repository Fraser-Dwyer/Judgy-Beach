import profilePic from "../Images/profileIcon.png";

export default function Comment({ commentInfo }) {
  const { username, comment } = commentInfo;
  return (
    <div className="w-full border-black border-b-[1px] first:border-t-[1px] p-[3vw] flex justify-start items-center sm:p-[20px] sm:w-[800px]">
      <div className="mr-[3vw] sm:mr-[15px]">
        <img
          src={profilePic}
          alt="Profile icon"
          className="w-[8vw] h-[8vw] sm:w-[50px] sm:h-[50px]"
        />
      </div>
      <div className="text-md sm:text-lgPC">
        <p className="font-bold">{username}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
}
