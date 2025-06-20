import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

import Home from './pages/Home'
import {Route,Routes,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>  
      </Routes>
    </Router>  
    </>
  )
}

export default App
