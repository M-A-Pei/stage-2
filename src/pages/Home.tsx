import { Avatar, Button, Stack, TextField } from "@mui/material";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import useStore from "../state/hooks";
import useGetAllPost from "../hook/useGetAllPost";
import DEFAULTPFP from "../assets/defaults/defaultpfp.jpg";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SendIcon from '@mui/icons-material/Send';
import { api } from "../api";
import { toast } from "react-toastify";

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

function Home() {
  const { user } = useStore();
  const [post, setPost] = useState<string>(""); //post state
  const [images, setImages] = useState({} as any)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const response = await useGetAllPost();
    setPosts(response.data);
  }

  function onChangeFile(e: any){
    setImages(e.target.files)
  }

  async function handlePost() {
    const postData = new FormData();
    for(let i = 0; i < images.length; i++){
      postData.append("images", images[i])
    }
    postData.append("body", post);
    try {
      const token = localStorage.getItem("token");
      await api.post("/posts", postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: "Bearer " + token
        }
      });
      toast.success("post made successfully");
      setPost("")
      setImages("")
      getPost();
    } catch (error: any) {
      toast.error(error.response);
    }
  }
 

  return (
      <Stack spacing={3} direction="column">
        <h1>Home Page</h1>
        <Stack
          borderBottom={"1px solid gray"}
          direction="row"
          alignContent="center"
          justifyContent="center"
          gap={1}
        >
          <Avatar
            sx={{ height: "60px", width: "60px" }}
            src={`/${user.profile.avatar}`} 
            alt=""
          />
          <TextField
            label="whats on your mind?"
            color="primary"
            variant="filled"
            onChange={(e) => setPost(e.target.value)}
            sx={inputStyle}
            size="small"
          />
          <input onChange={onChangeFile} multiple type="file" hidden id='postImage' />
          <label htmlFor="postImage"><AddAPhotoIcon  sx={{color: "white"}}/></label>
          <Button
                onClick={handlePost}
                variant="contained"
                sx={{
                  bgcolor: "primary.dark",
                  borderRadius: "10px",
                  height: "40%",
                  p: 1
                }}
              >
                <SendIcon />
            </Button>
          
        </Stack>
        {posts.map((element: any, i) => {
          return (
            <Post
              key={i}
              name={element.author.username}
              text={element.body}
              pfp={element.author.profilePic || DEFAULTPFP}
              i={element.id}
              img={element.images}
            />
          );
        })}
      </Stack>
  );
}

export default Home;
