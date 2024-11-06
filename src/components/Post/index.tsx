import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { api, setAuthToken } from "../../api";
import { IPost } from "../../types/post";
import ImageDetailModal from "../Modals/ImageDetailModal";

export default function Post({ name, text, i, pfp, img }: IPost) {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [replies, setReplies] = useState(0);
  async function checkLike() {
    setAuthToken(localStorage.getItem("token") || "");
    const response = await api.get(`/like/check/${i}`); //send request untuk check kalo udh di like blm
    const liked = response.data;
    if (liked) setIsLiked(true);
    else setIsLiked(false);
  }

  async function getLikes() {
    const x = await api.get(`/like/${i}`); //ambil semua like di suatu post
    setLike(x.data.length); //update state like
  }

  async function handleLike() {
    setAuthToken(localStorage.getItem("token") || "");
    await api.post(`/like/${i}`); //send request untuk membuat like baru
    const x = await api.get(`/like/${i}`); //ambil semua like di suatu post
    setLike(x.data.length); //update state like dengan panjang response
    await checkLike(); //update state isLiked dengan memanggil ulang checkLike()
  }

  async function getReplies() {
    try {
      const response = await api.get(`/reply/${i}`);
      setReplies(response.data.length);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkLike();
    getLikes();
    getReplies();
  }, []);

  return (
    <Stack direction="row" gap={1} key={i}>
      <Avatar
        src={`${pfp}`}
      />
      <Stack direction="column" gap={1}>
        <Stack direction="row" gap={1} flex={3}>
          <h3>{name}</h3>
          <small style={{ color: "gray" }}>@{name}</small>
          <small>&#x2022; 4h ago</small>
        </Stack>

        <Stack direction="row" gap={1} flexWrap={"wrap"}>
          {img.map((element: any, index: number) => (
            <ImageDetailModal image={element.image} postId={i} key={index} />
          ))}
        </Stack>


        <p style={{ textAlign: "left" }}>{text}</p>
        <Stack direction="row" gap={4}>
          <Stack direction="row" gap={1}>
            <button
              onClick={handleLike}
              style={{
                backgroundColor: "transparent",
                color: "inherit",
                cursor: "pointer",
                border: "none",
                display: "inherit",
              }}
            >
              {isLiked ? (
                <FavoriteIcon fontSize="small" />
              ) : (
                <FavoriteBorderOutlinedIcon fontSize="small" />
              )}
            </button>
            <p>{like}</p>
          </Stack>
          <Stack direction="row" gap={1}>
            <Link
              to={`/reply/${i}`}
              style={{
                textDecoration: "none",
                color: "white",
                marginBottom: "10px",
              }}
            >
              <CommentIcon fontSize="small" />
            </Link>
            <p>{replies}</p>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
