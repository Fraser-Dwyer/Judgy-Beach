import profileIcon from "../Images/profileIcon.png";
import gavel from "../Images/gavel.png";
import gavelOutline from "../Images/gavel-outline.png";

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
    <div className="flex justify-center">
      <div className="w-full bg-white">
        <div className="flex items-center border-b-[1px] border-b-black p-[2vw]">
          <div className="flex items-center">
            <img src={profileIcon} alt="Profile" className="w-[10%]" />
            <div className="ml-[2vw]">
              <p className="text-md">{author}</p>
              <p className="text-sm">{date}</p>
            </div>
          </div>
          <div>
            <button className="btn prim">Judge</button>
          </div>
        </div>
        <div className="mb-[2vw]">
          <div className="flex items-center ml-[2vw] mt-[2vw] font-bold">
            <p className="text-lg font-bold mr-[2vw]">{title}</p>
            <p>4.9 / 5.0</p>
            <img
              src={gavel}
              alt="Gavel"
              className="w-[3.5vw] h-[3.5vw] mx-[1vw]"
            />
          </div>
          <div className="flex my-[1vw] items-center ml-[2vw]">
            <p className="font-bold">4.7 / 5.0</p>
            <img
              src={gavelOutline}
              alt="Gavel"
              className="w-[3.5vw] h-[3.5vw] mx-[1vw]"
            />
            <p className="mr-[1vw]">(14 Judges)</p>
          </div>
          <img src={image} alt="Post" className="" />
          {description.slice(150) !== null && (
            <p className="text-md ml-[2vw] mt-[2vw]">
              {description.slice(0, 150)}
              <span id="elipse" className="">
                {"..."}
              </span>
              {description.slice(150) !== null && (
                <span id="more-text" className="hidden">
                  {description.slice(150)}
                </span>
              )}
              <span
                id="more-btn"
                onClick={showMore}
                className="font-bold text-md"
              >
                Read more
              </span>
              <span
                id="less-btn"
                onClick={showLess}
                className="hidden font-bold text-md"
              >
                {" "}
                Show less
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
