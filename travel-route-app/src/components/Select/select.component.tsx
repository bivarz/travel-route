import { Container, FloatingBox } from "./select.styles";
import { SelectProps } from "./select.types";

export const Select = ({ data }: SelectProps) => {
  return (
    <Container>
      <FloatingBox>
        {data.map((item, index) => (
          <p key={index}>{typeof item === "object" ? item.label : item}</p>
        ))}
      </FloatingBox>
    </Container>
  );
};
