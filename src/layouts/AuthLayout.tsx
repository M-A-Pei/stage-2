import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
        bgcolor: "rgb(26, 26, 26)",
        color: "white"
      }}
      >
        <Outlet/>
      </Box>
  )
}

export default AuthLayout