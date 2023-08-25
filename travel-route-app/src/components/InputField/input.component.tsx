import {
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
  key,
  fullWidth = true,
  type = "text",
}: CustomInputTypes) => {
  return (
    <>
      {type === "text" && (
        <Container>
          <Content className={className}>
            <Label>{label}</Label>
            <InputFieldArea>
              <Input
                type="text"
                value={value}
                onChange={onChange}
                key={key}
                fullWidth={fullWidth}
              />
            </InputFieldArea>
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </Content>
        </Container>
      )}
      {type === "date-field" && (
        <>
          <Label>{label}</Label>
          <Input
            type="date"
            value={value}
            onChange={onChange}
            key={key}
            fullWidth={fullWidth}
          />
        </>
      )}
    </>
  );
};
