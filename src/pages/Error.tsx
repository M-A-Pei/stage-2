import { Box } from "@mui/material";
import { Link } from "react-router-dom"


export default function Error() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{height: "100vh", bgcolor: "secondary.dark", color: "white", p:3, flexDirection:"column"}}>
        <h1>Sorry! this page doesnt exist</h1>
        <Link to="/" style={{fontSize:"20px"}}>go back</Link>
    </Box>
  )
}