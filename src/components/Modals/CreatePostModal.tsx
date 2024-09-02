import { useState } from 'react'
import { api } from '../../api';
import { toast } from 'react-toastify';
import { Avatar, Box, Button, Modal, Stack, TextField } from '@mui/material';
import useStore from '../../state/hooks';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SendIcon from '@mui/icons-material/Send';

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "secondary.dark",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    display: "flex",
    flexDirection: "column",
  };
  
  const inputStyle = {
    borderRadius: "10px",
    mb: "15px",
    "& .MuiInputLabel-filled": {
      color: "gray",
    },
    "& .MuiFilledInput-input": {
      color: "white",
    },
    width: "100%",
  };
export default function CreatePostModal() {
    const { user } = useStore();
    const [open, setOpen] = useState(false); //modal states
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [post, setPost] = useState<string>(""); //post state
    const [images, setImages] = useState({} as any)

    function onChangeFile(e: any){
      setImages(e.target.files)
    }

    async function handlePost() {
        const postData = new FormData();
        for(let i = 0; i < images.length; i++){
          postData.append("images", images[i])
        }
        postData.append("body", post);
        console.log(postData)
        try {
          const token = localStorage.getItem("token");
          await api.post("/posts", postData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: "Bearer " + token
            }
          });
          toast.success("post made successfully");
          setPost("")
          setImages("")
          handleClose();
        } catch (error: any) {
          toast.error(error.response);
          handleClose();
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
            <Stack flexDirection="row" sx={{ marginBottom: "30px", borderBottom: "1px solid gray" }}>
              <Avatar
              sx={{ width: "50px", height: "50px" }}
                src={`/${user.profile.avatar}`}
              />
              <TextField
                value={post}
                onChange={(e) => setPost(e.target.value)}
                label="whats on your mind?"
                color="primary"
                variant="filled"
                sx={inputStyle}
                multiline
                rows={4}
              />
              <input onChange={onChangeFile} multiple type="file" hidden id='postImage' />
              
            </Stack>

            <Stack direction="row" justifyContent={"space-between"}>
              <label htmlFor="postImage">
                <AddAPhotoIcon sx={{color: "white"}}/>
              </label>
              
              <Button
                onClick={handlePost}
                variant="contained"
                sx={{
                  bgcolor: "primary.dark",
                  borderRadius: "20px",
                  width: "20%",
                }}
              >
                <SendIcon/>
              </Button>
            </Stack>
            
          </Box>
        </Modal>
      </div>

      <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ bgcolor: "primary.main", borderRadius: "20px", width: "100%" }}
          >
            New Post
        </Button>
    </>
  )
}
