import { useContext } from "react";
import { ProfileContext } from "../context/index";

export const useProfile = () => {
  return useContext(ProfileContext);
};
