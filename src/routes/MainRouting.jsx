import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Services from "../pages/Services"
import Footer from "../components/Footer"
const MainRouting = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<AboutUs/>} path="/about"/>
        <Route element={<Services/>} path="/services"/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default MainRouting
