import ProfileBar from "../../components/ProfileBar"
import { useParams, Outlet, NavLink} from "react-router-dom"
import useStore from "../../state/hooks"
import profile from "../../DummyData/profile"
import { Box, Button, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { api } from "../../api"
import DEFAULTPFP from "../../assets/defaults/defaultpfp.jpg"
import DEFAULTBANNER from "../../assets/defaults/defaultBanner.avif"

interface IUser{
    username: string,
    description: string,
    profilePic: string,
    id: number,
    email: string,
    banner: string
}

export default function Profile(){
    const {userID} = useParams()
    const [user, setUser] = useState<IUser>({
        username: "",
        description: "",
        profilePic: "",
        id: 0,
        email: "",
        banner: ""
    })

    async function getUser(){
        try {
            const x = await api.get(`/users/ById/${userID}`)
            setUser(x.data)
            console.log(x.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUser()
    }, [])

    return(
        <Stack flexDirection="column">
            <ProfileBar username={user.username} pfp={user.profilePic || DEFAULTPFP} banner={user.banner || DEFAULTBANNER} bio={user.description}/>

            <Box display="flex" sx={{flexDirection:"column" ,bgcolor: "secondary.dark", height:"56vh", marginTop: "5px", borderRadius: "20px"}}>
                <Stack flexDirection="row" sx={{borderBottom: "1px solid gray", marginBottom: "10px"}}>
                    <NavLink to='allpost' style={{width: "50%"}}>
                        {({isActive})=>
                            <Button sx={{width: "100%", color: "white", borderBottom: isActive ? "2px solid orange" : "none"}} variant="text">All post</Button>
                        }
                    </NavLink>

                    <NavLink to='media' style={{width: "50%"}}>
                        {({isActive})=>
                            <Button sx={{width: "100%", color: "white", borderBottom: isActive ? "2px solid orange" : "none"}} variant="text">Media</Button>
                        }
                    </NavLink>
                </Stack>

                <Outlet/>
            </Box>
        </Stack>
    )
    
    // const {userID} = useParams()
    // const {user} = useStore()
    // let data

    // console.log(userID)
    // if(userID === undefined){
    //     data = {
    //         username: user.username,
    //         pfp: user.profile.avatar,
    //         banner: user.profile.banner,
    //         bio: user.profile.bio
    //     }
    // }else{
    //     data = profile[Number(userID)]
    // }

    // return(
    //     <Stack flexDirection="column">
    //         <ProfileBar username={data.username} pfp={data.pfp} banner={data.banner} bio={data.bio}/>

    //         <Box display="flex" sx={{flexDirection:"column" ,bgcolor: "secondary.dark", height:"56vh", marginTop: "5px", borderRadius: "20px"}}>
    //             <Stack flexDirection="row" sx={{borderBottom: "1px solid gray", marginBottom: "10px"}}>
    //                 <NavLink to='allpost' style={{width: "50%"}}>
    //                     {({isActive})=>
    //                         <Button sx={{width: "100%", color: "white", borderBottom: isActive ? "2px solid orange" : "none"}} variant="text">All post</Button>
    //                     }
    //                 </NavLink>

    //                 <NavLink to='media' style={{width: "50%"}}>
    //                     {({isActive})=>
    //                         <Button sx={{width: "100%", color: "white", borderBottom: isActive ? "2px solid orange" : "none"}} variant="text">Media</Button>
    //                     }
    //                 </NavLink>
    //             </Stack>

    //             <Outlet/>
    //         </Box>
    //     </Stack>
    // )
}