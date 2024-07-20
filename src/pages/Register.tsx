import { Button, Stack, TextField, Typography } from "@mui/material"
import {Link} from "react-router-dom"
import DumbwaysImg from "../assets/Dumbways.png"

function Register() {
  return (
    <div style={{width: "40%"}}>
    <img src={DumbwaysImg} width="120px" height="120px" alt="" />
    <Typography variant="h4">Make An Account</Typography>
    
    <form style={{marginTop: "10px"}}>
      <Stack spacing={2} width="100%">
        <TextField label="Username" variant="outlined" sx={{bgcolor: "white", borderRadius: "20px"}} />
        <TextField label="Email" variant="outlined" sx={{bgcolor: "white", borderRadius: "20px"}} type="email"></TextField>
        <TextField label="Password" variant="outlined" sx={{bgcolor: "white", borderRadius: "20px"}} type="password"></TextField>
        <Typography variant="subtitle2">already have an account? <Link to="/auth/login">login!</Link></Typography>
        <Button variant="contained" sx={{bgcolor: "orange", borderRadius: "20px", width:"50%"}}>Register</Button>
      </Stack>
    </form>
  </div>
  )
}

export default Register