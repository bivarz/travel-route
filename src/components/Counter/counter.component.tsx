import { useState } from "react";

import {
  Button,
  Container,
  Content,
  ErrorArea,
  ErrorMsg,
  Title,
} from "./counter.styles";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const error = false;

  const handleIncrement = () => {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container>
      <Title>Passengers</Title>
      <Content $hasError={error}>
        <Button onClick={handleDecrement} disabled={count === 0}>
          -
        </Button>
        <span>{count}</span>
        <Button disabled={count === 10} onClick={handleIncrement}>
          +
        </Button>
      </Content>
      <ErrorArea>{error && <ErrorMsg>Select passengers</ErrorMsg>}</ErrorArea>
    </Container>
  );
};
