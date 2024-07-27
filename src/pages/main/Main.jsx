import { Header } from "../../components/general-components/Header/Header.styled";
import { Container } from "../../components/general-components/Container/Container.styled";
import { Logo } from "../../components/general-components/Logo/Logo.styled";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import styled from "styled-components";
import { Hero } from "../../components/main-page/Hero/Hero.styled";

//! header
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

// !hero
const HeroTitle = styled.h1`
  font-family: "Yeseva One";
  font-size: 42px;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 15px;
  max-width: 463px;
  color: #011936;
`;

const HeroDescription = styled.p`
  font-family: "Verdana";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.colors.textColor};
  max-width: 463px;
`;

const HeroSearchInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const HeroSearchInput = styled.input`
  display: block;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #dfdfdf;
  width: 720px;
  height: 48px;
  // padding: 10px 20px;
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

const HeroPopularSearchList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 10px;
  margin-top: 30px;
`;

const HeroPopularSearchItem = styled.li`
  border-radius: 40px;
  background-color: #fff2f2;
  padding: 5px 20px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroPopularSearchText = styled.p`
  color: #8e4a4e;
  font-family: "Verdana";
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
`;

const HeroProductsList = styled.ul`
  display: flex;
  align-items: center;

  li {
  }
`;

export const Main = () => {
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
      <Hero>
        <Container>
          <HeroTitle>Пошукаємо щось смачненького?</HeroTitle>
          <HeroDescription>
            Ми об’єднали кондитерів з різних міст, щоб необхідні смаколики можна
            було замовити ще легше
          </HeroDescription>
          <HeroSearchInputBox>
            <HeroSearchInput />
            <HeroSearchBtn>Шукати</HeroSearchBtn>
          </HeroSearchInputBox>
          <HeroPopularSearchList>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>На день народження</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>З фруктами</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Патріотичні</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Для чоловіків</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Для весілля</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Без глютену</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Веганські</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Без цукру </HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Для дівчат</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>З квітами</HeroPopularSearchText>
            </HeroPopularSearchItem>
            <HeroPopularSearchItem>
              <HeroPopularSearchText>Класичні рецепти</HeroPopularSearchText>
            </HeroPopularSearchItem>
          </HeroPopularSearchList>
          <HeroProductsList>
            <li></li>
          </HeroProductsList>
        </Container>
      </Hero>
    </>
  );
};
