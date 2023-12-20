import styled from 'styled-components';

export const StackBox = styled.div`
    position: relative;
    background-color: #202020;
    color: white;
`;

export const Title = styled.p `
    margin-top: 130px;
    font-family: 'Cafe24ClassicType-Regular';
    font-size: 2rem;
`;

export const Group = styled.div`
    text-align: left;
    width: 1200px;
    margin: auto;
    margin-top: 80px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
    min-height: 130px;
    margin-top: 20px;
`;

export const Item = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background-color: rgba(255, 255, 255);
    transition: 300ms ease;


    &:hover {
        height: 120px;
        padding-right: 180px;
    }

    &:hover div {
        opacity: 1;
        left: 90px;
        width: 180px;
        visibility: visible;
    }
`;

export const Explain = styled.div`
    position: absolute;
    left: 150px;
    width: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: left 250ms ease, opacity 400ms ease, width 400ms ease;
    background-color:rgba(32, 32, 32);
`;