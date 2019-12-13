import React , {useState} from 'react'  
import Nav from './Pages/Nav';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

export default function App() {
  const [menuState , SetMenu] = useState(false);

  function toggleMenu(){
    SetMenu(!menuState ? 'active' : menuState === 'deactive' ? 'active' : 'deactive')
  }
  return (
    <React.Fragment>
      <Nav toggleMenu={toggleMenu} showMenu={menuState}> 
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Nav>
    </React.Fragment>
  )
}

