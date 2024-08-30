import { Avatar, Box, Button, Modal, Stack } from '@mui/material'
import useStore from '../../state/hooks';
import { useState } from 'react';
import { api, setAuthToken } from '../../api';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { toast } from 'react-toastify';

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "secondary.dark",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    p: 2
  };
export default function EditAvatarModal() {
  const { user } = useStore();
  const [open, setOpen] = useState(false); //modal states
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        toast.success("Avatar updated")
        window.location.reload()
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong")
    }
  }
  
  return (
    <>
    <Button onClick={handleOpen} sx={{position: "relative",right: "35%",top: "-60px", ":hover": {backgroundColor: "transparent"}}}>
        <Avatar
        sx={{
            height: "100px",
            width: "100px",
        }}
        src={`http://localhost:3000/uploads/${user.profile.avatar}`}
        alt=""
        />
    </Button>

    <div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Stack direction={"column"} gap={1}>
                    <Stack gap={1} direction={"column"} style={{textAlign: "center", alignItems: "center", color: "white"}}>
                        <h1>Edit Avatar</h1>
                        <label htmlFor="avatar">
                            <Avatar sx={{width: 200, height: 200}} src={`http://localhost:3000/uploads/${user.profile.avatar}`}/>
                            <AddAPhotoIcon sx={{position: "relative", top: "-130px", color: "black", width: 70, height: 70}}/>
                        </label>
                        <input id="avatar" type="file" hidden onChange={onChangeFile}/>
                        <button onClick={save}>Save</button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
          </div>
    </>
  )
}
