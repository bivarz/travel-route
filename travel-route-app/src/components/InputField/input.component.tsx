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
              ></Input>
              {showClearButton && (
                <ClearInputButton onClick={onClear}>X</ClearInputButton>
              )}
            </InputFieldArea>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </Content>
        </Container>
      )}
      {type === "date-field" && (
        <React.Fragment>
          <Label>{label}</Label>
          <Input
            type="text"
            value={value}
            onChange={onChange}
            $fullwidth={$fullwidth}
            className="date"
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
