import { createContext, useState } from "react";
import { IUser, TStore } from "../types/store";

interface StoreProps {
   children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
   const [user, setUserState] = useState<IUser>({
      token: "",
      email: "",
      username: "",
      profile: {
         avatar: "",
         banner: "",
         bio: ""
      }
   });

   const [isLogin, setIsLogin] = useState(false);

   const setUser = (user: IUser) => {
      setUserState(user);
      setIsLogin(true);
   };

   const clearUser = () => {
      setUserState({
         token: "",
         email: "",
         username: "",
         profile: {
            avatar: "",
            banner: "",
            bio: ""
         }
      });

      setIsLogin(false);
   };

   return (
      <Store.Provider
         value={{
            user,
            isLogin,
            setUser,
            clearUser
         }}
      >
         {children}
      </Store.Provider>
   );
};