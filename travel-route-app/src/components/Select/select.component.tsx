import { Container, FloatingBox } from "./select.styles";
import { SelectProps } from "./select.types";

export const Select = ({ data, handleClick }: SelectProps) => {
  return (
    <Container>
      <FloatingBox>
        {data.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              typeof item === "object"
                ? handleClick(item?.label)
                : handleClick(item);
            }}
          >
            {typeof item === "object" ? item.label : item}
          </p>
        ))}
      </FloatingBox>
    </Container>
  );
  handleClick;
};
