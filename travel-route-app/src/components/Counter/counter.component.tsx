import { useState } from "react";

import { Button, Container, Content, ErrorMsg, Title } from "./counter.styles";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const error = false;

  const handleIncrement = () => {
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
        <Button onClick={handleIncrement}>+</Button>
      </Content>
      <ErrorMsg>Select passengers</ErrorMsg>
    </Container>
  );
};
