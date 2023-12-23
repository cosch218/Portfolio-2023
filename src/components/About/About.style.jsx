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
    margin-top: 250px;
    margin-bottom: 100px;
    font-size: 5rem;
    font-weight: 400;
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
    width: 480px;
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