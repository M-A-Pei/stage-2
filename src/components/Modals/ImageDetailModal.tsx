import { Box, Modal, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { api } from "../../api";
import Post from "../Post";
import ReplyBar from "../replyBar";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "95%",
    bgcolor: "secondary.dark",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
  };

  export default function ImageDetailModal({image, postId}: any) {
    const [post, setPost] = useState<any>({});
    const [done, setDone] = useState(false);
    const [open, setOpen] = useState(false); //modal states
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function getPost() {
      try {
        const response = await api.get(`/posts/${postId}`);
        setPost(response.data);
        setDone(true);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getPost();
    }, [])

  return (
    <>
        <img onClick={handleOpen} style={{height: "150px"}} src={`${image}`} alt="" />

        <div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Stack gap={1} direction={"row"} style={{textAlign: "center", alignItems: "center", color: "white", height: "100%"}}>
                    <HighlightOffIcon fontSize="large" sx={{cursor: "pointer", color: "white", position: "absolute", top: 0, right: 0}} onClick={handleClose}/>
                    <img height={"100%"} style={{maxWidth: "70%"}} src={`${image}`} alt="" />
                    <Stack gap={2} direction={"column"} sx={{flexGrow: 1, overflowY: "scroll"}} height={"100%"}>
                        {done && (
                          <Post
                            i={post.id}
                            name={post.author.username}
                            pfp={post.author.profilePic}
                            text={post.body}
                            img={[]}
                          />
                        )}
                        <ReplyBar id={postId}/>
                    </Stack>
                    
                </Stack>
            </Box>
        </Modal>
          </div>
    </>
  )
}
