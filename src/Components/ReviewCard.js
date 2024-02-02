import profileIcon from "../Images/profileIcon.png";
import gavel from "../Images/gavel.png";

export default function ({ title, author, date, image, description }) {
  const moreTextElement = document.querySelector("#more-btn");
  const lessTextElement = document.querySelector("#less-btn");
  const surTextElement = document.querySelector("#more-text");
  const elipseElement = document.querySelector("#elipse");

  const showMore = () => {
    moreTextElement.classList.add("hidden");
    elipseElement.classList.add("hidden");
    lessTextElement.classList.remove("hidden");
    surTextElement.classList.remove("hidden");
  };

  const showLess = () => {
    moreTextElement.classList.remove("hidden");
    elipseElement.classList.remove("hidden");
    lessTextElement.classList.add("hidden");
    surTextElement.classList.add("hidden");
  };

  return (
    <div className="flex justify-center mt-[3vw]">
      <div className="w-[95%] bg-white borders">
        <div className="flex items-center border-b-2 border-b-black p-[2vw]">
          <img src={profileIcon} alt="Profile" className="w-[10%]" />
          <div className="ml-[2vw]">
            <p className="text-md">{author}</p>
            <p className="text-sm">{date}</p>
          </div>
        </div>
        <div className="p-[2vw]">
          <p className="text-lg font-bold">{title}</p>
          <div className="flex my-[1vw] items-center">
            <p className="font-bold">4.7 / 5.0</p>
            <img src={gavel} alt="Gavel" className="w-[3vw] h-[3vw] ml-[1vw]" />
          </div>
          <img src={image} alt="Post" className="borders" />
          {description.slice(150) !== null && (
            <p className="text-md mt-[1vw]">
              {description.slice(0, 150)}
              <span id="elipse" className="">
                {".... "}
              </span>
              {description.slice(150) !== null && (
                <span id="more-text" className="hidden">
                  {description.slice(150)}
                </span>
              )}
            </p>
          )}
          <p id="more-btn" onClick={showMore} className="font-bold text-md">
            Read more
          </p>
          <p
            id="less-btn"
            onClick={showLess}
            className="hidden font-bold text-md"
          >
            Show less
          </p>
        </div>
      </div>
    </div>
  );
}
