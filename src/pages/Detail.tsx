import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { api } from "../api";
import { useEffect, useState } from "react";

export default function Detail(){
    const {id} = useParams();
    const [post, setPost] = useState<any>({})

    useEffect(()=>{
        getPost()
    }, [])

    async function getPost(){
        try {
            const response = await api.get(`/posts/${id}`)
            setPost(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Post i={post.id} name={post.author.username} pfp={post.author.profilePic} text={post.body}/>
    )


}