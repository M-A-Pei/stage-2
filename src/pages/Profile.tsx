import ProfileBar from "../components/ProfileBar"
import { useParams } from "react-router-dom"
import useStore from "../state/hooks"
import profile from "../DummyData/profile"
import { Box, Stack } from "@mui/material"

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

            <Box display="flex" sx={{flexdirection:"column" ,bgcolor: "secondary.main", height:"56vh", marginTop: "5px"}}>
                <Stack flexDirection="row">

                </Stack>
            </Box>
        </Stack>
    )
}