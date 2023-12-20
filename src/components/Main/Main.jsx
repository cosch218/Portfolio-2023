import React, { forwardRef, useEffect, useState } from 'react'
import { ArrowContainer, BackBox1, BackBox2, BackBox3, BackBoxContainer, CenterBox, CenterContainer, Img, ImgBox, ImgContainer, MainBox, Typo, TypoBox, Typos } from './Main.style';
import './Main.style'
import Arrow from '../Arrow/Arrow';

const Main = forwardRef(({onClickAbout}, ref) => {

    const [isBox1Visible, setIsBox1Visible] = useState(false);
    const [isBox2Visible, setIsBox2Visible] = useState(false);
    const [isBox3Visible, setIsBox3Visible] = useState(false);
    const [isTypoVisible, setIsTypoVisible] = useState(false);
    const [isTypoMove, setIsTypoMove] = useState(false);
    const [isImgVisible, setIsImgVisible] = useState(false);
    const [isArrowVisible, setIsArrowVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {setIsBox1Visible(true)}, 200);
        setTimeout(() => {setIsBox2Visible(true)}, 400);
        setTimeout(() => {setIsBox3Visible(true)}, 600);
        setTimeout(() => {setIsTypoVisible(true)}, 4000);
        setTimeout(() => {setIsTypoMove(true)}, 5000);
        setTimeout(() => {setIsImgVisible(true)}, 5400);
        setTimeout(() => {setIsArrowVisible(true)}, 6000);
    }, []);

    return (
        <MainBox id='Main' ref={ref}>
            <BackBoxContainer>
                <BackBox1 className={ isBox1Visible? "visible" : "" } />
                <BackBox2 className={ isBox2Visible? "visible" : "" } />
                <BackBox3 className={ isBox3Visible? "visible" : "" } />
            </BackBoxContainer>

            <CenterContainer>
                <CenterBox>
                    <TypoBox>
                        <Typos className={ isTypoMove? "move" : "" }>
                            <Typo className={ isTypoVisible? "visible" : "" }>FRONTEND</Typo>
                            <Typo className={ isTypoVisible? "visible" : "" }>PORTFOLIO</Typo>
                        </Typos>
                    </TypoBox>

                    <ImgBox>
                        <ImgContainer className={ isImgVisible? "visible" : "" }>
                            <Img/>
                        </ImgContainer>
                    </ImgBox>
                </CenterBox>
            </CenterContainer>

            <ArrowContainer className={isArrowVisible? "visible" : ""}>
                <Arrow onClickHandler={onClickAbout}/>
            </ArrowContainer>
        </MainBox>
    )
})

export default Main;