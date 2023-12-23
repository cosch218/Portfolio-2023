import styled from 'styled-components';

export const ContactBox = styled.div`
    position: relative;
    background-color: #f3eed8;
`;

export const Title = styled.p `
    margin-top: 180px;
    font-family: 'Cafe24ClassicType-Regular';
    font-size: 2.2rem;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 700px;
    height: 470px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 1px 1px 20px rgba(151, 148, 134, 0.1);
    box-sizing: border-box;
    padding: 50px;
    margin: auto;
    margin-top: 70px;

    & ul {
        width: 100%;
    }

    & li:first-child p {
        margin-top: 0;
    }

    & p {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    & input, textarea {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border: 0.5px solid rgba(151, 148, 134, 0.3);
        font-family: 'SCoreDream';
        padding: 0 15px;
    }
    
    & input:focus, textarea:focus {
        outline: 0;
    }

    & textarea {
        resize: none;
        height: 90px;
        padding: 10px 15px;
        line-height: 1.2rem;
    }

    & button {
        width: 100px;
        height: 40px;
        font-family: 'Cafe24ClassicType-Regular';
        border: 0;
        background-color: #202020;
        color: white;
        box-sizing: border-box;
        border: 1px solid #202020;
    }

    & button:hover {
        background-color: #e7da9e;
        color: #202020;
        border: 1.5px solid #7b7b7b;
    }
`;