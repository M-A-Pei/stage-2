import { api } from "../api";

export default async function useGetAllPost(){
    const data = await api.get("/posts")
    return data
}