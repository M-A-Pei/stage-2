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
export default function Sidebar() {
  const { clearUser } = useStore();
  return (
    <Grid
      item
      lg={4}
      sx={{
        height: "100vh",
        bgcolor: "secondary.dark",
        borderRight: "1px solid white",
        display: { xs: "none", sm: "block" },
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
