import React, { forwardRef, useEffect, useState } from 'react';
import { Detail, Explain, ImgAndLinkBox, ImgBox, IntroBox, IntroTitle, Link, LinkBox, List, ProjectBox, Responsive, Sidebar, Tag, Title, Wrapper } from './Project.style';
import { monivation1, monivation2, monivation3, monivation4 } from '../../assets/projectimg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Arrow from '../Arrow/Arrow';

const Project = forwardRef(({ onClickContact }, ref) => {

    const [playSwiper, setPlaySwiper] = useState(false);
    
    const [selectedProjectId, setSelectedProjectId] = useState(3);

    const projects = [
        {
            id: 0,
            type: "토이",
            role: null,
            title: "Todolist",
            imgs: [],
            explain: [
                "리덕스 툴킷을 연습하고자 진행했던 투두리스트 프로젝트입니다.",
            ],
            implement: "투두 추가, 투두 완료 및 제거, 현재 날짜 출력",
            tags: ["React", "Redux-toolkit", "Fontawesome"],
            startDate: "2023년 12월 9일",
            endDate: "2023년 12월 10일",
            responsive: false,
            site: "https://cosch218.github.io/2023_redux_toolkit_todolist/",
            git: "https://github.com/cosch218/2023_redux_toolkit_todolist",
        },
        {
            id: 1,
            type: "토이",
            role: null,
            title: "Apple Calculator",
            imgs: [],
            explain: [
                "타입스크립트로 리액트 컴포넌트 작성하는 것을 연습하고자 진행한 프로젝트 입니다.",
            ],
            implement: "사칙연산, 숫자 세 자리마다 콤마 출력, 백분율 계산, 양수 음수 전환, 입력 값 초기화, 한 개의 숫자에 소수점 두번 이상 입력 불가",
            tags: ["React", "TypeScript"],
            startDate: "2023년 12월 10일",
            endDate: "2023년 12월 10일",
            responsive: false,
            site: "https://cosch218.github.io/2023_typescript_calculator/",
            git: "https://github.com/cosch218/2023_typescript_calculator",
        },
        {
            id: 2,
            type: "개인",
            role: null,
            title: "COOKING",
            imgs: [],
            explain: [
                "프로젝트 기획 당시 리액트 useState, useEffect, API에 대해 배우고 있었기에 카카오 지도 API와 글쓰기, 스크랩 등의 기능을 중점으로 프로젝트를 진행해 보고자 요리에 관한 웹사이트를 제작했습니다.",
                "이 프로젝트는 제가 주로 사용하는 어플 우리의 식탁과 당근마켓에서 영감을 받아 요리 관련 어플에서도 사용자가 등록한 위치를 기반으로 가게나 요리학원을 확인하고 이런 컨텐츠를 중심으로 게시판이 활성화되면 재밌겠다는 생각에 제작하게 되었습니다.",
            ],
            implement: "회원가입, 로그인, 레시피 작성, 레시피 수정 및 삭제, 스크랩, 댓글, 데이터 랜덤 추출, 데이터 항목별 추출, 카카오 지도 API를 사용해 사용자가 등록한 주소를 기반으로 항목별 주변 사업장의 위치 출력",
            tags: ["React", "React Router", "React-Icon", "Kakao Map API", "Swiper"],
            startDate: "2023년 4월 15일",
            endDate: "2023년 5월 9일",
            responsive: false,
            site: "https://cosch218.github.io/2023-project-cooking",
            git: "https://github.com/cosch218/2023-project-cooking",
        },
        {
            id: 3,
            type: "팀",
            role: "팀장",
            title: "MONIVATION",
            imgs: [monivation1, monivation2, monivation3, monivation4],
            explain: [
                "프론트엔드 개발 첫 팀 프로젝트이자 팀장을 맡게 되어 개발팀을 어떻게 끌고 가면 되는지에 대한 것부터 기획, 여러가지 라이브러리 사용에 대한 공부를 할 수 있었습니다.",
                "MONIVATION은 Money와 Motivation을 결합한 단어로 돈관리에 동기부여를 더하자는 슬로건을 가지고 만들어진 프로젝트입니다.",
                "주된 기능은 가계부 관련 전반적인 기능이고, 서브 기능으로 유저를 일반 회원과 자산관리사 회원으로 나누어 가입 및 관리하는 기능과 개인회원이 자산관리사에게 상담을 예약하는 기능, 챌린지 생성 및 참여, 댓글 작성, 뱃지 부여 기능입니다."
            ],
            implement: "수입/반복수입/지출/반복지출 입력, 모달창, 라이브러리를 활용한 메인 페이지, 로그아웃 시 세션스토리지에 저장된 값 초기화, 네비게이션바",
            tags: ["React", "React Calendar", "React Slick", "React Spring", "React Router", "Redux-toolkit", "Firebase", "styled-components", "Framer Motion", "@use-gesture", "Moment.js", "Fontawesome"],
            startDate: "2023년 5월 19일",
            endDate: "2023년 7월 7일",
            responsive: false,
            site: "https://project-team-monivation.github.io/2023_MONIVATION/",
            git: "https://github.com/project-team-MONIVATION/2023_MONIVATION",
        },
        {
            id: 4,
            type: "개인",
            role: null,
            title: "Portfolio",
            imgs: [],
            explain: [
                "프론트엔드 개발자로 취업을 위한 프로젝트입니다. 정보성 페이지이기 때문에 적절히 동적이면서 저에 대한 정보가 한 눈에 깔끔히 들어오는 것을 목표로 제작했습니다.",
                "페이지를 들어오면 보이는 첫 화면에서 요소의 움직임으로 신선한 인상을 주고자 하였고 이를 위해 비동기 처리로 애니메이션을 제작했습니다.",
                "그리고 포트폴리오의 완성도를 위해 어도비 일러스트레이터로 로고를 제작했고 어도비 포토샵으로 배경 이미지를 제작했습니다."
            ],
            implement: "비동기 애니메이션, 스크롤 이동, 이미지 슬라이드, 이메일 전송",
            tags: ["React", "styled-components", "Swiper", "Typewriter", "Fontawesome"],
            startDate: "2023년 12월 12일",
            endDate: "2023년 12월 23일",
            responsive: false,
            site: "",
            git: "https://github.com/cosch218/2023_Portfolio",
        },
    ];

    const selectedProject = projects.find((project) => project.id === selectedProjectId);


    const printSideBar = () => {
        return (
            projects.reverse().map((project) => (
                <List 
                    key={project.id} 
                    onClick={() => {setSelectedProjectId(project.id)}}
                    className={selectedProjectId === project.id ? "active" : ""}
                >
                    {`[${project.type}] ${project.title}`}
                </List>
            ))
        )
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setPlaySwiper(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [playSwiper])


    return (
        <ProjectBox id='Project' ref={ref}>

            <Title>Project</Title>

            <Wrapper>
                <Sidebar>
                    <ul>
                        {printSideBar()}
                    </ul>
                </Sidebar>


                <Detail>

                    {
                        selectedProject && (
                            <IntroBox>
                                <li>
                                    <IntroTitle>프로젝트 소개</IntroTitle>
                                    {
                                        selectedProject.explain.map((line, idx) => (
                                            <Explain key={idx}>{line}</Explain>
                                        ))
                                    }
                                </li>
                                <li>
                                    <IntroTitle>구현 기능</IntroTitle>
                                    <Explain>{selectedProject.implement}</Explain>
                                </li>
                                <li>{
                                    selectedProject.tags.map((tag, idx) => (
                                        <Tag key={idx}>{tag}</Tag>
                                    ))
                                }</li>
                            </IntroBox>
                        )
                    }

                    <ImgAndLinkBox>
                        <ImgBox>
                            {
                                selectedProject.responsive 
                                ? (<Responsive>해당 웹사이트는 반응형으로 제작되었습니다.</Responsive>)
                                : (<Responsive>해당 웹사이트는 1920 x 1080 해상도에 최적화되어 있으므로 <br/> 별도의 해상도 지원이 되지 않는 점을 알려드립니다.</Responsive>)
                            }

                            {
                                playSwiper && selectedProject.imgs.length > 0 &&
                                    (<Swiper
                                        slidesPerView={1}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            pauseOnMouseEnter: true,
                                        }}
                                        pagination={{clickable: true}}
                                        navigation={true}
                                        loop={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                    >
                                        {
                                            selectedProject.imgs.map((img, idx) => (
                                                <SwiperSlide key={idx}>
                                                    <img src={img} alt={`slide-img-${idx}`} width="100%"/>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>)
                            }
                        </ImgBox>
                        <LinkBox>
                            <Link href={selectedProject.site} target='_blank'>사이트로 이동</Link>
                            <Link href={selectedProject.git} target='_blank'>레파지토리로 이동</Link>
                        </LinkBox>
                    </ImgAndLinkBox>
                    
                </Detail>
            </Wrapper>

            <Arrow onClickHandler={onClickContact}/>
            
        </ProjectBox>
    )
})

export default Project;