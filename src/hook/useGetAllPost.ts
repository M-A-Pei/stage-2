import { api } from "../api";

export default async function useGetAllPost(){
    return await api.get("/posts")
}