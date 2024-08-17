import {TextField, Stack} from '@mui/material'
import MiniProfile from "../components/MiniProfile"
import { Link } from 'react-router-dom'
import { api } from '../api'
import { useEffect, useState } from 'react'
import DEFAULTPFP from "../assets/defaults/defaultpfp.jpg"

export default function Search() {
  const [users, setUsers] = useState<any>([])

  async function getUsers(){
    try {
      const x = await api.get("/users")
      const data = [...x.data]
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUsers()
  }, [])

  return (
    <Stack direction="column" gap={3}>
      <TextField label="search" variant='filled' sx={{ borderRadius: "10px", mb: "15px", border:"solid white 1px","& .MuiInputLabel-filled": {
              color: "gray",
            }}} size="small"/>
      
      {users.map((e:any, i:number)=>(
        <Link to={"/profile/" + e.id + "/allpost"} key={i} style={{textDecoration: "none", color: "white"}}>
          <MiniProfile username={e.username} pfp={e.profilePic || DEFAULTPFP}/>
        </Link>
      ))}
    </Stack> 
  )
}