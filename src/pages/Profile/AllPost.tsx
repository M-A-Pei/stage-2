import { useEffect, useState } from "react";
import Post from "../../components/Post";
import { useOutletContext } from "react-router-dom";
import { api } from "../../api";

export default function AllPost() {
  const [posts, setPosts] = useState<any>([]);
  const user: any = useOutletContext();

  async function GetAllPost() {
    try {
      const x = await api.get(`/reply/user/${user.username}`);
      const allPosts = [...x.data];
      setPosts(allPosts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetAllPost();
  }, []);

  return (
    <>
      {posts.map((e: any, i: number) => (
        <Post i={e.id} name={user.username} text={e.body} key={i} pfp="" />
      ))}
    </>
  );
}
