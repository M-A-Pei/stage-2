import Post from "../../components/Post"
import posts from '../../DummyData/posts'

export default function AllPost(){
    return (
        <>
        {posts.map((e, i) => (
            <Post i={i} name={e.name} text={e.text} pfp=""/>
          ))}
        </>
    )
}