import { ReactNode, createContext, useCallback, useState } from "react";

export const SideBarCtx = createContext<{
  collapsed: boolean;
  setOpen: () => void;
}>({
  collapsed: false,
  setOpen: () => {},
});

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const setOpen = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <SideBarCtx.Provider value={{ collapsed, setOpen }}>
      {children}
    </SideBarCtx.Provider>
  );
};
