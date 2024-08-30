import { createBrowserRouter, RouterProvider } from "react-router-dom";
import route from "./routes/route";
import "./main.css";
import { useEffect } from "react";
import useStore from "./state/hooks";
import { api, setAuthToken } from "./api";
import { IUser } from "./types/store";

async function checkLogin(setUser: Function) {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      const user = await api.get("/auth");
      const userData: IUser = {
        username: user.data.username,
        email: user.data.email,
        profile: {
          avatar: user.data.profilePic,
          bio: user.data.description,
          banner: user.data.bannerPic,
        },
      };
      setUser(userData);
    }
  } catch (error) {
    localStorage.removeItem("token");
    console.log(error);
  }
}

function App() {
  const { setUser } = useStore();
  useEffect(() => {
    checkLogin(setUser);
  }, []);
  return <RouterProvider router={createBrowserRouter(route)} />;
}

export default App;
