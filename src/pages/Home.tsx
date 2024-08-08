import { Stack, TextField, Button, Modal, Box} from "@mui/material"
import Post from "../components/Post"
import {useState} from 'react'
import useStore from "../state/hooks"
import useGetAllPost from "../hook/useGetAllPost";
import { api } from "../api";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'secondary.dark',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column"
};

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [post, setPost] = useState<String>("")
  
  const posts = useGetAllPost()
  

  const {user} = useStore()

  return (
    <>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack flexDirection="row" sx={{marginBottom: "30px"}}>
            <img height='40px' width='40px' style={{borderRadius: "50%", margin: "5px"}} src={user.profile.avatar} alt="" />
            <TextField value={post} onChange={(e) => setPost(e.target.value)} label="whats on your mind?" color="primary" variant='filled'
              sx={{
                borderRadius: "10px",
                mb: "15px",
                "& .MuiInputLabel-filled": {
                  color: "gray",
                },
                "& .MuiFilledInput-input": {
                  color: "white"
                },
                width: "100%",
                }} size="small"
                />
          </Stack>
        
          <Button variant="contained" sx={{bgcolor: "primary.dark", borderRadius: "20px", width: "20%", alignSelf: "end"}}>Post</Button>
        </Box>
      </Modal>
    </div>

    <Stack spacing={3} direction="column">
        <h1>Home Page</h1>
        <Stack borderBottom={"1px solid gray"} direction="row" alignContent="center" justifyContent="center">
          <img height='60px' width='60px' style={{borderRadius: "50%", margin: "5px"}} src={user.profile.avatar} alt="" />
          <TextField value={post} onChange={(e) => setPost(e.target.value)} label="whats on your mind?" color="primary" variant='filled'
              sx={{
                borderRadius: "10px",
                color: "white",
                mb: "15px",
                "& .MuiInputLabel-filled": {
                  color: "gray",
                },
                "& .MuiFilledInput-input": {
                  color: "white"
                },
                width: "100%",
                }} size="small"
                />
            <Button variant="contained" onClick={handleOpen} sx={{bgcolor: "primary.dark", borderRadius: "20px", height:"50%"}}>Post</Button>
        </Stack>
    
    </Stack>
    </>
  )
}

export default Home