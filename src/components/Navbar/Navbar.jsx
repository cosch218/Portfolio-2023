import React from 'react'
import {List, Nav, NavList} from './Navbar.style'

export default function Navbar({ 
    onClickMain, onClickAbout, onClickSkill, onClickProject, onClickContact
}) {
    return (
        <div id='Navbar'>
            <Nav>
                <div onClick={onClickMain}>logo</div>

                <NavList>
                    <List onClick={onClickAbout}>About</List>
                    <List onClick={onClickSkill}>Skill</List>
                    <List onClick={onClickProject}>Project</List>
                    <List onClick={onClickContact}>Contact</List>
                </NavList>
            </Nav>
        </div>
    )
}
