import styled from 'styled-components';
import back from '../../assets/back_about.jpg';

export const AboutBox = styled.div`
    position: relative;
`;

export const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${back});
    background-size: cover;
    z-index: -100;
`;

export const Typing = styled.div`
    margin-bottom: 100px;
    font-size: 5rem;
    font-weight: 400;

    @media screen and (max-height: 999.99px) {
        margin-top: 10%;
    }

    @media screen and (min-height: 1000px) and (max-height: 1199.99px) {
        margin-top: 13%;
    }

    @media screen and (min-height: 1200px) {
        margin-top: 17%;
    }
`;

export const Intro = styled.div`
    font-size: 1.3rem;

    & p {
        margin-bottom: 10px;
    }

    & strong {
        background-color: #f3eed8;
    }
`;

export const LinkBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 470px;
    margin: auto;
    margin-top: 70px;
`;

export const Link = styled.a`
    text-decoration: none;
    background: #202020;
    color: white;
    box-sizing: border-box;
    padding: 15px 50px;
    border: 1px solid #202020;

    &:hover {
        background: #e7da9e;
        color: #202020;
        border: 1.5px solid #7b7b7b;
    }
`;