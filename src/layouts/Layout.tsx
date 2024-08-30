import { Outlet, Navigate, useLocation, useParams } from "react-router-dom";
import { Box, Grid, Stack, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Sidebar from "../components/Sidebar";
import useStore from "../state/hooks";
import MiniProfile from "../components/MiniProfile";
import ProfileBar from "../components/ProfileBar";
import { useEffect, useState } from "react";
import { api } from "../api";

async function checkLoadProfileBar(
  FeUser: any,
  userID: any,
  setLoadProfileBar: Function
) {
  const stringedLocation = location.toString();
  if (!stringedLocation.includes("profile")) {
    return setLoadProfileBar(true);
  }

  try {
    const x = await api.get(`/users/ById/${userID}`);
    const BeUser = x.data;
    if (BeUser.email != FeUser.email) {
      return setLoadProfileBar(true);
    }
  } catch (error) {
    console.log(error);
  }

  setLoadProfileBar(false);
}

function Layout() {
  const { isLogin, user } = useStore();
  const location = useLocation().pathname;
  const [LoadProfileBar, setLoadProfileBar] = useState(true);
  const { userID } = useParams();

  useEffect(() => {
    checkLoadProfileBar(user, userID, setLoadProfileBar);
  }, [location]);

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Grid container>
      <Sidebar />

      <Grid
        item
        xs={6}
        sx={{
          height: "100vh",
          bgcolor: "secondary.dark",
          color: "white",
          p: 2,
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </Grid>

      <Grid
        item
        xs={4}
        sx={{
          height: "100vh",
          bgcolor: "secondary.dark",
          borderLeft: "1px solid white",
        }}
      >
        <Stack direction="column" spacing={2} sx={{ height: "100vh", p: 2 }}>
          {LoadProfileBar && (
            <ProfileBar
              username={user.username}
              bio={user.profile.bio}
              pfp={user.profile.avatar}
              banner={user.profile.banner}
            />
          )}

          <Box
            sx={{
              height: "30vh",
              bgcolor: "secondary.main",
              borderRadius: "20px",
              color: "white",
              p: 2,
              overflowY: "scroll",
            }}
          >
            <Typography variant="h6" gutterBottom={true}>
              Suggested for you
            </Typography>
            <Stack gap={2} direction="column">
              <MiniProfile
                id={100}
                username="Kugisaki Nobara"
                pfp="https://i.pinimg.com/736x/71/8d/87/718d875f00e3870c0307601c77d24358.jpg"
              />
              <MiniProfile
                id={100}
                username="Fushiguro Megumi"
                pfp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs1i7Lo8m40B3osWs98w9ZrxrUpF7S4WXbA&s"
              />
              <MiniProfile
                id={100}
                username="Todo Aoi"
                pfp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Jg0TjcTP1MGTbgrfljt7UdjfZeryB_YWiQ&s"
              />
              <MiniProfile
                id={100}
                username="Gojo Satoru"
                pfp="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg"
              />
            </Stack>
          </Box>

          <Box
            sx={{
              height: "auto",
              bgcolor: "secondary.main",
              borderRadius: "20px",
              color: "white",
              p: 2,
            }}
          >
            <Stack flexDirection="row" gap={1}>
              <p>developed by Syafii &#x2022;</p>
              <YouTubeIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
              <InstagramIcon fontSize="small" />
            </Stack>
            <small style={{ color: "gray" }}>
              powered by Dumbways &#x2022; #1 coding bootcamp
            </small>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Layout;
