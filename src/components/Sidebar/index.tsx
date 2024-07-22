import { Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import DumbwaysImg from '../../assets/Dumbways.png'
import { Button } from "@mui/material";
import NavLinks from "./NavLinks";

export default function Sidebar() {
    return (
    <Grid item xs={2} sx={{height: "100vh", bgcolor: "secondary.dark", borderRight: "1px solid white"}}>
        <Stack direction="column" spacing={2} sx={{height: "100vh", p:2}}>
            <img height='100px' width='100px' className='rounded-circle border' src={DumbwaysImg} alt="" />
            <NavLinks/>
            <Button variant="contained" sx={{bgcolor: "primary.main", borderRadius: "20px", width:"100%"}}>make new post</Button>
            <Link to="auth/login" style={{color: "white", textDecoration: "none", marginTop: "auto"}}>logout &#8676;</Link>
        </Stack>
    </Grid>
    )
}