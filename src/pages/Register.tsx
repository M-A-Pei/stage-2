import { Button, Stack, TextField, Typography, FormControl, FormHelperText } from "@mui/material"
import {Link} from "react-router-dom"
import DumbwaysImg from "../assets/Dumbways.png"
import useRegisterValidation from "../hook/useRegisterValidation"
import { Controller } from "react-hook-form";


export default function Register() {
  const {control, handleSubmit, reset} = useRegisterValidation()

  function onSubmit(){
    reset()
  }

  const onError = (errors: any) => {
    console.log(errors);
 };

  return (
    <div style={{width: "40%"}}>
    <img src={DumbwaysImg} width="120px" height="120px" alt="" />
    <Typography variant="h4">Make An Account</Typography>
    
    <form 
      style={{marginTop: "10px"}}
      onSubmit={handleSubmit(onSubmit, onError)}
      >
      <Stack spacing={2} width="100%">
        <Controller
          name="username"
          control={control}
          render={({field, fieldState}) => (
            <FormControl error={Boolean(fieldState.error)} sx={{width: "100%"}}>
              <TextField {...field} label="Username" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
              {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
            </FormControl>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({field, fieldState}) => (
            <FormControl error={Boolean(fieldState.error)} sx={{width: "100%"}}>
              <TextField {...field} label="Email" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
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
          render={({field, fieldState}) => (
            <FormControl error={Boolean(fieldState.error)} sx={{width: "100%"}}>
              <TextField {...field} label="password" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
              {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
            </FormControl>
          )}
        />     
        <Button variant="contained" sx={{bgcolor: "orange", borderRadius: "20px", width:"50%"}}>Register</Button>
        <Typography variant="subtitle2">already have an account? <Link to="/auth/login">Login</Link></Typography>

      </Stack>
    </form>
  </div>
  )
}