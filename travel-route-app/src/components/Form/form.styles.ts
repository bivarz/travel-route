import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  min-height: 334px;
  width: 85%;
  justify-content: space-between;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  align-items: flex-start;
`;

export const AddButton = styled.button`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #7786d2;
  background: transparent;
  padding: 2px;
  border: 1px solid transparent;
`;

export const InputArea = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background: none;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  border: none;
`;

export const SubmitButtonArea = styled.div`
  align-items: end;
`;

export const SubmitButton = styled.button`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background-color: #374151;
  color: #e5e7eb;
  padding: 8px 12px 8px 12px;

  &:disabled {
    color: #fff;
    background: #e5e7eb;
    cursor: default;
  }
`;
