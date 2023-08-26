import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: -45px;
  right: 30px;
  width: max-content;
  min-width: 48px;
  height: fit-content;
  border: 1px solid #7786d2;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;
  color: #7786d2;

  & p {
    margin: 0px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    color: #c7d1f4;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -6.5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 6px;
    border-color: transparent transparent transparent #7786d2;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 5px;
    border-color: transparent transparent transparent #fff;
    transform: translateY(-50%);
  }
`;
