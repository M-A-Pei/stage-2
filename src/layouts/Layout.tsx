import {Outlet, Navigate} from 'react-router-dom'
import { Box, Grid, Stack, Button, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import useStore from '../state/hooks'
import MiniProfile from '../components/MiniProfile'

function Layout() {
  const {isLogin} = useStore()

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
          <Box sx={{height: "40vh", bgcolor: "secondary.main", borderRadius: "20px"}}>
            <Box sx={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmX8Ywh4t3AA6OvDYaz7gXIrnWCNv1urplg&s)", height: "30%", backgroundRepeat: "repeat-y", backgroundSize: "cover", borderRadius: "20px 20px 0 0"}}></Box>
            <Box display="flex" sx={{height: "20%"}}>
              <img height='80px' width='80px' src="https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg" style={{top:"-40px", position: "relative", borderRadius: "50%", margin: "5px"}} alt="" />
              <Button variant="contained" sx={{bgcolor: "secondary.light", ml: "auto", borderRadius: "10px", height: "40%", p:"3px" ,marginTop: "5px", fontSize: "10px"}}>follow</Button>
            </Box>
            <Box display="flex" flexDirection="column" sx={{marginLeft: "10px", color: "white"}}>
              <Typography variant='h5'>Itadori Yuji</Typography>
              <Typography sx={{color: "gray", fontSize: "12px"}}>@itadori</Typography>
              <Typography sx={{fontSize: "13px"}}>im right, im left, im right, im left</Typography>
              <Box display="flex" >
                <Typography sx={{fontSize: "13px", marginRight: "5px"}}>100</Typography>
                <Typography sx={{fontSize: "13px", marginRight: "25px", color: 'gray'}}>following</Typography>
                <Typography sx={{fontSize: "13px", marginRight: "5px"}}>100</Typography>
                <Typography sx={{fontSize: "13px", color: "gray"}}>followers</Typography>
              </Box>
            </Box>

          </Box>
          <Box sx={{height: "60vh", bgcolor: "secondary.main", borderRadius: "20px", color: "white", p:2, overflowY: "scroll"}}>
            <Typography variant="h5" gutterBottom={true}>Suggested for you</Typography>
            <Stack gap={2} direction="column">
              <MiniProfile username="Kugisaki Nobara" tag="@Nobara" pfp='https://i.pinimg.com/736x/71/8d/87/718d875f00e3870c0307601c77d24358.jpg'/>
              <MiniProfile username="Fushiguro Megumi" tag="@thebum" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs1i7Lo8m40B3osWs98w9ZrxrUpF7S4WXbA&s'/>
              <MiniProfile username="Todo Aoi" tag="@Nobara" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Jg0TjcTP1MGTbgrfljt7UdjfZeryB_YWiQ&s'/>
              <MiniProfile username="Kugisaki Nobara" tag="@Nobara" pfp='https://i.pinimg.com/736x/71/8d/87/718d875f00e3870c0307601c77d24358.jpg'/>

              <Stack direction="row" gap={1}>
                <img src="" width="60px" style={{borderRadius: "50%"}} alt="" />
                <Stack direction="column">
                  <h4>Aoi Todo</h4>
                  <small>@todo</small>
                </Stack>
                <Button variant='contained' sx={{bgcolor: "secondary.light", borderRadius: "20px", color: "white", fontSize:"8px", ml:"auto", p:"3px", height: "50%", alignSelf: "center"}}>follow</Button>
              </Stack>

              <Stack direction="row" gap={1}>
                <img src="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg" width="60px" style={{borderRadius: "50%"}} alt="" />
                <Stack direction="column">
                  <h4>Satoru Gojo</h4>
                  <small>@chosenone</small>
                </Stack>
                <Button variant='contained' sx={{bgcolor: "secondary.light", borderRadius: "20px", color: "white", fontSize:"8px", ml:"auto", p:"3px", height: "50%", alignSelf: "center"}}>follow</Button>
              </Stack>

            </Stack>
          </Box>

        </Stack>
      </Grid>
    </Grid>
  )
}

export default Layout