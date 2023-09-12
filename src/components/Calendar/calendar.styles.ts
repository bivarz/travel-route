import styled from "styled-components";
import Calendar from "react-calendar";

export const Container = styled.div`
  width: fit-content;
  background-color: #fff;
`;
export const Title = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
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
`;
export const InputContainer = styled.div``;

export const CalendarContainer = styled.div`
  position: relative;
`;
export const FloatingBox = styled.div`
  position: absolute;
  top: 0px;
  width: 221px;
  height: 221px;
  border: 1px solid #c7d1f4;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  padding-top: 10px;

  &::before {
    content: "";
    position: absolute;
    top: -8px; /* Posição ajustada para que a ponta fique voltada para baixo */
    left: 3%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 8px 5px;
    border-color: transparent transparent #c7d1f4 transparent;
  }
`;
export const Navigation = styled.div`
  width: 180px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavigationButton = styled.button`
  border: none;
  background: transparent;
  width: fit-content;
  padding: 0;
`;
export const SelectDateArea = styled.div`
  display: flex;
  gap: 2px;
`;
export const MonthArea = styled.div`
  position: relative;
`;
export const YearArea = styled.div`
  position: relative;
`;
export const SelectMonth = styled.button`
  position: relative;
  border: 1px solid #e5e7eb;
  width: 54px;
  border-radius: 6px;
  background-color: #c7d1f4;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    right: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 7px 7px;
    border-color: transparent transparent #374151 transparent;
  }
`;
export const SelectYear = styled.button`
  position: relative;
  border: 1px solid #e5e7eb;
  width: 54px;
  border-radius: 6px;
  background-color: #c7d1f4;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    right: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 7px 7px;
    border-color: transparent transparent #374151 transparent;
  }
`;
export const WeekDays = styled.div``;

export const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 20px;

  p {
    width: 27px;
    margin: 0px;
    padding: 5px 0px;
    font-weight: 700;
  }
`;
export const StyledCalendar = styled(Calendar)`
  &.react-calendar {
    text-align: center;
    color: #374151;
    border: none;
    width: fit-content;
    .react-calendar__navigation {
      display: none;
    }

    .react-calendar__month-view__weekdays {
      display: none !important;
    }

    .react-calendar__month-view__days {
      width: 201px;

      padding: 5px;

      & button {
        font-family: Inter;
        color: #374151;
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        color: #e5e7eb;
      }
    }
    .react-calendar__tile {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 0px;
      max-width: 100%;
      padding: 5px 0px;
      background: none;
      text-align: center;
      line-height: 16px;

      &.react-calendar__tile--active {
        background-color: #c7d1f4;
      }
      &.react-calendar__tile:hover {
        background-color: #c7d1f4;
        border-radius: 100%;
      }

      &.react-calendar__tile--hasActive {
        background-color: #f2f4f8;
      }

      &.react-calendar__tile--now {
        color: #374151;
      }

      &.react-calendar__tile.react-calendar__tile--active {
        background-color: #c7d1f4;
        border-radius: 100%;
      }
      &.react-calendar__tile--now.react-calendar__tile {
        border-radius: 100%;
        border: 1px solid #7786d2;
      }
    }
  }
`;
