import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { api  } from "../api";
import { useEffect, useState } from "react";
import { Stack} from "@mui/material";
import ReplyBar from "../components/replyBar";

export default function Reply() {
  const { id } = useParams();
  const [post, setPost] = useState<any>({});
  const [done, setDone] = useState(false);

  async function getPost() {
    try {
      const response = await api.get(`/posts/${id}`);
      setPost(response.data);
      setDone(true);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <Stack direction="column" gap={2}>
      {done && (
        <Post
          i={post.id}
          name={post.author.username}
          pfp={post.author.profilePic}
          text={post.body}
          img={post.images}
        />
      )}

      {id && (
        <ReplyBar id={id}/>
      )}
      

   </Stack>
  );
}
