import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 25px;
`;
export const PointsArea = styled.div`
  position: relative;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  margin: 0px;
`;

export const Point = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
export const CitiesName = styled.p`
  top: 0px;
  left: 30px;
  position: absolute;
  width: max-content;
  margin: 0;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Line = styled.div`
  width: 0;
  height: 40px;
  border-left: 2px dotted #374151;
  /* margin: 10px 0px 10px 0px; */
`;

export const AddNewPointButtonArea = styled.div`
  padding-top: 5px;
`;

export const AddNewPointButton = styled.button`
  border: none;
  background: transparent;
`;
