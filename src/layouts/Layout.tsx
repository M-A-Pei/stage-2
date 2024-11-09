import { Outlet, Navigate, useLocation, useParams } from "react-router-dom";
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Sidebar from "../components/Sidebar";
import useStore from "../state/hooks";
import MiniProfile from "../components/MiniProfile";
import ProfileBar from "../components/ProfileBar";
import { useEffect, useMemo, useState } from "react";
import { api } from "../api";
import { useSwipeable } from 'react-swipeable';

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
  const [users, setUsers] = useState<any>([]);
  const [visibleSidebar, setVisibleSidebar] = useState(false)
  const [visibleProfilebar, setVisibleProfilebar] = useState(false)
  const [swipeCount, setSwipeCount] = useState(0)

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => swipeCount > -1 ? setSwipeCount(swipeCount - 1) : "",
    onSwipedRight: () => swipeCount < 1 ? setSwipeCount(swipeCount + 1) : "",
    trackMouse: true,
  })

  function swipeLogic(){
    if(swipeCount == -1){
      setVisibleProfilebar(true)
    }else if(swipeCount == 1){
      setVisibleSidebar(true)
    }else{
      setVisibleProfilebar(false)
      setVisibleSidebar(false)
    }
  }

  async function getUsers() {
    try {
      const x = await api.get("/follow/following");
      const data = [...x.data];
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkLoadProfileBar(user, userID, setLoadProfileBar);
    getUsers()
  }, [location]);

  useMemo(()=>{
    swipeLogic()
  }, [swipeCount])

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Grid container  {...(isSmallScreen ? handleSwipe : {})}>
      <Sidebar visible={visibleSidebar}/>

      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          height: "100vh",
          bgcolor: "secondary.dark",
          color: "white",
          p: 2,
          overflowY: "scroll",
          flex: { sm: "1" },
        }}
      >
        <Outlet/>
      </Grid>

      <Grid
        item
        lg={3}
        sx={{
          height: "100vh",
          bgcolor: "secondary.dark",
          borderLeft: "1px solid white",
          display: {
            xs: visibleProfilebar ? 'block' : 'none',
            lg: "block",
          },
          position: {
            xs: "fixed",
            lg: "static"
          },
          right: 0,
          top: 0,  // Ensure it's at the top of the viewport
          zIndex: 10
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
              {users.map((e: any) => (
                <MiniProfile
                  id={e.id}
                  key={e.id}
                  username={e.username}
                  pfp={e.profilePic}
                />
              ))}
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
