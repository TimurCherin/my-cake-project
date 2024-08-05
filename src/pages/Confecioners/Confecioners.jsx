import { Header } from "../../components/general-components/Header/Header.styled";
import styled from "styled-components";
import { Container } from "../../components/general-components/Container/Container.styled";
import { Logo } from "../../components/general-components/Logo/Logo.styled";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import { ConfectionersList } from "../../components/general-components/ConfectionersList/ConfectionersList";
import { List } from "../../components/general-components/List/List.styled";
import Footerr from "../../components/general-components/Footer/Footer";
import ListState from "../../components/general-components/upFooterListState/ListState";

const LocationBtn = styled.button`
  border-radius: 36px;
  background-color: rgb(255, 242, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  margin-left: 30px;
`;

const HeaderList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.a`
  font-family: "Verdana";
  color: rgb(1, 25, 54);
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
`;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
`;

const ChatIcon = styled.img`
  margin-right: 30px;
  margin-left: auto;
  width: 25px;
`;
ChatIcon.defaultProps = {
    src: Chat,
};

const LoginIcon = styled.img`
  width: 25px;
  margin-right: 12.5px;
`;
LoginIcon.defaultProps = {
    src: Login,
};

const PositionIcon = styled.img`
  width: 14px;
  margin-right: 15px;
`;
PositionIcon.defaultProps = {
    src: Position,
};
const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;
const Article = styled.section`
  padding-top: 40px;
  padding-bottom: 111px;
`;

const ArticleInput = styled.input`
  border: 1px solid rgb(223, 223, 223);
  border-radius: 5px 0px 0px 5px;
  padding: 10px 20px 10px 20px;
`;

const ArticleBtn = styled.button`
  border: 1px solid rgb(253, 173, 109);
  border-radius: 0px 5px 5px 0px;
  background-color: rgb(253, 173, 109);
`;

const ArticleWrapper = styled.div`
  width: 1000px;
`;
const ArticleBanner = styled.img`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
`;

const ArticleTitle = styled.img`
  color: rgb(67, 96, 124);
  font-size: 35px;
  font-weight: 400;
  line-height: 40px;
`;
const ArticleBlock = styled.div`
  gap: 30px;
`;
const ArticleText = styled.p`
  color: rgb(67, 96, 124);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

const HeroSearchInputBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;

  button:hover {
    cursor: pointer;
  }
`;

const HeroSearchInput = styled.input`
  display: block;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #dfdfdf;
  width: 1340px;
  height: 48px;
  padding: 0 20px 0 20px;
`;

const HeroSearchBtn = styled.button`
  display: block;
  padding: 14px 30px;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #fdad6d;
  background-color: ${(props) => props.theme.colors.buttonsColor};
  color: #8e4a4e;
  font-family: "Verdana";
  font-size: ${(props) => props.theme.spacings(4.5)};
  font-weight: 400;
  line-height: 120%;
  height: 50px;
`;

const HeroPopularSearchList = styled(List)`
  max-width: 800px;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 40px;
  justify-content: left;
`;

const HeroPopularSearchItem = styled.li`
  border-radius: 40px;
  background-color: #fff2f2;
  padding: 5px 20px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  *:hover {
    cursor: pointer;
  }
`;

const HeroPopularSearchText = styled.p`
  color: #8e4a4e;
  font-family: "Verdana";
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
`;

const BtnLoading = styled.button`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
color: var(--CTA-blue, #43607C);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 19.2px */
border-radius: 49px;
border: 1px solid var(--CTA-blue-text, #84A6C2);
padding: 5px 10px;
  width: 100%;
`

const LoadingList = styled.ul`
justify-content: center;
align-items: center;
width: 435px;
gap: 10px;
margin-right: auto;
margin-left: auto;
margin-top: 40px;
display: flex;
flex-wrap: wrap;
margin-bottom: 80px;
`;

const LoadingBtn = styled.button`
border-radius: 50px;
background-color: transparent;
width: 50px;
height: 50px;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 120%; 
border-radius: 50px;
border: 1px solid var(--CTA-yellow-border, #FFE2CA);
background: var(--White, #FFF);
`;


export const Confecioners = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderWrapper>
                        <Logo>MyCake</Logo>
                        <LocationBtn>
                            <PositionIcon />
                            Вся Україна
                        </LocationBtn>
                        <HeaderList>
                            <li>
                                <HeaderLink>Десерти</HeaderLink>
                            </li>
                            <li>
                                <HeaderLink>Кращі кондитери</HeaderLink>
                            </li>
                            <li>
                                <HeaderLink>Корисні статті</HeaderLink>
                            </li>
                        </HeaderList>

                        <HeaderBlock>
                            <ChatIcon />
                            <LoginIcon />
                            Увійти
                        </HeaderBlock>
                    </HeaderWrapper>
                </Container>
            </Header>
            <Container>
                <HeroSearchInputBox>
                    <HeroSearchInput />
                    <HeroSearchBtn type="button">Шукати</HeroSearchBtn>
                </HeroSearchInputBox>
                <HeroPopularSearchList>
                    <HeroPopularSearchItem>
                        <HeroPopularSearchText>
                            Капкейки
                        </HeroPopularSearchText>
                    </HeroPopularSearchItem>
                    <HeroPopularSearchItem>
                        <HeroPopularSearchText>Торти</HeroPopularSearchText>
                    </HeroPopularSearchItem>
                    <HeroPopularSearchItem>
                        <HeroPopularSearchText>Кейк-попси</HeroPopularSearchText>
                    </HeroPopularSearchItem>
                    <HeroPopularSearchItem>
                        <HeroPopularSearchText>Макаруни</HeroPopularSearchText>
                    </HeroPopularSearchItem>
                    <HeroPopularSearchItem>
                        <HeroPopularSearchText>Печиво</HeroPopularSearchText>
                    </HeroPopularSearchItem>
                    <HeroPopularSearchItem>
                        <HeroPopularSearchText>Цукерки</HeroPopularSearchText>
                    </HeroPopularSearchItem>
                </HeroPopularSearchList>
                <ConfectionersList />
                <BtnLoading type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 26" fill="none">
                        <g clip-path="url(#clip0_5801_95)">
                            <path d="M14.5833 13C14.5833 11.8542 13.6458 10.9167 12.5 10.9167C11.3542 10.9167 10.4167 11.8542 10.4167 13C10.4167 14.1458 11.3542 15.0833 12.5 15.0833C13.6458 15.0833 14.5833 14.1458 14.5833 13ZM12.5 3.625C7.32292 3.625 3.125 7.82292 3.125 13H0L4.16667 17.1667L8.33333 13H5.20833C5.20833 8.96875 8.46875 5.70833 12.5 5.70833C16.5312 5.70833 19.7917 8.96875 19.7917 13C19.7917 17.0312 16.5312 20.2917 12.5 20.2917C10.9271 20.2917 9.46875 19.7812 8.27083 18.9375L6.79167 20.4375C8.375 21.6458 10.3542 22.375 12.5 22.375C17.6771 22.375 21.875 18.1771 21.875 13C21.875 7.82292 17.6771 3.625 12.5 3.625Z" fill="#43607C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5801_95">
                                <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Більше смаколиків
                </BtnLoading>

                <LoadingList>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_5801_7076)">
                            <path d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z" fill="#011936" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5801_7076">
                                <rect width="24" height="24" rx="12" transform="matrix(-1 0 0 1 24 0)" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <li>
                        <LoadingBtn type="button">1</LoadingBtn>
                    </li>
                    <li>
                        <LoadingBtn type="button">2</LoadingBtn>
                    </li>
                    <li>
                        <LoadingBtn type="button">3</LoadingBtn>
                    </li>
                    <li>
                        <LoadingBtn type="button">4</LoadingBtn>
                    </li>
                    <li>
                        ...
                    </li>
                    <li>
                        <LoadingBtn type="button">15</LoadingBtn>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_5801_7093)">
                            <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#011936" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5801_7093">
                                <rect width="24" height="24" rx="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </LoadingList>
                <ListState></ListState>
            </Container>
            <Footerr></Footerr>
        </>
    );
};