import styled, { keyframes } from 'styled-components';
import profilePic from '../../assets/profile_pic.png';


export const BackBoxContainer = styled.div`
    position: relative;
    z-index: -100;
`;

const BackBoxAni = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const BackBox1 = styled.div`
    opacity: 0;
    width: 100%;
    height: calc(100vh / 3);
    background-color: #e9e1e3;
    animation: ${BackBoxAni} 1.5s ease-in-out 0.2s;

    &.visible {
        opacity: 1;
    }
`;

export const BackBox2 = styled.div`
    opacity: 0;
    width: 100%;
    height: calc(100vh / 3);
    background-color: #e9e1e3;
    animation: ${BackBoxAni} 1.5s ease-in-out 0.4s;

    &.visible {
        opacity: 1;
    }
`;

export const BackBox3 = styled.div`
    opacity: 0;
    width: 100%;
    height: calc(100vh / 3);
    background-color: #e9e1e3;
    animation: ${BackBoxAni} 1.5s ease-in-out 0.6s;

    &.visible {
        opacity: 1;
    }
`;


export const MainBox = styled.div`
    position: absolute;
    top: 48%;
    right: 50%;
    transform: translate(0, -50%);
    z-index: -1;
    `;

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



/** 메인 타이포 */
export const TypoBox = styled.div`
    position: relative;
    transform: translateX(calc(50% + 330px));
    `;


export const Typos = styled.div`
    &.move {
        transform: translateX(-18%);
        transition: all 0.5s ease-in-out;
    }
`;

export const Typo = styled.h1`
    font-family: 'Cafe24ClassicType-Regular';
    font-size: 10rem;
    opacity: 0;
    transform: translateY(30px);
    color: #202020;
    margin-top: 20px;

    &.visible {
        opacity: 1;
        transform: translateX(0);
        transition: all 1s ease-in-out;
    }
`;



/** 프로필 사진 */
export const ImgBox = styled.div`
    transform: translateX(calc(90% + 494px));
`;

export const ImgContainer = styled.div`
    width: 330px;
    height: 330px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202020;
    opacity: 0;

    &.visible {
        opacity: 1;
        transform: translateX(-40%);
        transition: all 1s ease-in-out;
    }
`;

export const Img = styled.div`
    width: 92%;
    height: 92%;
    border-radius: 50%;
    background-image: url(${profilePic});
    background-size: cover;
`;



/** 화살표 버튼 */
export const ArrowBox = styled.div`
    opacity: 0;
    transform: translateY(10px);
    position: absolute;
    bottom: 7vh;
    left: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &.visible {
        opacity: 1;
        transform: translateY(-10px);
        transition: all 0.5s ease-in-out;
    }
`;

export const ArrowContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(32, 32, 32, 0.8);
    transform: translateX(-50%);
`;

const SpreadAni = keyframes`
    0% {
        opacity: 0.8;
        transform: scale(0);
    }

    100% {
        opacity: 0; 
        transform: scale(1);
    }
`;

export const ArrowBtn = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0;
    background-color: rgb(255, 255, 255);
    animation: ${SpreadAni} 1.2s infinite ease-in-out;
`;