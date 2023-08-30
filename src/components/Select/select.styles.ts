import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 35px;
`;
export const FloatingBox = styled.div`
  width: fit-content;
  min-width: 48px;
  height: fit-content;
  border: 1px solid #c7d1f4;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0px;

  & p {
    margin: 0px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #c7d1f4;
      width: 90%;
      border-radius: 6px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -8px; /* Posição ajustada para que a ponta fique voltada para baixo */
    left: 8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 8px 5px;
    border-color: transparent transparent #c7d1f4 transparent;
  }
`;
