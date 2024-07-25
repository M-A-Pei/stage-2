import { Button, Stack } from "@mui/material";

interface IMiniProfile{
    pfp: string,
    username: String,
    tag: String,
}

export default function MiniProfile({pfp, username, tag}: IMiniProfile) {
  return(
    <Stack direction="row" gap={1}>
        <img src={pfp} width="60px" style={{borderRadius: "50%"}} alt="" />
        <Stack direction="column">
            <h3>{username}</h3>
            <small style={{color: "gray"}}>{tag}</small>
        </Stack>
        <Button variant='contained' sx={{bgcolor: "secondary.light", borderRadius: "20px", color: "white", fontSize:"10px", ml:"auto", p:"6px", height: "50%", alignSelf: "center"}}>follow</Button>
    </Stack>
  )
}