import { api } from "../api";

export default function useGetAllPost(){

    api.get("/posts").then(value => {return value})
}