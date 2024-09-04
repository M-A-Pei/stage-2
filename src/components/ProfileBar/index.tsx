import { Avatar, Box, Typography } from "@mui/material";
import useStore from "../../state/hooks";
import { api, setAuthToken } from "../../api";
import { useEffect, useState } from "react";
import EditUserModal from '../Modals/EditUserModal';
import FollowButton from "../Buttons/FollowButton";

interface IProfile {
  username: string;
  pfp: string;
  banner: string;
  bio: string;
  id?: number
}

async function getFollowers(setFollowers: Function) {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    const x = await api.get("/follow/followers");
    setFollowers(x.data.length);
  } catch (error) {
    console.log(error);
  }
}

async function getFollowing(setFollowing: Function) {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    const x = await api.get("/follow/following");
    setFollowing(x.data.length);
  } catch (error) {
    console.log(error);
  }
}

export default function ProfileBar({ username, pfp, banner, bio, id }: IProfile) {
  const { user } = useStore();
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    getFollowers(setFollowers);
    getFollowing(setFollowing);
  });

  return (
    <Box
      sx={{ height: "40vh", bgcolor: "secondary.main", borderRadius: "20px" }}
    >
      <Box
        sx={{
          backgroundImage: `url("${banner}")`,
          backgroundColor: "white",
          height: "35%",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
          borderRadius: "20px 20px 0 0",
        }}
      ></Box>
      <Box display="flex" sx={{ height: "20%" }}>
          <Avatar
            sx={{
              height: "90px",
              width: "90px",
              position: "relative",
              left: "5%",
              top: "-50px",
            }}
            src={`${pfp}`}
            alt=""
          />
        {user.username === username ? (
            <EditUserModal/>
        ) : (
          <FollowButton id={id}/>
        )}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ marginLeft: "10px", color: "white" }}
      >
        <Typography variant="h5">{username}</Typography>
        <Typography sx={{ color: "gray", fontSize: "12px" }}>
          @{username}
        </Typography>
        <Typography sx={{ fontSize: "13px" }}>{bio}</Typography>
        <Box display="flex">
          <Typography sx={{ fontSize: "13px", marginRight: "5px" }}>
            {following}
          </Typography>
          <Typography
            sx={{ fontSize: "13px", marginRight: "25px", color: "gray" }}
          >
            following
          </Typography>
          <Typography sx={{ fontSize: "13px", marginRight: "5px" }}>
            {followers}
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "gray" }}>
            followers
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
