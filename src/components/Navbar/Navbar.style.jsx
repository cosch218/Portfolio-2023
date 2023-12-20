import styled from 'styled-components';


export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 30px;
    z-index: 10000;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-15px);

    &.visible {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.5s ease-in-out;
    }
`;

export const NavList = styled.ul`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    
    &.white {
        color: white;
    }
`;

export const List = styled.li`
    text-decoration: none;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-20px);

    &.visible {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    &:hover {
        font-weight: 500;
    }

    &:hover::after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #202020;
    }
`;