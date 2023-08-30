import React, { useState, useRef } from "react";
import { CustomInput } from "../InputField/index";
import "react-calendar/dist/Calendar.css";
import ArrowLeft from "../../assets/icons/arrow-left-icon.svg";
import ArrowRight from "../../assets/icons/arrow-right-icon.svg";
import { abbrDaysOfWeek, abbrMonthsOfYear, years } from "../../utils/index";
import { Select } from "../Select";
import {
  CalendarContainer,
  Container,
  Content,
  Days,
  FloatingBox,
  InputContainer,
  MonthArea,
  Navigation,
  NavigationButton,
  SelectDateArea,
  SelectMonth,
  SelectYear,
  StyledCalendar,
  WeekDays,
  YearArea,
} from "./calendar.styles";

type CalendarValues = {
  day: number;
  month: string;
  year: number;
  fullDate?: string;
};

export const CalendarCustom = () => {
  const [calendarValue, setCalendarValue] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMonthList, setShowMonthList] = useState(false);
  const [showYearList, setShowYearList] = useState(false);
  const [pickDateValues, setPickDateValues] = useState<CalendarValues[]>([
    { year: 2023, month: "Aug", day: 28 },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<string>("");

  // const handleDocumentClick = (event: MouseEvent) => {
  //   if (
  //     inputRef.current &&
  //     inputRef.current !== (event.target as HTMLInputElement) &&
  //     calendarRef.current &&
  //     !calendarRef.current.contains(event.target as Node)
  //   ) {
  //     setShowCalendar(false);
  //   }
  // };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");

    if (numericValue.length <= 8) {
      let formattedValue = "";
      for (let i = 0; i < numericValue.length; i++) {
        if (i === 2 || i === 4) {
          formattedValue += "/";
        }
        formattedValue += numericValue[i];
      }
      setDate(formattedValue);
    }

    if (numericValue.length >= 4) {
      const month = parseInt(numericValue.substring(2, 4), 10);
      if (month > 12) {
        setDate(numericValue.substring(0, 2) + "/" + numericValue.substring(4));
      }
    }
  };

  const handleClickPickMonth = (i: number, monthValue: string) => {
    setPickDateValues((prevValues) =>
      prevValues.map((item, index) =>
        index === i ? { ...item, month: monthValue } : item
      )
    );
    setShowMonthList(false);
  };

  const handleClickPickYear = (value: string) => {
    setPickDateValues((prevValues) =>
      prevValues.map((item, index) =>
        index === 0 ? { ...item, year: parseInt(value) } : item
      )
    );
    setShowYearList(false);
  };

  const updatePickDateValues = (
    newDay: number,
    newMonth: string,
    newYear: number
  ) => {
    setPickDateValues((prevValues) =>
      prevValues.map((item, index) =>
        index === 0 ? { day: newDay, month: newMonth, year: newYear } : item
      )
    );
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(calendarValue!);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCalendarValue(prevMonth);
    console.log(prevMonth);

    const newMonthInfo = abbrMonthsOfYear[prevMonth.getMonth()];
    const newMonth = newMonthInfo.label;
    const newYear = prevMonth.getFullYear();
    const day = prevMonth.getDay();
    updatePickDateValues(day, newMonth, newYear);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(calendarValue!);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCalendarValue(nextMonth);

    const newMonthInfo = abbrMonthsOfYear[nextMonth.getMonth()];
    const newMonth = newMonthInfo.label;
    const newYear = nextMonth.getFullYear();
    const day = nextMonth.getDay();
    updatePickDateValues(day, newMonth, newYear);
  };

  const handleDayClick = (date: Date) => {
    const formatDateObject = (date: Date): CalendarValues => {
      const year = date.getFullYear();
      const month = abbrMonthsOfYear[date.getMonth()].label;
      const day = date.getDate();
      return { year, month, day };
    };
    const formattedDate = formatDateObject(date);
    setPickDateValues([formattedDate]);
    setCalendarValue(date);
  };

  return (
    <Container>
      <Content>
        <InputContainer
          onMouseOver={() => setShowCalendar(true)}
          ref={inputRef}
        >
          <CustomInput
            $fullwidth={false}
            label="Date"
            type="date-field"
            value={date}
            onChange={handleDateChange}
          />
        </InputContainer>
        {showCalendar && (
          <CalendarContainer ref={calendarRef}>
            <FloatingBox>
              <Navigation>
                <NavigationButton onClick={() => handlePrevMonth()}>
                  <img src={ArrowLeft} alt="left" />
                </NavigationButton>
                <SelectDateArea>
                  <MonthArea>
                    <SelectMonth
                      onClick={() => setShowMonthList(!showMonthList)}
                    >
                      {pickDateValues[0].month}
                    </SelectMonth>
                    {showMonthList && (
                      <Select
                        data={abbrMonthsOfYear}
                        handleClick={(value: string) =>
                          handleClickPickMonth(0, value)
                        }
                      />
                    )}
                  </MonthArea>
                  <YearArea>
                    <SelectYear onClick={() => setShowYearList(!showYearList)}>
                      {pickDateValues[0].year}
                    </SelectYear>
                    {showYearList && (
                      <Select
                        data={years}
                        handleClick={(value: string) =>
                          handleClickPickYear(value)
                        }
                      />
                    )}
                  </YearArea>
                </SelectDateArea>
                <NavigationButton onClick={() => handleNextMonth()}>
                  <img src={ArrowRight} alt="right" />
                </NavigationButton>
              </Navigation>
              <WeekDays>
                <Days>
                  {abbrDaysOfWeek.map((day, index) => (
                    <p key={index}>{day}</p>
                  ))}
                </Days>
                <StyledCalendar
                  className="calendar"
                  onChange={() => ""}
                  value={calendarValue}
                  onClickDay={(value) => handleDayClick(value)}
                  defaultValue={calendarValue}
                />
              </WeekDays>
            </FloatingBox>
          </CalendarContainer>
        )}
      </Content>
    </Container>
  );
};
