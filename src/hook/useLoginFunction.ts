import { api } from "../api";
import useStore from "../state/hooks";
import { ILoginForm } from "../types/login";
import { IUser } from "../types/store";

export default function useLoginFunction(){
    const {setUser} = useStore()

    const handleLogin = async (data: ILoginForm) => {
        try {
            const response = await api.post("/auth/login", data)
            const token = response.data
            const user = await api.get("/auth", {headers: {Authorization: token}})
            const userData: IUser = {
                username: user.data.username,
                email: user.data.email,
                profile: {
                    avatar: user.data.profile || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
                    bio: user.data.description,
                    banner: user.data.banner || "https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722902400&semt=ais_hybrid"
                }
            }
            setUser(userData)
        } catch (error) {
            console.log(error)
        }
    }

    return {handleLogin}
}