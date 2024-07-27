import { Box, Button, Typography } from '@mui/material'

interface IProfile {
    username: string,
    pfp: string,
    banner: string,
    bio: string
}

export default function ProfileBar({username,pfp,banner,bio}:IProfile) {

    return(
        <Box sx={{height: "40vh", bgcolor: "secondary.main", borderRadius: "20px"}}>
            <Box sx={{backgroundImage: "url(" + banner + ")", height: "30%", backgroundRepeat: "repeat-y", backgroundSize: "cover", borderRadius: "20px 20px 0 0"}}></Box>
            <Box display="flex" sx={{height: "20%"}}>
              <img height='80px' width='80px' src={pfp} style={{top:"-40px", position: "relative", borderRadius: "50%", margin: "5px"}} alt="" />
              <Button variant="contained" sx={{bgcolor: "secondary.light", ml: "auto", borderRadius: "10px", height: "75%", p:"6px" ,marginTop: "5px", fontSize: "12px"}}>follow</Button>
            </Box>
            <Box display="flex" flexDirection="column" sx={{marginLeft: "10px", color: "white"}}>
              <Typography variant='h5'>{username}</Typography>
              <Typography sx={{color: "gray", fontSize: "12px"}}>@{username}</Typography>
              <Typography sx={{fontSize: "13px"}}>{bio}</Typography>
              <Box display="flex" >
                <Typography sx={{fontSize: "13px", marginRight: "5px"}}>100</Typography>
                <Typography sx={{fontSize: "13px", marginRight: "25px", color: 'gray'}}>following</Typography>
                <Typography sx={{fontSize: "13px", marginRight: "5px"}}>100</Typography>
                <Typography sx={{fontSize: "13px", color: "gray"}}>followers</Typography>
              </Box>
            </Box>
          </Box>
    )
}