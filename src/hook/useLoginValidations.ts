import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ILoginForm } from '../types/login'

export default function useLoginValidation() {
    const schema = yup.object().shape({
        usernameOrEmail: yup
           .string()
           .required("Email or Username is required"),
        password: yup
           .string()
           .required("Password is required")
    })

    return(
        useForm<ILoginForm>({
           resolver: yupResolver(schema),
           defaultValues: {
              usernameOrEmail: "",
              password: "",
           },
           reValidateMode: "onSubmit",
           mode: "all"
        })
    )
}