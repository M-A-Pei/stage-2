import { Controller } from "react-hook-form"
import { Button, Stack } from "@mui/material"
import useEditProfileValidation from "../hook/useEditProfileValidation"
import { FormControl, FormHelperText, TextField } from "@mui/material"
import { IEditProfileForm } from "../types/editProfile"
import { api, setAuthToken } from "../api"
import useStore from "../state/hooks"
import { toast } from "react-toastify"

export default function EditProfile(){
    const {user} = useStore()
    const {control, reset, handleSubmit} = useEditProfileValidation()

    async function onSubmit(data: IEditProfileForm){
        try {
            setAuthToken(user.token)
            await api.put("/users", data)
            toast.success("account successfully updated")
            reset()
        } catch (error: any) {
            toast.error(error.response.data.error)
        }
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2} direction="column">
                <h1>Edit Your Profile</h1>
                <Controller
                    name="username"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField {...field} label="username" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="description"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField {...field} label="description" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField {...field} label="email" inputProps={{ readOnly: true }} variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField {...field} label="confirm your password" variant="filled" sx={{bgcolor: "white", borderRadius: "10px"}} type="text"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="profilePic"
                    control={control}
                    render={({field, fieldState})=>(
                        <FormControl error={Boolean(fieldState.error)}>
                            <TextField {...field} sx={{bgcolor: "white", borderRadius: "10px"}} type="file"></TextField>
                            {Boolean(fieldState.error) && (
                                <FormHelperText>
                                    {fieldState.error?.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Button variant="contained" sx={{bgcolor: "primary.main", borderRadius: "20px", width:"30%"}} type="submit">Edit Profile</Button>
            </Stack>
        </form>
    )
}