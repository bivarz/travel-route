import React from "react";
import {
  ClearInputButton,
  Container,
  Content,
  ErrorMsg,
  Input,
  InputFieldArea,
  Label,
  LabelArea,
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
  id,
}: CustomInputTypes) => {
  return (
    <React.Fragment>
      {type === "text" && (
        <Container>
          <Content className={className}>
            <Label htmlFor="date">{label}</Label>
            <InputFieldArea>
              <Input
                autoComplete="off"
                type="text"
                value={value}
                onChange={onChange}
                $fullwidth={$fullwidth}
                onBlur={onBlur}
                onFocus={onFocus}
                className={errorMsg ? "error" : "default"}
                id={`${id}`}
                aria-labelledby={"date"}
                placeholder={
                  id === "1"
                    ? "Enter the city of origin."
                    : "Enter the city of destination."
                }
              ></Input>
              {showClearButton && (
                <ClearInputButton role="clear" type="button" onClick={onClear}>
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
          <LabelArea>
            {errorMsg ? (
              <ErrorMsg>{errorMsg}</ErrorMsg>
            ) : (
              <Label>{label}</Label>
            )}
          </LabelArea>
          <Input
            type="text"
            value={value}
            onChange={onChange}
            $fullwidth={$fullwidth}
            className={errorMsg ? "error" : "date"}
            onBlur={onBlur}
            readOnly={readOnly}
            aria-labelledby="date"
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
