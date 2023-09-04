import React, { useState, useRef, useEffect } from "react";
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
import { formatDateToDDMMYYYY } from "../../utils/formatDate";

type CalendarValues = {
  day: number;
  month: string;
  monthNumber: number;
  year: number;
  fullDate?: string;
};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarCustom = () => {
  const [calendarValue, setCalendarValue] = useState<Value>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMonthList, setShowMonthList] = useState(false);
  const [showYearList, setShowYearList] = useState(false);
  const [pickDateValues, setPickDateValues] = useState<CalendarValues[]>([
    { year: 2023, month: "Aug", day: 28, monthNumber: 7 },
  ]);
  const selectValues = abbrMonthsOfYear.map((month) => month.label);

  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<string>("");
  const [dateError, setDateError] = useState<string | null>(null);

  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(() => {
    const currentMonthIndex = new Date().getMonth();
    return currentMonthIndex;
  });

  const [selectedYear, setSelectedYear] = useState<number>(() => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  });

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

  useEffect(() => {
    const initialDate = new Date();
    const numericValue = formatDateToDDMMYYYY(initialDate)
      .toString()
      .replace(/\D/g, "");
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
  }, []);

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
    setDateError("");
  };

  const handleClickPickMonth = (i: number, monthValue: string) => {
    const findMonthIndex = (monthValue: string) => {
      return abbrMonthsOfYear.findIndex((month) => month.label === monthValue);
    };
    const mi = findMonthIndex(monthValue);
    setCalendarValue(new Date(selectedYear, selectedMonthIndex));
    setPickDateValues((prevValues) =>
      prevValues.map((item, index) =>
        index === i ? { ...item, month: monthValue } : item
      )
    );
    setCalendarValue(new Date(selectedYear, mi));
    setSelectedMonthIndex(mi);
    setShowMonthList(false);
  };

  const handleClickPickYear = (value: string) => {
    setSelectedYear(parseInt(value));

    setPickDateValues((prevValues) =>
      prevValues.map((item, index) =>
        index === 0 ? { ...item, year: parseInt(value) } : item
      )
    );
    setCalendarValue(new Date(parseInt(value), selectedMonthIndex));
    setShowYearList(false);
  };

  const handlePrevMonth = () => {
    let newMonthIndex = selectedMonthIndex;
    let newYear = selectedYear;

    if (newMonthIndex === 0) {
      newMonthIndex = 11;
      newYear -= 1;
    } else {
      newMonthIndex -= 1;
    }

    setSelectedMonthIndex(newMonthIndex);
    setSelectedYear(newYear);

    setPickDateValues((prevValues) =>
      prevValues.map((item) =>
        item.year !== newYear
          ? {
              ...item,
              year: selectedYear,
            }
          : item
      )
    );

    if (calendarValue instanceof Date) {
      const prevMonth = new Date(calendarValue);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      setCalendarValue(prevMonth);
    }
  };

  const handleNextMonth = () => {
    let newMonthIndex = selectedMonthIndex;
    let newYear = selectedYear;

    if (newMonthIndex === 11) {
      newMonthIndex = 0;
      newYear += 1;
    } else {
      newMonthIndex += 1;
    }

    setSelectedMonthIndex(newMonthIndex);
    setSelectedYear(newYear);

    setPickDateValues((prevValues) =>
      prevValues.map((item) =>
        item.year !== newYear
          ? {
              ...item,
              year: selectedYear,
            }
          : item
      )
    );

    if (calendarValue instanceof Date) {
      const nextMonth = new Date(calendarValue);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setCalendarValue(nextMonth);
    }
  };

  const updateCalendarAndPickDateValues = (value: Value) => {
    if (value instanceof Date) {
      setCalendarValue(value);
      setPickDateValues([
        {
          day: value.getDate(),
          month: abbrMonthsOfYear[value.getMonth()].label,
          monthNumber: value.getMonth(),
          year: value.getFullYear(),
        },
      ]);
    } else if (
      Array.isArray(value) &&
      value.length > 0 &&
      value[0] instanceof Date
    ) {
      const startDate = value[0];
      setCalendarValue(startDate);
      setPickDateValues([
        {
          day: startDate.getDate(),
          month: abbrMonthsOfYear[startDate.getMonth()].label,
          monthNumber: startDate.getMonth(),
          year: startDate.getFullYear(),
        },
      ]);
    }
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
            errorMsg={dateError}
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
                      {selectValues[selectedMonthIndex]}
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
                  onChange={(value) => updateCalendarAndPickDateValues(value)}
                  defaultValue={calendarValue}
                  onClickDay={(value) => setCalendarValue(value)}
                  activeStartDate={
                    calendarValue instanceof Date ? calendarValue : undefined
                  }
                  onActiveStartDateChange={(value) => {
                    setCalendarValue(value.activeStartDate);
                  }}
                />
              </WeekDays>
            </FloatingBox>
          </CalendarContainer>
        )}
      </Content>
    </Container>
  );
};
