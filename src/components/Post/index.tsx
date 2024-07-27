import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import { Stack } from '@mui/material';

interface IPost {
    name: string;
    text: string;
    i: number;
}

export default function Post({name, text, i}: IPost) {
  return (
    <Link to={`/detail/${i}`} key={i} style={{textDecoration: "none", color: "white", marginBottom: "10px", borderBottom: "1px solid gray"}}>
        <Stack direction="row" gap={1}>
            <img src="https://i.pinimg.com/736x/a6/67/73/a667732975f0f1da1a0fd4625e30d776.jpg" width="60px" height="60px" style={{borderRadius: "50%"}} alt="" />
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