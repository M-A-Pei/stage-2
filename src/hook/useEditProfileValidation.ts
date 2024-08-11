import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { IEditProfileForm } from "../types/editProfile";
import useStore from "../state/hooks";

export default function useEditProfileValidation(){
    const {user} = useStore()

    const schema = yup.object().shape({
        username: yup.
            string().
            required("username is required").
            min(3, "username must be atleast 3 characters"),
        email: yup.
            string().
            required("email is required").
            email("not a valid email"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        description: yup
            .string()
            .required("description is required")
            .max(30 ,"description cant be longer than 30 characters"),
        profilePic: yup
            .string()
        
    });
    
    return(
        useForm<IEditProfileForm>({
            resolver: yupResolver(schema),
            defaultValues: {
                description: user.profile.bio,
                email: user.email,
                password: "",
                profilePic: "",
                username: user.username
             },
             reValidateMode: "onSubmit",
             mode: "all"
        })
    )
}