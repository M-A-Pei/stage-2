import { Stack, TextField, Button, Modal, Box} from "@mui/material"
import Post from "../components/Post"
import {useState, useEffect} from 'react'
import useStore from "../state/hooks"
import { api, setAuthToken } from "../api";
import { toast } from "react-toastify";
import useGetAllPost from "../hook/useGetAllPost";
import DEFAULTPFP from "../assets/defaults/defaultpfp.jpg"

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

const inputStyle = {
  borderRadius: "10px",
  mb: "15px",
  "& .MuiInputLabel-filled": {
    color: "gray",
  },
  "& .MuiFilledInput-input": {
    color: "white"
  },
  width: "100%",
  }

function Home() {
  const [open, setOpen] = useState(false); //modal states
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, setPosts] = useState([])

  const [post, setPost] = useState<String>("") //post state
  useEffect(()=>{
    getPost()
  }, [])

  async function getPost(){
    const response = await useGetAllPost()
    setPosts(response.data)
  }

  const {user} = useStore()

  async function handlePost(){
    const postData = {
      title: "",
      body: post
    }
    try{
      setAuthToken(user.token)
      await api.post("/posts", postData)
      toast.success("post made successfully")
      handleClose()
    }catch(error: any){
      toast.success(error.response.data.error)
      handleClose()
    }
    
  }

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
            <TextField value={post} onChange={(e) => setPost(e.target.value)} label="whats on your mind?" color="primary" variant='filled' sx={inputStyle} size="small"/>
          </Stack>
        
          <Button onClick={handlePost} variant="contained" sx={{bgcolor: "primary.dark", borderRadius: "20px", width: "20%", alignSelf: "end"}}>Post</Button>
        </Box>
      </Modal>
    </div>

    <Stack spacing={3} direction="column">
        <h1>Home Page</h1>
        <Stack borderBottom={"1px solid gray"} direction="row" alignContent="center" justifyContent="center">
          <img height='60px' width='60px' style={{borderRadius: "50%", margin: "5px"}} src={user.profile.avatar} alt="" />
          <TextField value={post} onChange={(e) => setPost(e.target.value)} label="whats on your mind?" color="primary" variant='filled' sx={inputStyle} size="small"/>
          <Button variant="contained" onClick={handleOpen} sx={{bgcolor: "primary.dark", borderRadius: "20px", height:"50%"}}>Post</Button>
        </Stack>
        {posts.map((element: any, i)=>{
          return(<Post key={i} name={element.author.username} text={element.body} pfp={element.author.profilePic || DEFAULTPFP} i={element.id}/>)
        })}
    
    </Stack>
    </>
  )
}

export default Home