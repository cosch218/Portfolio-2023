import styled, { keyframes } from 'styled-components';

export const ArrowBox = styled.div`
    position: absolute;
    bottom: 7vh;
    left: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const ArrowContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(32, 32, 32, 0.4);
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