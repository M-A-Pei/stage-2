import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IRegisterForm } from '../types/register'

export default function useRegisterValidation() {
    const schema = yup.object().shape({
         username: yup
           .string()
           .min(3, "Username must be at least 3 characters")
           .required("Username is required"),
         email: yup
           .string()
           .required("Email is required")
           .email("Email is invalid"),
         password: yup
           .string()
           .required("Password is required")
           .min(6, "Password must be at least 6 characters"),
         description: yup
           .string()
           .required("description is required")
     });

     return(
        useForm<IRegisterForm>({
           resolver: yupResolver(schema),
           defaultValues: {
              username: "",
              email: "",
              password: "",
              description: ""
           },
           reValidateMode: "onSubmit",
           mode: "all"
        })
     )
}