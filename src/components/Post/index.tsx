import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { api, setAuthToken } from '../../api';
import useStore from '../../state/hooks';
import { IPost } from '../../types/post';

export default function Post({name, text, i, pfp}: IPost) {
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const {user} = useStore()

  async function checkLike(){
    setAuthToken(user.token)
    const response = await api.get(`/like/check/${i}`) //send request untuk check kalo udh di like blm
    const liked = response.data
    if(liked) setIsLiked(true)
    else setIsLiked(false)
  }

  async function getLikes(){
    const x = await api.get(`/like/${i}`) //ambil semua like di suatu post
    setLike(x.data.length)                //update state like
  }

  async function handleLike(){
    setAuthToken(user.token)
    await api.post(`/like/${i}`)            //send request untuk membuat like baru
    const x = await api.get(`/like/${i}`)   //ambil semua like di suatu post
    setLike(x.data.length)                  //update state like dengan panjang response
    await checkLike()                       //update state isLiked dengan memanggil ulang checkLike()
  }

  useEffect(()=>{
    checkLike()
    getLikes()
  }, [])

  return (
    <Stack direction="row" gap={1} key={i}>
        <img src={pfp} width="45px" height="45px" style={{borderRadius: "50%"}} alt="" />
        <Stack direction="column" gap={1}>
        <Stack direction="row" gap={1}>
            <h3>{name}</h3>
            <small style={{color: "gray"}}>@{name}</small>
            <small>&#x2022; 4h ago</small>
        </Stack>
        <p>{text}</p>
        <Stack direction="row" gap={4}>
            <Stack direction="row" gap={1}>
                <button onClick={handleLike} style={{backgroundColor: "transparent", color: 'inherit', cursor: "pointer",border: "none", display: "inherit"}}>
                    {(isLiked? <FavoriteIcon fontSize="small"/> : <FavoriteBorderOutlinedIcon fontSize="small"/>)}
                    
                </button>
            <p>{like}</p>
            </Stack>
            <Stack direction="row" gap={1}>
                <Link to={`/detail/${i}`} style={{textDecoration: "none", color: "white", marginBottom: "10px"}}><CommentIcon fontSize="small"/></Link>
            <p>0</p>
            </Stack>
        </Stack>
        </Stack>
    </Stack>
  )
}