
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from '/@/pages/Home';
import About from '/@/pages/About';
import Products from "/@/pages/Products"
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './pages/Contact';
AOS.init();


function App() {


  return (
    <BrowserRouter>
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/products" element={<Products />} />
       <Route path="/contact" element={<Contact />} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
