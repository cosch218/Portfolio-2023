import React, { useEffect, useState } from 'react'
import {List, Logo, Nav, NavList} from './Navbar.style'
import logoSmall from '../../assets/logo_small.png'


export default function Navbar({ 
    onClickMain, onClickAbout, onClickSkill, onClickProject, onClickContact
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
                    src={logoSmall} 
                    title='logo_small' 
                    onClick={onClickMain}
                    className={ isLogoVisible? "visible" : "" }
                />

                <NavList>
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
