
//import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Home from "./pages/cms/home/Home";
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
