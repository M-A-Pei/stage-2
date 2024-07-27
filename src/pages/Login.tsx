import { Typography, Stack, TextField, Button, FormControl, FormHelperText } from "@mui/material"
import DumbwaysImg from "../assets/Dumbways.png"
import {Link} from "react-router-dom"
import useStore from "../state/hooks"
import { Controller } from "react-hook-form"
import useLoginValidation from "../hook/useLoginValidations"
import { ILoginForm } from "../types/login"


function Login() {
  const {setUser} = useStore()
  const { control, reset, handleSubmit } = useLoginValidation() 

  function onSubmit(data: ILoginForm) {
    const dummyName = data.email.split("@")[0]
    setUser({
      username: dummyName,
      email: data.email,
      profile: {
        avatar: "https://i.pinimg.com/originals/a9/99/ee/a999ee87f1cc57beb5cc1c60fc96cded.jpg",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmX8Ywh4t3AA6OvDYaz7gXIrnWCNv1urplg&s",
        bio: "im the default user!"
      }
    })
    reset()
  }

  return (
    <div style={{width: "40%"}}>
      <img src={DumbwaysImg} width="120px" height="120px" alt="" />
      <Typography variant="h4"> Login to dumbways</Typography>
      
      <form style={{marginTop: "10px"}} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width="100%">
          <Controller
            name="email"
            control={control}
            render={({field, fieldState})=>(
              <FormControl error={Boolean(fieldState.error)}>
                <TextField {...field} label="Email" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="email"></TextField>
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
                <TextField {...field} label="password" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="password"></TextField>
                {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Typography variant="subtitle2">Don't have an account? <Link to="/auth/register">Register</Link></Typography>
          <Button variant="contained" type="submit" sx={{bgcolor: "orange", borderRadius: "20px", width:"50%"}}>Login</Button>
        </Stack>
      </form>
    </div>
  )
}

export default Login