import styled from "styled-components";
import stateImg1 from "../../../../src/imgs/StatePng/";
// import stateImg2 from "../../imgs/cupakes/cupake-2.jpg";
// import stateImg3 from "../../imgs/cupckes/cupake-3.jpg";
// import stateImg4 from "../../imgs/cupcaes/cupake-4.jpg";
// import stateImg5 from "../../imgs/cupcaes/cucake-5.jpg";
const GlawBox = styled.div``;

const Ul = styled.ul`
  display: flex;
  line-style: none;
`;
const BoxesFlex = styled.div`
  display: flex;
  align-items: center;
`;
const Boxes = styled.div`

`;
const BoxesFlexInfo = styled.div`
margin-left: 1128px;
display:flex;
`;
const GlawTxtState = styled.h2`
  color: var(--Black, #011936);
  font-family: "Yeseva One";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const BtnAllPoregl = styled.button`
  display: flex;
  height: 35px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--blue-bg-border, #dcebf8);
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const StateArrowBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const CakesCardBox = styled.div`
  padding: 15px 15px 15px 15px;
  box-shadow: ${(props) => props.theme.shadows.cupcakesCard};
  border-radius: 5px;
  height: 114px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-direction: column;
`;

const CakeCardTitle = styled.h2`
  color: ${(props) => props.theme.colors.accentColor};
  font-family: Verdana;
  font-size: ${(props) => props.theme.spacings(4.5)};
  font-weight: 700;
  line-height: 120%;
  /* margin-top: 15px; */
`;
const CakeCardSubtitle = styled.p`
  color: ${(props) => props.theme.colors.titleColor};
  font-family: Verdana;
  font-size: ${(props) => props.theme.spacings(4)};
  font-weight: 400;
  line-height: 20px;
  /* margin-top: 10px; */
  max-width: 250px;
`;
const CakeCardDescription = styled.p`
  color: #84a6c2;
  font-family: Verdana;
  font-size: ${(props) => props.theme.spacings(3.5)};
  font-weight: 400;
  line-height: 120%;
  /* margin-top: 5px; */
`;
export default function ListState() {
  return (
    <GlawBox>
      <BoxesFlex>
        <GlawTxtState>Статті</GlawTxtState>
        <BoxesFlexInfo>
        <BtnAllPoregl>Переглянути всі</BtnAllPoregl>

        <StateArrowBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_5811_8201)">
            <path
              d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
              fill="#43607C"
            />
          </g>
          <defs>
            <clipPath id="clip0_5811_8201">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </StateArrowBtn>
        <StateArrowBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_5811_8201)">
            <path
              d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
              fill="#43607C"
            />
          </g>
          <defs>
            <clipPath id="clip0_5811_8201">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </StateArrowBtn>
        </BoxesFlexInfo>
      </BoxesFlex>

      <Ul>
      <li>
              <img src={stateImg1} alt="cake-2" />
              <CakesCardBox>
                <CakeCardTitle>520 грн</CakeCardTitle>
                <CakeCardSubtitle>
                  Весільний триярусний торт з фруктами та квітами
                </CakeCardSubtitle>
                <CakeCardDescription>4 варіанти начинок</CakeCardDescription>
              </CakesCardBox>
            </li>


      </Ul>
    </GlawBox>
  );
}
