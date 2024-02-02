import { useEffect, useState } from "react";
import ReviewCard from "../Components/ReviewCard";
import egg from "../Images/egg.jpg";

export default function Home({ baseURL }) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const user = window.localStorage.getItem("CURRENT_USER_INFO");
    setUserInfo(JSON.parse(user));
  }, []);

  return (
    <>
      {false && (
        <>
          <p>Home page</p>
          <p>Username: {userInfo?.username}</p>
          <p>Name: {userInfo?.name}</p>
        </>
      )}
      <ReviewCard
        title={"Fraser's Fried Eggs"}
        author={"Fraser Dwyer"}
        date={"01/Feb/24 - 16:56 "}
        image={egg}
        description={
          "Really good eggs! I went to the kitchen and fancied some delicious yolky business. So I whipped out the frying pan and I cracked an egg onto some hot oil. After that I dipped some toast into the gooey and decadant egg yolk I had just crafted. Whole experience just incredible. Would definetely recommend to a friend."
        }
      />
    </>
  );
}
