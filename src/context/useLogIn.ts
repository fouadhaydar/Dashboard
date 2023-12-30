import { useContext } from "react";
import { UserContext } from "./UserCtx";

export const useLogIn = () => {
  const { userAuth, setLoggedIn, setLogOut } = useContext(UserContext);
  return { userAuth, setLoggedIn, setLogOut };
};
