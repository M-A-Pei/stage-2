import { Stack, Avatar } from "@mui/material";
import useStore from "../state/hooks";
import { useState } from "react";
import { api, setAuthToken } from "../api";

export default function EditAvatar(){
  const {user} = useStore()
  const [file, setFile] = useState({} as any)

  function onChangeFile(e: any){
    setFile(e.target.files[0])
  }

  async function save(){
    const formData = new FormData()
    formData.append("avatar", file)
    formData.append("avatarName", file.name)
    try {
        const token = localStorage.getItem("token")
        if(token){
            setAuthToken(token)
        }
        await api.patch("/users/editAvatar", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <Stack direction={"column"} gap={2}>
        <Stack gap={1} direction={"column"} style={{textAlign: "center", alignItems: "center"}}>
            <h1>Edit Avatar</h1>
            <Avatar sx={{width: 200, height: 200}} src={user.profile.avatar}/>
            <input type="file" onChange={onChangeFile}/>
            <button onClick={save}>Save</button>
        </Stack>
    </Stack>
  )
}
