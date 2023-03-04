import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("delete/user", async (user) => {
  await axios.delete(`http://localhost:3012/users/${user.id}`);
  return user;
});
export { removeUser };
