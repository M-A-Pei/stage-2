import { Box, Button, FormControl, FormHelperText, Modal, Stack, TextField} from '@mui/material'
import { useState } from 'react'
import useStore from '../../state/hooks';
import { Controller } from 'react-hook-form';
import useEditProfileValidation from '../../hook/useEditProfileValidation';
import { IEditProfileForm } from '../../types/editProfile';
import { api, setAuthToken } from '../../api';
import { toast } from 'react-toastify';
import EditAvatarModal from './EditAvatarModal';
import EditBannerModal from './EditBannerModal';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "secondary.dark",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 2
};
export default function EditUserModal() {
  const { user } = useStore();
  const {control, reset, handleSubmit} = useEditProfileValidation()
    const [open, setOpen] = useState(false); //modal states
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function onSubmit(data: IEditProfileForm){
      console.log(data)
      
      try {
          const token = localStorage.getItem("token")
          if(token){
              setAuthToken(token)
          }
          await api.patch("/users", data)
          toast.success("account successfully updated")
          reset()
      } catch (error: any) {
          toast.error(error.response.data.error)
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
              <h3 style={{color: "white"}}>Edit Your Profile</h3>
              <Box
                sx={{
                  backgroundImage: `url("http://localhost:3000/uploads/${user.profile.banner}")`,
                  backgroundColor: 'whitesmoke',
                  height: "150px",
                  backgroundRepeat: "repeat-y",
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  mt: 1,
                }}
                >
                    <EditBannerModal/>
                </Box>
           <EditAvatarModal/>

              <form style={{padding: "10px", top: "-50px", position: "relative",}} encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
               <Stack gap={2} direction="column">
                
                <Controller
                    name="username"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField size='small' {...field} label="username" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="description"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField multiline rows={3} {...field} label="description" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField size='small' {...field} label="confirm your password" variant="filled" sx={{bgcolor: "grey", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Button variant="contained" sx={{bgcolor: "primary.main", borderRadius: "20px", width:"30%"}} type="submit">Edit Profile</Button>
            </Stack>
        </form>
              </Box>
            </Modal>
          </div>
    
          <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  bgcolor: "primary.dark",
                  borderRadius: "20px",
                  height: "50%",
                  marginLeft: "auto",
                  mt: "10px",
                  color: "white",
                }}
              >
                Edit Profile
            </Button>
        </>
      )
}
