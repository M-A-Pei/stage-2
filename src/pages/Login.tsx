import { Typography, Stack, TextField, Button, FormControl, FormHelperText, Box } from "@mui/material"
import DumbwaysImg from "../assets/Dumbways.png"
import {Link} from "react-router-dom"
import { Controller } from "react-hook-form"
import useLoginValidation from "../hook/useLoginValidations"
import { ILoginForm } from "../types/login"
import useLoginFunction from "../hook/useLoginFunction"


function Login() {
  const { control, reset, handleSubmit } = useLoginValidation() 
  const {handleLogin} = useLoginFunction()

  function onSubmit(data: ILoginForm) {
    handleLogin(data)
    reset()
  }

  return (
    <Box sx={{
      width: {
        xs: '100%',   // 100% width on extra-small screens
        sm: '80%',    // 80% width on small screens
        md: '60%',    // 60% width on medium screens
        lg: '40%',    // 40% width on large screens
      }
      }}
      p={2}
    >
      <img src={DumbwaysImg} width="120px" height="120px" alt="" />
      <Typography variant="h4"> Login to dumbways</Typography>
      
      <form style={{marginTop: "10px"}} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width="100%">
          <Controller
            name="usernameOrEmail"
            control={control}
            render={({field, fieldState})=>(
              <FormControl error={Boolean(fieldState.error)}>
                <TextField {...field} label="Email or Username" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
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
    </Box>
  )
}

export default Login