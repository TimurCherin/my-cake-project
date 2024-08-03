import styled from "styled-components";

const BtnsBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnSeeAll = styled.button`
  padding: 5px 20px;
  border-radius: 30px;
  background-color: #dcebf8;
  color: ${(props) => props.theme.colors.textColor};
  font-family: Verdana;
  font-size: ${(props) => props.theme.spacings(3.5)};
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;

const ArrowBtn = styled.button`
  background-color: transparent;
  border: none;
`;

export const SeeAllBox = () => (
  <BtnsBox>
    <BtnSeeAll type="button">Переглянути всі</BtnSeeAll>
    <ArrowBtn type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_5811_9696)">
          <path
            d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
            fill="#43607C"
          />
        </g>
        <defs>
          <clipPath id="clip0_5811_9696">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(-1 0 0 1 24 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </ArrowBtn>
    <ArrowBtn type="button">
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
    </ArrowBtn>
  </BtnsBox>
);
