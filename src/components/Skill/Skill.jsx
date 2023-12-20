import React, { forwardRef } from 'react'
import Arrow from '../Arrow/Arrow';
import { Explain, Group, Item, List, StackBox, Title } from './Skill.style';
import { css, firebase, html, javascript, react, sass, styledcomp, typescript } from '../../assets/skillslogo/index';

const Skill = forwardRef(({ onClickProject }, ref) => {
    return (
        <StackBox id='Skill' ref={ref}>

            <Title>TECKSTACK</Title>

            <Group>
                <p>Development Skills</p>
                <List>
                    <Item>
                        <img src={react} alt="react" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={typescript} alt="typescript" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={javascript} alt="javascript" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={styledcomp} alt="styled-component" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={sass} alt="sass" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={css} alt="css" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={html} alt="html" width="50px" />
                        <Explain></Explain>
                    </Item>
                    <Item>
                        <img src={firebase} alt="firebase" width="50px" />
                        <Explain></Explain>
                    </Item>
                </List>
            </Group>

            <Group>
                <p>Using Tools</p>
            </Group>
            <Arrow onClickHandler={onClickProject}/>

        </StackBox>
    )
})

export default Skill;