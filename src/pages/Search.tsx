import {TextField, Stack} from '@mui/material'
import MiniProfile from "../components/MiniProfile"
import profile from "../DummyData/profile"
import { Link } from 'react-router-dom'

export default function Search() {
  return (
    <Stack direction="column" gap={3}>
      <TextField label="search" variant='filled' sx={{ borderRadius: "10px", mb: "15px", border:"solid white 1px","& .MuiInputLabel-filled": {
              color: "gray",
            }}} size="small"/>
      
      {profile.map((e, i) => (
        <Link to={"/profile/" + i} key={i} style={{textDecoration: "none", color: "white"}}>
          <MiniProfile username={e.username} pfp={e.pfp}/>
        </Link>
      ))}
      
    </Stack> 
  )
}