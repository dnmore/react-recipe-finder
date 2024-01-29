import styled from "styled-components";

export const CardBackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardBodyContainer = styled.div`
  height: 120px;
  width: 250px;
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const CardContainer = styled.div`
  height: 200px;
  width: 400px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${CardBackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CardBodyContainer} {
      opacity: 0.8;
    }
  }
`;
