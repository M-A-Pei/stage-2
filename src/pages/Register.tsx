import { Button, Stack, TextField, Typography, FormControl, FormHelperText, Box } from "@mui/material"
import {Link} from "react-router-dom"
import DumbwaysImg from "../assets/Dumbways.png"
import useRegisterValidation from "../hook/useRegisterValidation"
import { Controller } from "react-hook-form";
import { IRegisterForm } from "../types/register";
import { api } from "../api";
import { toast } from "react-toastify";


export default function Register() {
  const {control, handleSubmit, reset} = useRegisterValidation()

  async function onSubmit(e: IRegisterForm){
    try{
      console.log(import.meta.env.VITE_API_BASE_URL)
      const results = await api.post('/auth/register', e)
      console.log(results)
      reset()
      toast.success("successfully made account!")
    }catch(error: any){
      toast.error(error.response.data.error)
    }
  }

  const onError = (errors: any) => {
    console.log(errors);
 };

  return (
    <Box sx={{
      width: {
        xs: '100%',   // 100% width on extra-small screens
        sm: '80%',    // 80% width on small screens
        md: '60%',    // 60% width on medium screens
        lg: '40%',    // 40% width on large screens
      }
      }}
      p={2}>
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
  </Box>
  )
}