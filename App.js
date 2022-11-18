import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import Skill from './components/Skills'
import './App.css'
import Sidebar from "./components/Sidebar";

function App() {
  return (

    <>
    {/*<Sidebar/>*/}
    <main>
      <Routes>ç
        
          <Route path="/" element={<Layout />}/>
          <Route exact path ="/about" element = {<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skill" element={<Skill />} />
      </Routes>
     </main>
    </>
  )
}

export default App