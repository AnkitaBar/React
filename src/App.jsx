
//import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/Register/Register";
import ContactForm from "./pages/cms/contact/ContactFrom";
import Home from "./pages/cms/home/Home";
import AboutUs from "./pages/cms/about/AboutUs";


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />          
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
