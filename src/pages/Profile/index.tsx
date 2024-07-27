import ProfileBar from "../../components/ProfileBar"
import { useParams, Outlet, Link} from "react-router-dom"
import useStore from "../../state/hooks"
import profile from "../../DummyData/profile"
import { Box, Button, Stack } from "@mui/material"

export default function Profile(){
    const {userID} = useParams()
    const {user} = useStore()
    let data

    console.log(userID)
    if(userID === undefined){
        data = {
            username: user.username,
            pfp: user.profile.avatar,
            banner: user.profile.banner,
            bio: user.profile.bio
        }
    }else{
        data = profile[Number(userID)]
    }

    return(
        <Stack flexDirection="column">
            <ProfileBar username={data.username} pfp={data.pfp} banner={data.banner} bio={data.bio}/>

            <Box display="flex" sx={{flexDirection:"column" ,bgcolor: "secondary.dark", height:"56vh", marginTop: "5px", borderRadius: "20px"}}>
                <Stack flexDirection="row" sx={{borderBottom: "1px solid gray", marginBottom: "10px"}}>
                    <Link to={"/profile" + (userID === undefined ? "" : "/" + userID)} style={{width: "50%"}}><Button sx={{width: "100%", color: "white"}} variant="text">all post</Button></Link>
                    <Link to="media" style={{width: "50%"}}><Button sx={{width: "100%", color: "white"}} variant="text">media</Button></Link>
                </Stack>

                <Outlet/>
            </Box>
        </Stack>
    )
}