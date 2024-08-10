import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';

interface IPost {
    pfp: string;
    name: string;
    text: string;
    i: number;
    
}

export default function Post({name, text, i, pfp}: IPost) {
  return (
    <Link to={`/detail/${i}`} key={i} style={{textDecoration: "none", color: "white", marginBottom: "10px", borderBottom: "1px solid gray", paddingBottom: "10px"}}>
        <Stack direction="row" gap={1}>
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
                <FavoriteBorderOutlinedIcon fontSize="small"/>
                <p>40</p>
                </Stack>
                <Stack direction="row" gap={1}>
                <CommentIcon fontSize="small"/>
                <p>40</p>
                </Stack>
            </Stack>
            </Stack>
        </Stack>
    </Link>
  )
}