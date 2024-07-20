import { Typography, Stack, TextField, Button } from "@mui/material"
import DumbwaysImg from "../assets/Dumbways.png"
import {Link} from "react-router-dom"
import { useState } from "react"


function Login() {
  function handleSubmit(e:any){
    e.preventDefault()
    console.log(email, password)
    setEmail("")
    setPassword("")
  }

  const [email, setEmail] = useState<String>("")
  const [password, setPassword] = useState<String>("")

  return (
    <div style={{width: "40%"}}>
      <img src={DumbwaysImg} width="120px" height="120px" alt="" />
      <Typography variant="h4"> Login to dumbways</Typography>
      
      <form style={{marginTop: "10px"}} onSubmit={e => handleSubmit(e)}>
        <Stack spacing={2} width="100%">
          <TextField onChange={e => setEmail(e.target.value)} value={email} label="Email" variant="outlined" sx={{bgcolor: "white", borderRadius: "20px"}} type="email"></TextField>
          <TextField onChange={e => setPassword(e.target.value)} value={password} label="Password" variant="outlined" sx={{bgcolor: "white", borderRadius: "20px"}} type="password"></TextField>
          <Typography variant="subtitle2">Don't have an account? <Link to="/auth/register">Register</Link></Typography>
          <Button variant="contained" type="submit" sx={{bgcolor: "orange", borderRadius: "20px", width:"50%"}}>Login</Button>
        </Stack>
      </form>
    </div>
  )
}

export default Login