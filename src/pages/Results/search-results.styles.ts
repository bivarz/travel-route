import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 900px;
  min-width: 310px;
  min-height: 410px;
  height: fit-content;
  /* padding: 38px 200px 38px 200px; */
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Middle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  /* gap: 30px; */
`;

export const DataResultsArea = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    margin: 0px;
    font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #7786d2;
  }

  &.error {
    height: 223px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: #374151;
  width: 58px;
  height: 38px;
  padding: 8px 12px 8px 12px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  color: #e5e7eb;
  font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
`;
