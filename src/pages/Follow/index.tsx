import { Box, Button, Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export default function Follow() {
  return (
    <Stack gap={2}>
      <Box>
        <Stack
          flexDirection="row"
          sx={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        >
          <NavLink to="following" style={{ width: "50%" }}>
            {({ isActive }) => (
              <Button
                sx={{
                  width: "100%",
                  color: "white",
                  borderBottom: isActive ? "2px solid orange" : "none",
                }}
                variant="text"
              >
                following
              </Button>
            )}
          </NavLink>

          <NavLink to="followers" style={{ width: "50%" }}>
            {({ isActive }) => (
              <Button
                sx={{
                  width: "100%",
                  color: "white",
                  borderBottom: isActive ? "2px solid orange" : "none",
                }}
                variant="text"
              >
                followers
              </Button>
            )}
          </NavLink>
        </Stack>
      </Box>

      <Stack gap={1}>
        <Outlet />
      </Stack>
    </Stack>
  );
}
