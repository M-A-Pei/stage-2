import { createContext, useState } from "react";
import { IUser, TStore } from "../types/store";

interface StoreProps {
   children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
   const [user, setUserState] = useState<IUser>({
      email: "",
      username: "",
   });

   const [isLogin, setIsLogin] = useState(false);

   const setUser = (user: IUser) => {
      setUserState(user);
      setIsLogin(true);
   };

   const clearUser = () => {
      setUserState({
         email: "",
         username: "",
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