import React, { useRef } from 'react';
import { About, Contact, Main, Navbar, Project, Skill } from './components';
import './reset.css';
import './App.css';

function App() {

  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  return (
    <div className="App">
      <Navbar 
        onClickMain={() => scrollToRef(mainRef)}
        onClickAbout={() => scrollToRef(aboutRef)}
        onClickSkill={() => scrollToRef(skillRef)}
        onClickProject={() => scrollToRef(projectRef)}
        onClickContact={() => scrollToRef(contactRef)}
      />

      <Main ref={mainRef}/>
      <About ref={aboutRef} />
      <Skill ref={skillRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />

      <footer>
        <p>Copyright 2023. 박채희. All rights reserved.</p>
        <div>git link</div>
        <div>blog link</div>
      </footer>
    </div>
  );
}

export default App;
