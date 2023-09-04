import React from "react";
import {
  ClearInputButton,
  Container,
  Content,
  ErrorMsg,
  Input,
  InputFieldArea,
  Label,
} from "./input.styles";
import { CustomInputTypes } from "./input.types";
import CancelXIcon from "../../assets/icons/x-icon.svg";

export const CustomInput = ({
  label,
  errorMsg,
  value,
  onChange,
  className,
  $fullwidth = true,
  type = "text",
  showClearButton,
  onClear,
  onBlur,
  onFocus,
  readOnly,
}: CustomInputTypes) => {
  return (
    <React.Fragment>
      {type === "text" && (
        <Container>
          <Content className={className}>
            <Label>{label}</Label>
            <InputFieldArea>
              <Input
                type="text"
                value={value}
                onChange={onChange}
                $fullwidth={$fullwidth}
                onBlur={onBlur}
                onFocus={onFocus}
              ></Input>
              {showClearButton && (
                <ClearInputButton onClick={onClear}>
                  <img src={CancelXIcon} alt="" />
                </ClearInputButton>
              )}
            </InputFieldArea>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </Content>
        </Container>
      )}
      {type === "date-field" && (
        <React.Fragment>
          <Label>{label}</Label>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Input
            type="text"
            value={value}
            onChange={onChange}
            $fullwidth={$fullwidth}
            className="date"
            onBlur={onBlur}
            readOnly={readOnly}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
