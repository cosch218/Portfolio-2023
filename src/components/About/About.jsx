import React, { forwardRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './About.style'
import { AboutBox, Back, Intro, Typing } from './About.style';
import Arrow from '../Arrow/Arrow';

const About = forwardRef(({onClickSkill}, ref) => {

    const [typerStart, setTyperStart] = useState(false);

    useEffect(() => {
        setTimeout(() => {setTyperStart(true)}, 2000)
    }, [])

    return (
        <AboutBox id='About' ref={ref}>
            <Back>
            </Back>

            <div>

                <Typing>
                    { typerStart && (
                        <Typewriter
                            options={{
                                strings: ["효율의 가치", "계획의 가치", "책임의 가치", "협동의 가치"],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "typewriter"
                            }}
                        />
                    )}
                </Typing>

                <Intro>
                    <p>안녕하세요. 프론트엔드 개발자로 일하고 싶은 박채희입니다.</p>
                    <p>위의 네가지 키워드는 저를 가장 잘 표현할 수 있는 가치입니다.</p>
                    <p>저는 문제를 <strong>효율적</strong>으로 해결할 수 있는 방법에 대해 먼저 고민하고 <strong>계획</strong>을 세워 주체적으로 해결하기를 좋아합니다.</p>
                    <p>그리고 주어진 일을 완벽하게 끝까지 해냈는지 체크하고 테스트 해보면서 <strong>꼼꼼하게</strong> 일하기를 좋아합니다.</p>
                    <p>마지막으로 지속가능성과 유지보수 및 <strong>협업을 위한</strong> 코드 작성을 중요하게 생각합니다.</p>
                </Intro>
                
            </div>

            <Arrow onClickHandler={onClickSkill}/>
        </AboutBox>
    )
})

export default About;
