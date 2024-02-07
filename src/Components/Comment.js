import profilePic from "../Images/profileIcon.png";

export default function Comment({ commentInfo }) {
  const { username, comment } = commentInfo;
  return (
    <div className="w-full border-black border-b-[1px] first:border-t-[1px] p-[3vw] flex justify-start items-center">
      <div className="mr-[3vw]">
        <img src={profilePic} alt="Profile icon" className="w-[8vw] h-[8vw]" />
      </div>
      <div>
        <p className="font-bold text-md">{username}</p>
        <p className="text-md">{comment}</p>
      </div>
    </div>
  );
}
