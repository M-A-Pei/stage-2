import {Link, Outlet} from 'react-router-dom'
import DumbwaysImg from '../assets/Dumbways.png'
import { Box, Grid, Stack, Button, Typography } from '@mui/material'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';

function Layout() {
  return (
    <Grid container>
      <Grid item xs={2} sx={{height: "100vh", bgcolor: "secondary.dark", borderRight: "1px solid white"}}>
          <Stack direction="column" spacing={2} sx={{height: "100vh", p:2}}>
            <img height='100px' width='100px' className='rounded-circle border' src={DumbwaysImg} alt="" />
            <Stack gap={1} direction="row" alignItems="center">
              <HouseOutlinedIcon sx={{color: "white"}}/>
              <Link to='home' style={{color: 'white', textDecoration: 'none', fontSize: '20px'}}>Home</Link>
            </Stack>

            <Stack gap={1} direction="row" alignItems="center">
              <Person4OutlinedIcon sx={{color: "white"}}/>
              <Link to='about' style={{color: 'white', textDecoration: 'none', fontSize: '20px'}}>About</Link>
            </Stack>

            <Stack gap={1} direction="row" alignItems="center">
              <FavoriteBorderOutlinedIcon sx={{color: "white"}}/>
              <Link to='/' style={{color: 'white', textDecoration: 'none', fontSize: '20px'}}>Followers</Link>
            </Stack>

            <Stack gap={1} direction="row" alignItems="center">
              <ChecklistOutlinedIcon sx={{color: "white"}}/>
              <Link to='todo' style={{color: 'white', textDecoration: 'none', fontSize: '20px'}}>Todo List</Link>
            </Stack>
        
            <Button variant="contained" sx={{bgcolor: "primary.main", borderRadius: "20px", width:"100%"}}>make new post</Button>
          </Stack>
      </Grid>

      <Grid item xs={7} sx={{height: "100vh", bgcolor: "secondary.dark", color: "white", p:3, overflowY: "scroll"}}>
        <Outlet/>
      </Grid>

      <Grid item xs={3} sx={{height: "100vh", bgcolor: "secondary.dark", borderLeft: "1px solid white"}}>
        <Stack direction="column" spacing={2} sx={{height: "100vh", p:2}}>
          <Box sx={{height: "25vh", bgcolor: "secondary.main", borderRadius: "20px"}}>
            <Box sx={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmX8Ywh4t3AA6OvDYaz7gXIrnWCNv1urplg&s)", height: "45%", backgroundRepeat: "repeat-y", backgroundSize: "cover", borderRadius: "20px 20px 0 0"}}></Box>
            <Box display="flex">
            <img height='80px' width='80px' src="https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg" style={{top:"-40px", position: "relative", borderRadius: "50%", margin: "5px"}} alt="" />
            <Typography variant='subtitle1' sx={{color: "white"}}>Itadori Yuji</Typography>
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