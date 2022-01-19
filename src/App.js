import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Error from "./Pages/Error";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Error/>}/>
      </Routes>
    </>
  );
}
// npm install react-router-dom@5.2.0
export default App;
