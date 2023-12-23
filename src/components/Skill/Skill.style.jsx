import styled from 'styled-components';

export const StackBox = styled.div`
    position: relative;
    background: linear-gradient(#202020, #343434);
    color: white;
`;

export const Title = styled.p `
    margin-top: 180px;
    font-family: 'Cafe24ClassicType-Regular';
    font-size: 2.2rem;
`;

export const Group = styled.div`
    text-align: left;
    width: 1040px;
    margin: auto;
    margin-top: 80px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
    min-height: 130px;
    margin-top: 15px;
`;

export const Item = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, #f6f6f6, #d0d0d7);
    transition: 300ms ease;
    cursor: pointer;
    border: 1px solid #202020;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    &:hover {
        height: 120px;
        padding-right: 180px;
    }

    &:hover div {
        opacity: 1;
        left: 90px;
        visibility: visible;
    }
`;

export const Explain = styled.div`
    position: absolute;
    left: 150px;
    width: 180px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: left 400ms ease, opacity 400ms ease;
    color: #202020;
    border-radius: 10px;

    & p {
        text-align: left;
        padding-right: 20px;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.05rem;
    }

    & p:first-child {
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 1rem;
    }
`;