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

type CalendarValues = {
  day: number;
  month: string;
  year: number;
  fullDate?: string;
};

export const CalendarCustom = () => {
  const [value, onChange] = useState<Date>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMonthList, setShowMonthList] = useState(false);
  const [showYearList, setShowYearList] = useState(false);
  const [pickDateValues, setPickDateValues] = useState<CalendarValues[]>([
    { year: 2023, month: "aug", day: 28 },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      inputRef.current &&
      inputRef.current !== (event.target as HTMLInputElement) &&
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setShowCalendar(false);
    }
  };

  const [date, setDate] = useState<string>("");

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

  const handleClickPickMonth = (monthValue: string | number) => {
    const newMonth = { ...pickDateValues, month: monthValue };
    setPickDateValues(newMonth);
    setShowMonthList(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

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
                <NavigationButton>
                  <img src={ArrowLeft} alt="left" />
                </NavigationButton>
                <SelectDateArea>
                  <MonthArea>
                    <SelectMonth
                      onClick={() => setShowMonthList(!showMonthList)}
                    >
                      Aug
                    </SelectMonth>
                    {showMonthList && (
                      <Select
                        data={abbrMonthsOfYear}
                        handleClick={() => ""}
                        // handleClick={(value: string) =>
                        //   handleClickPickMonth(value)
                        // }
                      />
                    )}
                  </MonthArea>
                  <YearArea>
                    <SelectYear onClick={() => setShowYearList(!showYearList)}>
                      2023
                    </SelectYear>
                    {showYearList && (
                      <Select
                        data={years}
                        handleClick={(value: string | number) =>
                          handleClickPickMonth(value)
                        }
                      />
                    )}
                  </YearArea>
                </SelectDateArea>
                <NavigationButton>
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
                  onChange={(newValue) => onChange(newValue as Date)}
                  value={value}
                />
              </WeekDays>
            </FloatingBox>
          </CalendarContainer>
        )}
      </Content>
    </Container>
  );
};
