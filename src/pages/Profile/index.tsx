import ProfileBar from "../../components/ProfileBar";
import { useParams, Outlet, NavLink } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../api";
import DEFAULTPFP from "../../assets/defaults/defaultpfp.jpg";
import DEFAULTBANNER from "../../assets/defaults/defaultBanner.avif";

interface IUser {
  username: string;
  description: string;
  profilePic: string;
  id: number;
  email: string;
  banner: string;
}

export default function Profile() {
  const { userID } = useParams();
  const [user, setUser] = useState<IUser>({
    username: "",
    description: "",
    profilePic: "",
    id: 0,
    email: "",
    banner: "",
  });
  const [done, setDone] = useState(false);

  async function getUser() {
    try {
      const x = await api.get(`/users/ById/${userID}`);
      setUser(x.data);
      setDone(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Stack flexDirection="column">
      <ProfileBar
        username={user.username}
        pfp={user.profilePic || DEFAULTPFP}
        banner={user.banner || DEFAULTBANNER}
        bio={user.description}
      />

      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          bgcolor: "secondary.dark",
          height: "56vh",
          marginTop: "5px",
          borderRadius: "20px",
        }}
      >
        <Stack
          flexDirection="row"
          sx={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        >
          <NavLink to="allpost" style={{ width: "50%" }}>
            {({ isActive }) => (
              <Button
                sx={{
                  width: "100%",
                  color: "white",
                  borderBottom: isActive ? "2px solid orange" : "none",
                }}
                variant="text"
              >
                All post
              </Button>
            )}
          </NavLink>

          <NavLink to="media" style={{ width: "50%" }}>
            {({ isActive }) => (
              <Button
                sx={{
                  width: "100%",
                  color: "white",
                  borderBottom: isActive ? "2px solid orange" : "none",
                }}
                variant="text"
              >
                Media
              </Button>
            )}
          </NavLink>
        </Stack>

        {done && <Outlet context={user} />}
      </Box>
    </Stack>
  );
}
