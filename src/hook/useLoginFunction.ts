import { api } from "../api";
import useStore from "../state/hooks";
import { ILoginForm } from "../types/login";
import { IUser } from "../types/store";
import { toast } from "react-toastify";

export default function useLoginFunction() {
  const { setUser } = useStore();

  const handleLogin = async (data: ILoginForm) => {
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data;
      const user = await api.get("/auth", {
        headers: { Authorization: 'Bearer ' + token },
      });
      const userData: IUser = {
        username: user.data.username,
        email: user.data.email,
        profile: {
          avatar: user.data.profilePic,
          bio: user.data.description,
          banner: user.data.bannerPic,
        },
      };

      localStorage.setItem("token", token);
      setUser(userData);
      toast.success("login success");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return { handleLogin };
}
