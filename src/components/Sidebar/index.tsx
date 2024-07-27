import { Grid, Stack } from "@mui/material";
import DumbwaysImg from '../../assets/Dumbways.png'
import { Button } from "@mui/material";
import NavLinks from "./NavLinks";
import useStore from "../../state/hooks";

export default function Sidebar() {
    const {clearUser} = useStore()
    return (
    <Grid item xs={2} sx={{height: "100vh", bgcolor: "secondary.dark", borderRight: "1px solid white"}}>
        <Stack direction="column" spacing={2} sx={{height: "100vh", p:2}}>
            <img height='100px' width='100px' className='rounded-circle border' src={DumbwaysImg} alt="" />
            <NavLinks/>
            <Button variant="contained" sx={{bgcolor: "primary.main", borderRadius: "20px", width:"100%"}}>make new post</Button>
            <Button onClick={()=> clearUser()} style={{color: "white", textDecoration: "none", marginTop: "auto"}}>logout &#8676;</Button>
        </Stack>
    </Grid>
    )
}