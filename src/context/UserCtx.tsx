import { ReactNode, createContext, useCallback, useState } from "react";
interface User {
  token: string;
  role: string;
  userName: string;
}

export const UserContext = createContext<{
  userAuth: User | undefined;
  setLoggedIn: (user: User) => void;
  setLogOut: () => void;
}>({
  userAuth: {
    token: "",
    role: "",
    userName: "",
  } as User | undefined,
  setLoggedIn: () => {},
  setLogOut: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userAuth, setUserAuth] = useState<User | undefined>(undefined);

  const setLoggedIn = useCallback(
    (user: User) =>
      setUserAuth(() => {
        return {
          token: user.token,
          role: user.role,
          userName: user.userName,
        };
      }),
    []
  );

  const setLogOut = useCallback(() => {
    setUserAuth(undefined);
  }, []);
  return (
    <UserContext.Provider value={{ userAuth, setLoggedIn, setLogOut }}>
      {children}
    </UserContext.Provider>
  );
};
