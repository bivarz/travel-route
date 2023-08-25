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
}: CustomInputTypes) => {
  return (
    <Container>
      <Content className={className}>
        <Label>{label}</Label>
        <InputFieldArea>
          <Input type="text" value={value} onChange={onChange} key={key} />
        </InputFieldArea>
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </Content>
    </Container>
  );
};
