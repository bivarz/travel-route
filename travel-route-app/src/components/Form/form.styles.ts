import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 334px;
  width: 85%;
  justify-content: space-between;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
    border-radius: 5px;
  }
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
  border-radius: 0;

  cursor: pointer;

  :hover {
    color: #7786d2;
  }

  :visited {
    color: #7786d2;
  }
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
`;

export const SubmitButtonArea = styled.div`
  align-items: end;
`;
