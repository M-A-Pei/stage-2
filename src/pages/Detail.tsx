import { useParams } from "react-router-dom";
import Post from "../components/Post";
import { api } from "../api";
import { useEffect, useState } from "react";

export default function Detail(){
    const {id} = useParams();
    const [post, setPost] = useState<any>({})
    const [done, setDone] = useState(false)

    useEffect(()=>{
        getPost()
    }, [])

    async function getPost(){
        try {
            const response = await api.get(`/posts/${id}`)
            setPost(response.data)
            setDone(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        {done && <Post i={post.id} name={post.author.username} pfp={post.author.profilePic} text={post.body}/>}
        </>
    )


}