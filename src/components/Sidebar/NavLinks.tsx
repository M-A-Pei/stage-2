import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { NavLink } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { api } from "../../api";
import { useEffect, useState } from "react";
import useStore from "../../state/hooks";

async function getUser(username: string, setUserId: Function) {
  try {
    const x = await api.get(`/users/ByName/${username}`);
    setUserId(x.data.id);
  } catch (error) {
    console.log(error);
  }
}
export default function NavLinks() {
  const { user } = useStore();

  const [userId, setUserId] = useState(0);

  useEffect(() => {
    getUser(user.username, setUserId);
  }, []);

  return (
    <>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{ color: isActive ? "primary.light" : "white" }}
          >
            <HouseOutlinedIcon />
            <Typography variant="subtitle1">Home</Typography>
          </Stack>
        )}
      </NavLink>

      <NavLink to="/search" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{ color: isActive ? "primary.light" : "white" }}
          >
            <ManageSearchIcon />
            <Typography variant="subtitle1">search</Typography>
          </Stack>
        )}
      </NavLink>

      <NavLink to="/follow/following" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{ color: isActive ? "primary.light" : "white" }}
          >
            <FavoriteBorderOutlinedIcon />
            <Typography variant="subtitle1">Followers</Typography>
          </Stack>
        )}
      </NavLink>

      <NavLink to="/todo" style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{ color: isActive ? "primary.light" : "white" }}
          >
            <ChecklistOutlinedIcon />
            <Typography variant="subtitle1">Todo List</Typography>
          </Stack>
        )}
      </NavLink>

      <NavLink
        to={"/profile/" + userId + "/allpost"}
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{ color: isActive ? "primary.light" : "white" }}
          >
            <Person4OutlinedIcon />
            <Typography variant="subtitle1">Profile</Typography>
          </Stack>
        )}
      </NavLink>
    </>
  );
}
