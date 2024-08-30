import { TextField, Stack } from "@mui/material";
import MiniProfile from "../components/MiniProfile";
import { api } from "../api";
import { useEffect, useState } from "react";
import DEFAULTPFP from "../assets/defaults/defaultpfp.jpg";

export default function Search() {
  const [users, setUsers] = useState<any>([]);

  async function getUsers() {
    try {
      const x = await api.get("/users");
      const data = [...x.data];
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSearch(username: string) {
    try {
      const x = await api.get(`/users/BySearch/${username}`);
      setUsers(x.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Stack direction="column" gap={3}>
      <TextField
        onChange={(e) => {
          if (e.target.value != "") getSearch(e.target.value);
          else getUsers();
        }}
        label="search"
        variant="filled"
        sx={{
          borderRadius: "10px",
          mb: "15px",
          border: "solid white 1px",
          "& .MuiInputLabel-filled": { color: "gray" },
          input: {
            color: "white"
          }
        }}
        size="small"
      />

      {users.map((e: any) => (
        <MiniProfile
          id={e.id}
          key={e.id}
          username={e.username}
          pfp={e.profilePic || DEFAULTPFP}
        />
      ))}
    </Stack>
  );
}
