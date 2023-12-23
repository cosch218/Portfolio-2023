import styled from 'styled-components';

export const ProjectBox = styled.div`
    position: relative;
`;

export const Title = styled.p `
    margin-top: 180px;
    font-family: 'Cafe24ClassicType-Regular';
    font-size: 2.2rem;
`;

export const Wrapper = styled.div`
    width: 1300px;
    height: 450px;
    margin: auto;
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    box-shadow: 0 0 20px rgba(190, 190, 190, 0.2);
    font-weight: 400;
`;

export const Sidebar = styled.div`
    width: 230px;
    height: 100%;
    text-align: left;
    line-height: 3.5rem;
    background-color: #202020;
    color: white;
`;

export const List = styled.li`
    padding: 0 20px;
    cursor: pointer;

    &.active {
        background-color: #e7da9e;
        color: #202020;
    }
`;

export const Detail = styled.div`
    display: flex;
    width: 1070px;
    height: 100%;
`;

export const IntroBox = styled.ul`
    width: 60%;
    height: 100%;
    text-align: left;
    padding: 20px;
    padding-right: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & li p:nth-child(2) {
        margin-top: 0;
    }

    & li p:last-child {
        margin-bottom: 10px;
    }
`;

export const IntroTitle = styled.p`
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 500;
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1.5px solid #202020;
    margin-bottom: 10px;
    background: linear-gradient(135deg, rgba(243, 238, 216, 0.4), rgba(203, 199, 221, 0.3));
`;

export const Explain = styled.p`
    line-height: 1.4rem;
    margin-top: 5px;
    padding: 0 5px;
`

export const Tag = styled.span`
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 300;
    box-sizing: border-box;
    padding: 5px 10px;
    margin-top: 8px;
    margin-right: 8px;
    border-radius: 5px;
    background-color: #e5e5e5;
`;

export const ImgAndLinkBox = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
`;

export const Responsive = styled.p `
    box-sizing: border-box;
    height: 15%;
    padding-top: 5px;
    font-size: 0.8rem;
    color: #797979;
    font-weight: 300;
    line-height: 0.9rem;
`

export const ImgBox = styled.div`
    width: 100%;
    height: 300px;

    & .swiper {
        height: 85%;
    }

    & .swiper-button-prev, .swiper-button-next {
        display: none;
    }

    & .swiper-pagination-bullet {
        border-radius: 0;
        width: 30px;
        height: 5px;
    }

    & .swiper-pagination-bullet-active {
        background-color: #202020;
    }
`;

export const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 105px;
    margin-top: 15px;
    gap: 15px;
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    cursor: pointer;
    text-decoration: none;
    background-color: #202020;
    color: white;
    box-sizing: border-box;
    border: 1px solid #202020;

    &:hover {
        background-color: #e7da9e;
        color: #202020;
        border: 1.5px solid #7b7b7b;
    }
`