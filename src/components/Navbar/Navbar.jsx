import React, { useEffect, useState } from 'react'
import {List, Logo, Nav, NavList} from './Navbar.style'
import logoBlack from '../../assets/logo_nav_black.png'
import logoWhite from '../../assets/logo_nav_white.png'


export default function Navbar({ 
    scrollPosition, onClickMain, onClickAbout, onClickSkill, onClickProject, onClickContact
}) {

    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isProjectVisible, setIsProjectVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);


    useEffect(() => {
        setTimeout(() => {setIsLogoVisible(true)}, 2000);
        setTimeout(() => {setIsAboutVisible(true)}, 2300);
        setTimeout(() => {setIsSkillVisible(true)}, 2600);
        setTimeout(() => {setIsProjectVisible(true)}, 2900);
        setTimeout(() => {setIsContactVisible(true)}, 3200);
    }, []);

    return (
        <div id='Navbar'>
            <Nav>
                <Logo 
                    src={scrollPosition > 1565 && scrollPosition < 2400 ? logoWhite : logoBlack} 
                    title='logo_small' 
                    onClick={onClickMain}
                    className={ isLogoVisible? "visible" : "" }
                />

                <NavList className={scrollPosition > 1565 && scrollPosition < 2400 ? "white" : ""}>
                    <List 
                        onClick={onClickAbout}
                        className={ isAboutVisible? "visible" : "" }
                    >About</List>
                    <List 
                        onClick={onClickSkill}
                        className={ isSkillVisible? "visible" : "" }
                    >Stack</List>
                    <List 
                        onClick={onClickProject}
                        className={ isProjectVisible? "visible" : "" }
                    >Project</List>
                    <List 
                        onClick={onClickContact}
                        className={ isContactVisible? "visible" : "" }
                    >Contact</List>
                </NavList>
            </Nav>
        </div>
    )
}
