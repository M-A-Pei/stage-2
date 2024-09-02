import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import FollowButton from '../Buttons/FollowButton';

interface IMiniProfile {
  pfp: string;
  username: String;
  id: number;
}


export default function MiniProfile({ pfp, username, id }: IMiniProfile) {
  return (
    <Stack direction="row" gap={1}>
      <Avatar
        sx={{
          width: "50px",
          height: "50px",
        }}
        src={`/${pfp}`}
      />
      <Link
        to={`/profile/${id}/allpost`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Stack direction="column">
          <h3>{username}</h3>
          <small style={{ color: "gray" }}>@{username}</small>
        </Stack>
      </Link>
      <FollowButton id={id}/>
    </Stack>
  );
}
