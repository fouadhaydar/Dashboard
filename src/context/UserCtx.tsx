import { ReactNode, createContext, useCallback, useState } from "react";
interface User {
  token: string;
  role: string;
  userName: string;
}

export const UserContext = createContext({
  userAuth: {
    token: "",
    role: "",
    userName: "",
  } as User | undefined,
  setLoggedIn: (user: User) => {},
  setLogOut: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // const [loggedIn, setLogIn] = useState<boolean>(false);

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
