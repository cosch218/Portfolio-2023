import React, { forwardRef, useEffect, useState } from 'react'
import { ArrowBox, ArrowBtn, ArrowContainer, BackBox1, BackBox2, BackBox3, BackBoxContainer, Caution, CenterBox, Img, ImgBox, ImgContainer, MainBox, Typo, TypoBox, Typos } from './Main.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Main.style'

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
        <div id='Main' ref={ref}>
            <BackBoxContainer>
                <BackBox1 className={ isBox1Visible? "visible" : "" } />
                <BackBox2 className={ isBox2Visible? "visible" : "" } />
                <BackBox3 className={ isBox3Visible? "visible" : "" } />
            </BackBoxContainer>

            <MainBox>
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

            </MainBox>

            <ArrowBox className={ isArrowVisible? "visible" : "" }>
                <ArrowContainer>
                    <ArrowBtn type='button'></ArrowBtn>
                    <FontAwesomeIcon 
                        icon={faCaretDown}
                        onClick={onClickAbout}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            width: "50%",
                            height: "50%",
                            cursor: "pointer"
                        }}
                    />
                </ArrowContainer>
            </ArrowBox>
        </div>
    )
})

export default Main;