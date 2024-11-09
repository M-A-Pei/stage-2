import { Grid, Stack } from "@mui/material";
import DumbwaysImg from "../../assets/Dumbways.png";
import { Button } from "@mui/material";
import NavLinks from "./NavLinks";
import useStore from "../../state/hooks";
import { toast } from "react-toastify";
import CreatePostModal from "../Modals/CreatePostModal";

function handleLogout(clearUser: Function) {
  localStorage.removeItem("token");
  clearUser();
  toast.success("successfully logged out!");
}
export default function Sidebar({visible}: {visible: boolean}) {
  const { clearUser } = useStore();
  return (
    <Grid
      item
      lg={2}
      sx={{
        height: "100vh",
        bgcolor: "secondary.dark",
        borderRight: "1px solid white",
        display: {
          xs: visible ? 'block' : 'none',
          lg: "block",
        },
        position: {
          xs: "fixed",
          lg: "static"
        },
        left: 0,
        top: 0,  // Ensure it's at the top of the viewport
        zIndex: 10  // To make sure it stays above the Outlet
      }}
    >
      <Stack direction="column" spacing={2} sx={{ height: "100vh", p: 2 }}>
        <img
          height="100px"
          width="100px"
          className="rounded-circle border"
          src={DumbwaysImg}
          alt=""
        />
        <NavLinks />
        <CreatePostModal/>
        <Button
          onClick={() => handleLogout(clearUser)}
          style={{ color: "white", textDecoration: "none", marginTop: "auto" }}
        >
          logout &#8676;
        </Button>
      </Stack>
    </Grid>
  );
}
