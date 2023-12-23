import React, { useEffect, useRef, useState } from 'react';
import { About, Contact, Main, Navbar, Project, Skill } from './components';
import './reset.css';
import './styles/font/font.css'
import './App.css';

function App() {

  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
    }, [scrollPosition])
    
    const scrollToRef = (ref) => {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(()=>{
      window.scrollTo({top: 0})
    }, []); 

  return (
    <div className="App">

      {/*<ThemeMode />*/}

      <Main ref={mainRef} onClickAbout={() => scrollToRef(aboutRef)} />
      <About ref={aboutRef} onClickSkill={() => scrollToRef(skillRef)} />
      <Skill ref={skillRef} onClickProject={() => scrollToRef(projectRef)} />
      <Project ref={projectRef} onClickContact={() => scrollToRef(contactRef)} />
      <Contact ref={contactRef} />

      <Navbar 
        scrollPosition={scrollPosition}
        onClickMain={() => scrollToRef(mainRef)}
        onClickAbout={() => scrollToRef(aboutRef)}
        onClickSkill={() => scrollToRef(skillRef)}
        onClickProject={() => scrollToRef(projectRef)}
        onClickContact={() => scrollToRef(contactRef)}
      />

      <footer id='footer'>
        <p>Copyright 2023. 박채희. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
