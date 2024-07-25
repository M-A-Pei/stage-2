import { useParams } from "react-router-dom";

export default function Detail(){
    let {id} = useParams();
    return (
        <h2>this is the detail page for post number {id}</h2>
    )
}