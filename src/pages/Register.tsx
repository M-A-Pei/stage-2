import { Button, Stack, TextField, Typography, FormControl, FormHelperText } from "@mui/material"
import {Link} from "react-router-dom"
import DumbwaysImg from "../assets/Dumbways.png"
import useRegisterValidation from "../hook/useRegisterValidation"
import { Controller } from "react-hook-form";
import { IRegisterForm } from "../types/register";
import { api } from "../api";


export default function Register() {
  const {control, handleSubmit, reset} = useRegisterValidation()

  async function onSubmit(e: IRegisterForm){
    try{
      const results = await api.post('/auth/register', e)
      console.log(results)
      reset()
    }catch(error){
      console.log(error)
    }
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
              <TextField {...field} label="what should we call you?" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
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
          render={({field, fieldState}) => (
            <FormControl error={Boolean(fieldState.error)} sx={{width: "100%"}}>
              <TextField {...field} label="tell us about yourself" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
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
              <TextField {...field} label="what's your email?" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
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
              <TextField {...field} label="pick a nice password" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} />
              {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
            </FormControl>
          )}
        />     
        <Button variant="contained" type="submit" sx={{bgcolor: "orange", borderRadius: "20px", width:"50%"}}>Register</Button>
        <Typography variant="subtitle2">already have an account? <Link to="/auth/login">Login</Link></Typography>

      </Stack>
    </form>
  </div>
  )
}