import { Button } from "@mui/material";
import { api, setAuthToken } from "../../api";
import { useEffect, useState } from "react";

async function CheckIsFollow(id: number, setIsFollow: Function) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token);
      }
      const x = await api.get(`/follow/isFollowing/${id}`);
      setIsFollow(x.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFollow(id: number, setIsFollow: Function) { 
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token);
      }
      await api.post(`/follow/${id}`);
      CheckIsFollow(id, setIsFollow);
    } catch (error) {
      console.log(error);
    }
  }

export default function FollowButton({id}: any) {
    const [isFollow, setIsFollow] = useState(false);

    useEffect(() => {
      CheckIsFollow(id, setIsFollow);
    }, [id]);

  return (
    <Button
    onClick={() => handleFollow(id, setIsFollow)}
    variant="contained"
    sx={{
      bgcolor: isFollow ? "gray" : "primary.dark",
      borderRadius: "20px",
      color: "white",
      fontSize: "10px",
      ml: "auto",
      p: "6px",
      height: "50%",
      alignSelf: "center",
    }}
  >
    {isFollow ? "unfollow" : "Follow"}
  </Button>
  )
}
