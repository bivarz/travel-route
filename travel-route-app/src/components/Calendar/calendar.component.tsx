import {
  CalendarContainer,
  Container,
  Content,
  Days,
  FloatingBox,
  InputContainer,
  Navigation,
  NavigationButton,
  SelectDateArea,
  SelectMonth,
  SelectYear,
  StyledCalendar /*, ErrorMsg , Title*/,
  WeekDays,
} from "./calendar.styles";
import { CustomInput } from "../InputField/index";
import "react-calendar/dist/Calendar.css";
import ArrowLeft from "../../assets/icons/arrow-left-icon.svg";
import ArrowRight from "../../assets/icons/arrow-right-icon.svg";
import { useState, useEffect, useRef } from "react";
import { abbrDaysOfWeek, abbrMonthsOfYear } from "../../utils/index";
import { Select } from "../Select";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarCustom = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  // const [selectedMonth, setSelectedMonth] = useState("");
  const [showMonthList, setShowMonthList] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const dateNow = new Date(Date.now()).toLocaleString().split(",")[0];

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
            value={`${dateNow}`}
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
                  <SelectMonth onClick={() => setShowMonthList(true)}>
                    JAN
                  </SelectMonth>
                  {showMonthList && <Select data={abbrMonthsOfYear} />}
                  <SelectYear>2023</SelectYear>
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
                  onChange={onChange}
                  value={value}
                />
              </WeekDays>
            </FloatingBox>
          </CalendarContainer>
        )}
      </Content>
      {/* <ErrorMsg>Select passengers</ErrorMsg> */}
    </Container>
  );
};
