import { Button, Stack, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { api, setAuthToken } from "../api";
import useStore from "../state/hooks";
import Post from "./Post";

const inputStyle = {
    borderRadius: "10px",
    mb: "15px",
    "& .MuiInputLabel-filled": {
      color: "gray",
    },
    "& .MuiFilledInput-input": {
      color: "white",
    },
    width: "100%",
  };

export default function ReplyBar({id}: any) {
    console.log(id)
    const { user } = useStore();
    const [replies, setReplies] = useState([]);
    const [reply, setReply] = useState("");
    async function getReplies() {
        try {
          const response = await api.get(`/reply/${id}`);
          setReplies(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        getReplies();
      }, [id]);
    async function handleReply() {
        try {
          const token = localStorage.getItem("token");
          if (token) {
            setAuthToken(token);
          }
          await api.post(`/reply/${id}`, { body: reply });
          await getReplies();
          setReply("");
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
    <Stack
        borderBottom={"1px solid gray"}
        direction="row"
        alignContent="center"
        justifyContent="center"
        sx={{borderTop: "1px solid gray", pt: 1}}
      >
        <img
          height="40px"
          width="40px"
          style={{ borderRadius: "50%", margin: "5px" }}
          src={`http://localhost:3000/uploads/${user.profile.avatar}`}
          alt=""
        />
        <TextField
          label="Reply to this post"
          color="primary"
          variant="filled"
          sx={inputStyle}
          size="small"
          onChange={(e) => setReply(e.target.value)}
          value={reply}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "primary.dark", borderRadius: "20px", height: "50%" }}
          onClick={handleReply}
        >
          <SendIcon/>
        </Button>
    </Stack>

    <Stack direction={"column"} gap={2}>
    {replies.map((post: any) => (
        <Post
          i={post.id}
          name={post.author.username}
          pfp={post.author.profilePic}
          text={post.body}
          key={post.id}
          img={post.images}
        />
      ))}
    </Stack>

      </>
  )
}
