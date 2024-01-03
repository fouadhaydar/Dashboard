import Topbar from "./scenes/global/Topbar";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./scenes/global/SideBar";
import { useLogIn } from "./context/useLogIn";
import CreateAdmin from "./scenes/auth/createAdmin";
import { SideBarProvider } from "./scenes/global/context/SideBarCtx";

export const RequierAuth = () => {
  const { userAuth } = useLogIn();

  return userAuth ? <Outlet /> : <Navigate to={"/login"} replace={true} />;
};

export const ProtectedRoute = () => {
  const { userAuth } = useLogIn();
  return userAuth?.role === "owner" ? (
    <CreateAdmin />
  ) : (
    <div> You Are Not Authorized </div>
  );
};

function App() {
  const { userAuth } = useLogIn();

  return (
    <div className="app">
      <SideBarProvider>
        {userAuth && <SideBar />}
        <main className="content">
          {userAuth && <Topbar />}
          <Outlet />
        </main>
      </SideBarProvider>
    </div>
  );
}

export default App;
