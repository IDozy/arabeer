
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from '/@/pages/Home';
import About from '/@/pages/About';
import Productos from "/@/pages/Productos"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


function App() {


  return (
    <BrowserRouter>
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/productos" element={<Productos />} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
