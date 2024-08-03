import styled from "styled-components";

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

export const CakeCard = ({imgUrl, price, subtitle, description}) => (
  <li>
    <img src={imgUrl} alt="cake-1" />
    <CakesCardBox>
      <CakeCardTitle>{price} грн</CakeCardTitle>
      <CakeCardSubtitle>
        {subtitle}
      </CakeCardSubtitle>
      <CakeCardDescription>{description}</CakeCardDescription>
    </CakesCardBox>
  </li>
);
