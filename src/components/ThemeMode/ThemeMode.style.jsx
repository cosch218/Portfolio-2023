import styled from 'styled-components';

export const ThemeBox = styled.div`
    padding: 30px 30px;
    width: 25px;
    height: 50px;
    opacity: 0;
    transform: translateX(-15px);

    &.visible {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.5s ease-in-out;
    }
`;

export const ThemeBtn = styled.button`
    border: 0.5px solid #202020;
    width: 100%;
    height: 50%;
    background-color: transparent;
`;