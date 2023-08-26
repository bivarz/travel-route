import styled from "styled-components";

interface StyledContentProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: fit-content;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px;
`;

export const Content = styled.div<StyledContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => (props.hasError ? "#ff0000" : "#e5e7eb")};
  padding: 5px 8px;
  border-radius: 8px;
  width: 120px;
`;

export const Button = styled.button`
  width: 21px;
  height: 21px;
  border-radius: 4px;
  border: 1px;
  background-color: #c7d1f4;
  color: #fff;
  font-family: Inter;
  display: flex;
  align-items: center;

  text-align: center;

  &:hover {
    background-color: #7786d2;
  }
`;

export const ErrorMsg = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #ff0000;
  margin: 0;
`;
