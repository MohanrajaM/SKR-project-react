import React from "react";
import "./App.css";
import Navbar from "./component/nav/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Services";
import Forms from "./component/Forms";
import Contact from "./component/Contact"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Forms" element={<Forms/>}/>
      <Route path="/Contact" element={<Contact/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
