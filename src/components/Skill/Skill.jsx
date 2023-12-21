import React, { forwardRef } from 'react'
import Arrow from '../Arrow/Arrow';
import { Explain, Group, Item, List, StackBox, Title } from './Skill.style';
import { css, figma, firebase, github, html, illustrator, javascript, notion, photoshop, react, styledcomp, typescript, vscode } from '../../assets/skillslogo/index';

const Skill = forwardRef(({ onClickProject }, ref) => {
    
    return (
        <StackBox id='Skill' ref={ref}>

            <Title>TECK STACK</Title>

            <Group>
                <p>/　Development Skills　/</p>
                <List>
                    <Item>
                        <img src={react} alt="react" width="50px" />
                        <Explain>
                            <p>REACT</p>
                            <p>Hook, Redux, Router, 다양한 api와 라이브러리를 사용해 필요한 UI 구현 가능 </p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={typescript} alt="typescript" width="50px" />
                        <Explain>
                            <p>TypeScript</p>
                            <p>타입, 인터페이스, 제네릭을 활용해 더욱 엄격한 코드 작성 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={javascript} alt="javascript" width="50px" />
                        <Explain>
                            <p>JavaScript</p>
                            <p>ES6 문법에 맞춰 다양한 로직 코드 작성 및 반응형 웹 제작 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={styledcomp} alt="styled-component" width="50px" />
                        <Explain>
                            <p>styled-components</p>
                            <p>리액트와 함께 사용하여 css를 컴포넌트화 시켜 효율적인 컴포넌트 관리 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={css} alt="css" width="50px" />
                        <Explain>
                            <p>CSS3</p>
                            <p>display, position, grid, animation 등을 사용하여 다양한 UI 구현 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={html} alt="html" width="50px" />
                        <Explain>
                            <p>HTML5</p>
                            <p>웹 표준문법에 부합한 웹 제작 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={firebase} alt="firebase" width="50px" height="50px" />
                        <Explain>
                            <p>Firebase</p>
                            <p>인증, 데이터베이스 등을 사용해 프로젝트 규모 확장 가능</p>
                        </Explain>
                    </Item>
                </List>
            </Group>

            <Group>
                <p>/　Using Tools　/</p>
                <List>
                    <Item>
                        <img src={vscode} alt="vscode" width="50px" />
                        <Explain>
                            <p>VS Code</p>
                            <p>주로 사용하는 코딩툴</p>
                        </Explain>
                    </Item> 
                    <Item>
                        <img src={github} alt="github" width="50px" />
                        <Explain>
                            <p>GitHub</p>
                            <p>git 명령어를 사용하여 레파지토리에 접근하거나 브랜치를 나누고 머지하여 협업에 사용 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={figma} alt="figma" width="50px" height="50px" />
                        <Explain>
                            <p>Figma</p>
                            <p>프로그램 내에서 제공하는 다양한 툴이나 플러그인을 사용해 와이어 프레임 제작 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={notion} alt="notion" width="50px" />
                        <Explain>
                            <p>Notion</p>
                            <p>팀스페이스, 페이지, 템플릿을 이용하여 협업 프로세스 관리 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={photoshop} alt="adobe-photoshop" width="50px" />
                        <Explain>
                            <p>Photoshop</p>
                            <p>레이어, 클리핑 마스크 등 툴을 이용하여 그래픽 제작 및 편집 가능</p>
                        </Explain>
                    </Item>
                    <Item>
                        <img src={illustrator} alt="adobe-illustrator" width="50px" />
                        <Explain>
                            <p>Illustrator</p>
                            <p>펜, 패스파인더 등 툴을 이용하여 로고, 아이콘 등 디자인 가능</p>
                        </Explain>
                    </Item>
                </List>
            </Group>
            <Arrow onClickHandler={onClickProject}/>

        </StackBox>
    )
})

export default Skill;