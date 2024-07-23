import {Outlet, Navigate} from 'react-router-dom'
import { Box, Grid, Stack, Button, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import useStore from '../state/hooks'

function Layout() {
  const {user, isLogin} = useStore()

  if(!isLogin){
    return <Navigate to="/auth/login"/>
  }

  return (
    <Grid container>
      <Sidebar/>

      <Grid item xs={7} sx={{height: "100vh", bgcolor: "secondary.dark", color: "white", p:3, overflowY: "scroll"}}>
        <Outlet/>
      </Grid>

      <Grid item xs={3} sx={{height: "100vh", bgcolor: "secondary.dark", borderLeft: "1px solid white"}}>
        <Stack direction="column" spacing={2} sx={{height: "100vh", p:2}}>
          <Box sx={{height: "25vh", bgcolor: "secondary.main", borderRadius: "20px"}}>
            <Box sx={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmX8Ywh4t3AA6OvDYaz7gXIrnWCNv1urplg&s)", height: "45%", backgroundRepeat: "repeat-y", backgroundSize: "cover", borderRadius: "20px 20px 0 0"}}></Box>
            <Box display="flex">
            <img height='80px' width='80px' src="https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg" style={{top:"-40px", position: "relative", borderRadius: "50%", margin: "5px"}} alt="" />
            <Typography variant='subtitle1' sx={{color: "white"}}>{user.fullName}</Typography>
            <Button variant="contained" sx={{bgcolor: "secondary.light", ml: "auto", borderRadius: "10px", height: "8%", p:"3px" ,marginTop: "5px", fontSize: "10px"}}>follow</Button>
            </Box>
          </Box>
          <Box sx={{height: "70vh", bgcolor: "secondary.main", borderRadius: "20px"}}></Box>

        </Stack>
      </Grid>
    </Grid>
  )
}

export default Layout