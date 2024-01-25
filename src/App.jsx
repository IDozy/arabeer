
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from '/@/pages/Home';
import About from '/@/pages/About';


function App() {


  return (
    <BrowserRouter>
    <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/nosotros" element={<Home />} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
