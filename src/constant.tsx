import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App, { ProtectedRoute, RequierAuth } from "./App";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contact";
import Bar from "./scenes/bar";
import Pie from "./scenes/Pie";
import FQA from "./scenes/fqa";
import Line from "./scenes/line";
import Calendar from "./scenes/calender";
import Geography from "./scenes/geography";
import WrongPath from "./scenes/wrongPath";
import LogIn from "./scenes/auth/logIn";
import ResetPassword from "./scenes/auth/resetPassword/ResetPassword";
import Products from "./scenes/products";
import AddNewProduct from "./scenes/newProduct";
import Categories from "./scenes/categories";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<RequierAuth />}>
        <Route index element={<Dashboard />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="profile-form" element={<ProtectedRoute />} />
        <Route path="bar" element={<Bar />} />
        <Route path="pie" element={<Pie />} />
        <Route path="line" element={<Line />} />
        <Route path="fqa" element={<FQA />} />
        <Route path="calender" element={<Calendar />} />
        <Route path="geography" element={<Geography />} />
        <Route path="products" element={<Products />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<WrongPath />} />
      </Route>
      <Route path="login" element={<LogIn />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="*" element={<WrongPath />} />
    </Route>
  )
);
