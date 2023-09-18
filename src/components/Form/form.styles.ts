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
  font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #7786d2;
  background: transparent;
  padding: 2px;
  border: 1px solid transparent;

  &:focus {
    border: 1.5px dotted #7786d2;
    border-radius: 5px;
  }
`;

export const InputArea = styled.div`
  width: 320px;
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const InputWrapper = styled.div`
  width: inherit;
  position: relative;
`;

export const InputSuggestions = styled.div`
  position: absolute;
  width: inherit;
  max-height: max-content;
  top: 70px;
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
  padding: 6px;
  gap: 2px;
  z-index: 10000;

  & button {
    background-color: #fff;
    width: 100%;
    border-radius: 6px;
    border: none;
    height: 28px;
    text-align: left;
    font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    padding-left: 5px;

    &:hover {
      background-color: #c7d1f4;
    }

    &:focus {
      background-color: #c7d1f4;
      outline: 1px dotted #c7d1f4;
    }
  }

  & p {
    margin: 0px;
    font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    cursor: po "Inter", Roboto, Arial, Helvetica, sans-serif;

    &:hover {
      background-color: #c7d1f4;
      width: 90%;
      border-radius: 6px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 8px 5px;
    border-color: transparent transparent #c7d1f4 transparent;
  }
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
  display: flex;
  justify-content: center;
  height: 100px;
`;

export const SubmitButton = styled.button`
  font-family: "Inter", Roboto, Arial, Helvetica, sans-serif;
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
