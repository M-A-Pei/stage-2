import { Stack, TextField, Button} from "@mui/material"
import posts from '../DummyData/posts'
import Post from "../components/Post"

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
          <Post i={i} name={e.name} text={e.text}/>
        ))}
    </Stack>
  )
}

export default Home