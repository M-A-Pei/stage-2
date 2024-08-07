import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ILoginForm } from '../types/login'

export default function useLoginValidation() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:466175313.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3710289969.
    const schema = yup.object().shape({
        emailOrUsername: yup
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
              emailOrUsername: "",
              password: "",
           },
           reValidateMode: "onSubmit",
           mode: "all"
        })
    )
}