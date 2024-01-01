import { useContext } from "react";
import { SideBarCtx } from "./SideBarCtx";

export const useSideBar = () => {
  const { collapsed, setOpen } = useContext(SideBarCtx);
  return { collapsed, setOpen };
};

export default useSideBar;
