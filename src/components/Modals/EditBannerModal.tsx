import { Box, Modal, Stack } from '@mui/material'
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
    width: 700,
    bgcolor: "secondary.dark",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    p: 2
  };
export default function EditBannerModal() {
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
    formData.append("banner", file)
    formData.append("bannerName", file.name)
    try {
        const token = localStorage.getItem("token")
        if(token){
            setAuthToken(token)
        }
        await api.patch("/users/editBanner", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        toast.success("Banner updated")
        window.location.reload()
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong")
    }
  }
  
  return (
    <>
    <AddAPhotoIcon onClick={handleOpen} style={{float: "right", marginTop: "10px", marginRight: "10px"}}/>

    <div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Stack gap={1} direction={"column"} style={{textAlign: "center", alignItems: "center", color: "white"}}>
                    <h1>Edit Banner</h1>
                    <label htmlFor="avatar">
                        <Box
                            sx={{
                            backgroundImage: `url("http://localhost:3000/uploads/${user.profile.banner}")`,
                            backgroundColor: 'whitesmoke',
                            width: "700px",
                            height: "200px",
                            backgroundRepeat: "repeat-y",
                            backgroundSize: "cover",
                            borderRadius: "20px",
                            mt: 1,
                            }}
                            >
                        </Box>
                        <AddAPhotoIcon sx={{position: "relative", top: "-130px", color: "black", width: 70, height: 70}}/>
                    </label>
                    <input id="avatar" type="file" hidden onChange={onChangeFile}/>
                    <button onClick={save}>Save</button>
                </Stack>
            </Box>
        </Modal>
          </div>
    </>
  )
}
