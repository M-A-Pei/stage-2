import { useEffect, useState } from "react";
import { api, setAuthToken } from "../../api";
import MiniProfile from "../../components/MiniProfile";

async function getFollowers(setFollowers: Function) {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    const x = await api.get("/follow/followers");
    setFollowers(x.data);
  } catch (error) {
    console.log(error);
  }
}

export default function Followers() {
  const [followers, setFollowers] = useState<any>([]);
  useEffect(() => {
    getFollowers(setFollowers);
  });

  return (
    <>
      {followers.map((e: any) => (
        <MiniProfile
          key={e.id}
          id={e.id}
          username={e.username}
          pfp={e.profilePic}
        />
      ))}
    </>
  );
}
