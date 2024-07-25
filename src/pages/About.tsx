import {TextField, Stack} from '@mui/material'
import MiniProfile from "../components/MiniProfile"

function About() {
  return (
    <Stack direction="column" gap={3}>
      <TextField label="search" variant='filled' sx={{ borderRadius: "10px", mb: "15px", border:"solid white 1px","& .MuiInputLabel-filled": {
              color: "gray",
            },}} size="small"/>
      
      <MiniProfile username="Ryoumen Sukuna" tag="@thegoat" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPgNNvZXeM7nIjWnGkJc2Xg1h39ejgEK8Pw&s'/>
      <MiniProfile username="Mei Mei" tag="@mei" pfp='https://i.pinimg.com/736x/2b/de/d5/2bded5241166cb0dd087c0a1fe07a5a0.jpg'/>
      <MiniProfile username="Roronoa Zoro" tag="@imlostagain" pfp='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/754292bb-cfb5-4ec8-bc3a-8abfa012cfcc/dfoev7v-9b53d5f7-19bb-4af8-877b-e88086c6fa25.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1NDI5MmJiLWNmYjUtNGVjOC1iYzNhLThhYmZhMDEyY2ZjY1wvZGZvZXY3di05YjUzZDVmNy0xOWJiLTRhZjgtODc3Yi1lODgwODZjNmZhMjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xxUy7Vo3SttcRMyqpso_kT8fn7ORBtqNbhnIfrU0LEk'/>
      <MiniProfile username="Todo Aoi" tag="@todo" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Jg0TjcTP1MGTbgrfljt7UdjfZeryB_YWiQ&s'/>
      <MiniProfile username="Mei Mei" tag="@mei" pfp='https://i.pinimg.com/736x/2b/de/d5/2bded5241166cb0dd087c0a1fe07a5a0.jpg'/>
      <MiniProfile username="Ryoumen Sukuna" tag="@thegoat" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPgNNvZXeM7nIjWnGkJc2Xg1h39ejgEK8Pw&s'/>
      <MiniProfile username="Mei Mei" tag="@mei" pfp='https://i.pinimg.com/736x/2b/de/d5/2bded5241166cb0dd087c0a1fe07a5a0.jpg'/>
      <MiniProfile username="Roronoa Zoro" tag="@imlostagain" pfp='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/754292bb-cfb5-4ec8-bc3a-8abfa012cfcc/dfoev7v-9b53d5f7-19bb-4af8-877b-e88086c6fa25.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1NDI5MmJiLWNmYjUtNGVjOC1iYzNhLThhYmZhMDEyY2ZjY1wvZGZvZXY3di05YjUzZDVmNy0xOWJiLTRhZjgtODc3Yi1lODgwODZjNmZhMjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xxUy7Vo3SttcRMyqpso_kT8fn7ORBtqNbhnIfrU0LEk'/>
      <MiniProfile username="Ryoumen Sukuna" tag="@thegoat" pfp='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPgNNvZXeM7nIjWnGkJc2Xg1h39ejgEK8Pw&s'/>
      <MiniProfile username="Mei Mei" tag="@mei" pfp='https://i.pinimg.com/736x/2b/de/d5/2bded5241166cb0dd087c0a1fe07a5a0.jpg'/>
      <MiniProfile username="Roronoa Zoro" tag="@imlostagain" pfp='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/754292bb-cfb5-4ec8-bc3a-8abfa012cfcc/dfoev7v-9b53d5f7-19bb-4af8-877b-e88086c6fa25.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1NDI5MmJiLWNmYjUtNGVjOC1iYzNhLThhYmZhMDEyY2ZjY1wvZGZvZXY3di05YjUzZDVmNy0xOWJiLTRhZjgtODc3Yi1lODgwODZjNmZhMjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xxUy7Vo3SttcRMyqpso_kT8fn7ORBtqNbhnIfrU0LEk'/>
      
    </Stack> 
  )
}

export default About