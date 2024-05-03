import { atom } from "recoil";

export const authteacher = atom({
  key: "authteacher",
  default: localStorage.getItem("authteacher"),
});