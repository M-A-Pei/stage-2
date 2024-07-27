import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import useStore from '../state/hooks'
import MiniProfile from '../components/MiniProfile'
import ProfileBar from '../components/ProfileBar'

function Layout() {
  const {isLogin, user} = useStore()
  const location = useLocation().pathname
  console.log(location != "/profile")

  if(!isLogin){
    return <Navigate to="/auth/login"/>
  }

  return (
    <Grid container>
      <Sidebar/>

      <Grid item xs={6} sx={{height: "100vh", bgcolor: "secondary.dark", color: "white", p:1, overflowY: "scroll"}}>
        <Outlet/>
      </Grid>

      <Grid item xs={4} sx={{height: "100vh", bgcolor: "secondary.dark", borderLeft: "1px solid white"}}>
        <Stack direction="column" spacing={2} sx={{height: "100vh", p:2}}>

          {location != "/profile" &&
            <ProfileBar username={user.username} bio={user.profile.bio} pfp={user.profile.avatar} banner={user.profile.banner}/>
          }
          

          <Box sx={{height: "60vh", bgcolor: "secondary.main", borderRadius: "20px", color: "white", p:2, overflowY: "scroll"}}>
            <Typography variant="h5" gutterBottom={true}>Suggested for you</Typography>
            <Stack gap={2} direction="column">
              <MiniProfile username="Kugisaki Nobara" pfp='https://i.pinimg.com/736x/71/8d/87/718d875f00e3870c0307601c77d24358.jpg'/>
              <MiniProfile username="Fushiguro Megumi" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs1i7Lo8m40B3osWs98w9ZrxrUpF7S4WXbA&s'/>
              <MiniProfile username="Todo Aoi" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Jg0TjcTP1MGTbgrfljt7UdjfZeryB_YWiQ&s'/>
              <MiniProfile username="Gojo Satoru" pfp='https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg'/>

            </Stack>
          </Box>

        </Stack>
      </Grid>
    </Grid>
  )
}

export default Layout