import { Stack, TextField, Button} from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";

function Home() {
  const dummyData = [
    {
      name: "user1",
      tag: "@user1",
      text: " is simply dummy text of then the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      name: "user2",
      tag: "@user3",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },    
    {
      name: "user3",
      tag: "@user3",
      text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },   
    {
      name: "user4",
      tag: "@user4",
      text: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },    
    {
      name: "user5",
      tag: "@user5",
      text: " iing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ]

  return (
    <Stack spacing={3} direction="column">
        <h2>Home Page</h2>
        <Stack borderBottom={"1px solid gray"} direction="row" alignContent="center" justifyContent="center">
          <img height='45px' width='45px' style={{borderRadius: "50%", margin: "5px"}} src="https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg" alt="" />
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
        
        {dummyData.map((e, i) => (
          <Link to={`/detail/${i}`} key={i} style={{textDecoration: "none", color: "white"}}>
            <Stack direction="row" gap={1}>
              <img src="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg" width="45px" height="45px" style={{borderRadius: "50%"}} alt="" />
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