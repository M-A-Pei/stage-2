import { Stack, TextField, Button} from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import posts from '../DummyData/posts'

function Home() {

  return (
    <Stack spacing={3} direction="column">
        <h1>Home Page</h1>
        <Stack borderBottom={"1px solid gray"} direction="row" alignContent="center" justifyContent="center">
          <img height='60px' width='60px' style={{borderRadius: "50%", margin: "5px"}} src="https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg" alt="" />
          <TextField label="whats on your mind?" color="primary" variant='filled'
          sx={{
            borderRadius: "10px",
            mb: "15px",
            "& .MuiInputLabel-filled": {
              color: "gray",
            },
            width: "100%",
            }} size="small"
            />
            <Button variant="contained" sx={{bgcolor: "primary.dark", borderRadius: "20px", height:"50%"}}>Post</Button>
        </Stack>
        
        {posts.map((e, i) => (
          <Link to={`/detail/${i}`} key={i} style={{textDecoration: "none", color: "white"}}>
            <Stack direction="row" gap={1}>
              <img src="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg" width="60px" height="60px" style={{borderRadius: "50%"}} alt="" />
              <Stack direction="column" gap={1}>
                <Stack direction="row" gap={1}>
                  <h3>{e.name}</h3>
                  <small style={{color: "gray"}}>{e.tag}</small>
                  <small>&#x2022; 4h ago</small>
                </Stack>
                <p>{e.text}</p>
                <Stack direction="row" gap={4}>
                  <Stack direction="row" gap={1}>
                    <FavoriteBorderOutlinedIcon fontSize="small"/>
                    <p>40</p>
                  </Stack>
                  <Stack direction="row" gap={1}>
                    <CommentIcon fontSize="small"/>
                    <p>40</p>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            </Link>
        ))}
    </Stack>
  )
}

export default Home