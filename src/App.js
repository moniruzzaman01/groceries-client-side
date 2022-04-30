import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MyItems from "./components/My-items/MyItems";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign-up/SignUp";
import NotFound from "./Not-found/NotFound";
import AddItems from "./components/Add-items/AddItem";
import ManageItem from "./components/Manage-item/ManageItem";
import Blogs from "./components/Blogs/Blogs";
import RequireAuth from "./components/Require-auth/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InventoryItems from "./components/inventory-items/InventoryItems";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/my-item"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-item/:id"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventories"
          element={
            <RequireAuth>
              <InventoryItems />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
