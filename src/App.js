import React from 'react'
import {Route, Router,Routes} from 'react-router-dom';
import AnimatedMan from './components/AnimatedMan';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Home from "./pages/home"
import Skills from "./pages/skills";
import Projects from './pages/projects';
import Victory from "./pages/victory";
import Contact from "./pages/contact"
import About from "./pages/about"
import Footer from './components/footer';

const App = () => {
  return (
    <div style={{height:'100vh', overflow:'hidden'}} className='container'>
      <Header />
      <div style={{display:'flex'}}>
        <div style={{}}>
        <Sidebar />
        </div>

        <div style={{width:'100vw'}}>
            <Topbar />
            <div style={{height:'100vh', overflowY:'scroll'}}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/skills' element={<Skills />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/victory' element={<Victory />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>
      </div>
      <div style={{position:'fixed', bottom:0, width:'100%'}}>
        <Footer />
      </div>
    </div>




  )
}

export default App