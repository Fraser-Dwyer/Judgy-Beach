import { useEffect, useState } from "react";

export default function Home({ baseURL }) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const user = window.localStorage.getItem("CURRENT_USER_INFO");
    setUserInfo(JSON.parse(user));
  }, []);

  return (
    <>
      <p>Home page</p>
      <p>Username: {userInfo?.username}</p>
      <p>Name: {userInfo?.name}</p>
    </>
  );
}
