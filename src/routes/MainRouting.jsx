import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Footer from "../components/Footer";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import { useLocation } from "react-router-dom";

const MainRouting = () => {
  const location = useLocation();

  return (
    <>
      {!(location.pathname.startsWith('/login') || location.pathname.startsWith('/signup')) && <Navbar/>}
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<AboutUs/>} path="/about"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<LogIn/>} path="/login"/>
        <Route element={<SignUp/>} path="/signup"/>
      </Routes>
      {!(location.pathname.startsWith('/login') || location.pathname.startsWith('/signup')) && <Footer/>}
    </>
  );
}

export default MainRouting;
