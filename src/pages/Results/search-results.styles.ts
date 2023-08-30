import styled from "styled-components";

interface DataResultsAreaProps {
  error: boolean;
}

export const Container = styled.div`
  width: max-content;
  min-height: 334px;
  min-width: 580px;
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
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`;

export const DataResultsArea = styled.section<DataResultsAreaProps>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.error ? "223px" : "")};
  gap: 10px;

  p {
    margin: 0px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  span {
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #7786d2;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: bottom;
`;

export const Button = styled.button`
  background-color: #374151;
  width: 58px;
  height: 38px;
  padding: 8px 12px 8px 12px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  color: #e5e7eb;
  font-family: Inter;
`;