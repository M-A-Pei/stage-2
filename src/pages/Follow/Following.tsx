import { useEffect, useState } from "react";
import { api, setAuthToken } from "../../api";
import MiniProfile from "../../components/MiniProfile";

async function getFollowing(setFollowers: Function) {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    const x = await api.get("/follow/following");
    setFollowers(x.data);
  } catch (error) {}
}
export default function Following() {
  const [followers, setFollowers] = useState<any>([]);
  useEffect(() => {
    getFollowing(setFollowers);
  }, []);
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
