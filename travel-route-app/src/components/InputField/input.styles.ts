import styled from "styled-components";

interface InputProps {
  fullWidth: boolean;
}

export const Container = styled.div`
  min-width: 320px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InputFieldArea = styled.div`
  input:focus {
    outline: none;
    border: 1px solid #c7d1f4;
  }
`;
export const Label = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px;
`;

export const Input = styled.input<InputProps>`
  font-family: Inter;
  border-radius: 6px;
  height: 32px;
  width: ${(props) => (props.fullWidth ? "100%" : "132px")};
  border: 1px solid #e5e7eb;
  color: #374151;

  &.date {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: center;
    color: #374151;
    word-spacing: 2px;
  }
`;

export const ErrorMsg = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  margin: 0px;
  color: red;
  height: 20px;
`;
