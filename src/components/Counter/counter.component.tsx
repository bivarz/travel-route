import { useContext, useEffect, useState } from "react";

import {
  Button,
  Container,
  Content,
  ErrorArea,
  ErrorMsg,
  Title,
} from "./counter.styles";
import { GlobalContext } from "../../context/GlobalContext";

export const Counter = () => {
  const { setPassengers } = useContext(GlobalContext);
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

  useEffect(() => {
    setPassengers(count);
  }, [count, setPassengers]);

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
