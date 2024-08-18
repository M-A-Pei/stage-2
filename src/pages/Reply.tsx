import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { api } from "../api";
import { useEffect, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import useStore from "../state/hooks";

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

export default function Reply(){
    const {id} = useParams();
    const [post, setPost] = useState<any>({})
    const [done, setDone] = useState(false)
    const {user} = useStore()

    useEffect(()=>{
        getPost()
    }, [])

    async function getPost(){
        try {
            const response = await api.get(`/posts/${id}`)
            setPost(response.data)
            setDone(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack direction="column" gap={2}>
            {done && <Post i={post.id} name={post.author.username} pfp={post.author.profilePic} text={post.body}/>}
            <Stack borderBottom={"1px solid gray"} direction="row" alignContent="center" justifyContent="center">
                <img height='40px' width='40px' style={{borderRadius: "50%", margin: "5px"}} src={user.profile.avatar} alt="" />
                <TextField label="say something" color="primary" variant='filled' sx={inputStyle} size="small"/>
                <Button variant="contained" sx={{bgcolor: "primary.dark", borderRadius: "20px", height:"50%"}}>Reply</Button>
            </Stack>
        </Stack>
    )


}