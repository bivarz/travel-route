import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 900px;
  min-height: 334px;
  height: fit-content;
  padding: 38px 200px 38px 200px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Middle = styled.section`
  display: flex;
  width: fit-content;
`;

export const Right = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
