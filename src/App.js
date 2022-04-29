import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import MyItems from "./components/My-items/MyItems";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign-up/SignUp";
import NotFound from "./Not-found/NotFound";
import AddItems from "./components/Add-items/AddItem";
import ManageItem from "./components/Manage-item/ManageItem";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/my-item" element={<MyItems />}></Route>
        <Route path="/add-item" element={<AddItems />}></Route>
        <Route path="/manage-item" element={<ManageItem />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
