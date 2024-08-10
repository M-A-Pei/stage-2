import { api } from "../api";
import useStore from "../state/hooks";
import { ILoginForm } from "../types/login";
import { IUser } from "../types/store";
import { toast } from 'react-toastify';
import DEFAULTPFP from "../assets/defaults/defaultpfp.jpg"
import DEFAULTBANNER from "../assets/defaults/defaultBanner.avif"

export default function useLoginFunction(){
    const {setUser} = useStore()

    const handleLogin = async (data: ILoginForm) => {
        try {
            const response = await api.post("/auth/login", data)
            const token = response.data
            const user = await api.get("/auth", {headers: {Authorization: token}})
            const userData: IUser = {
                token: user.data.token,
                username: user.data.username,
                email: user.data.email,
                profile: {
                    avatar: user.data.profile || DEFAULTPFP,
                    bio: user.data.description,
                    banner: user.data.banner || DEFAULTBANNER
                }
            }
            setUser(userData)
            toast.success("login success")
        } catch (error: any) {
            console.log(error)
            toast.error(error.response.data.error)
        }
    }

    return {handleLogin}
}