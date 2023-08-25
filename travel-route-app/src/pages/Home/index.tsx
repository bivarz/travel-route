import React from "react";
import { Form } from "../../components/Form";

import { Container, Middle, Right } from "./home.styles";
import { Timeline } from "../../components/Timeline/timeline.component";
import { Counter } from "../../components/Counter/counter.component";
import { Calendar } from "../../components/Calendar/calendar.component";

const Home: React.FC = () => {
  return (
    <Container>
      <Middle>
        <Timeline />
        <Form />
      </Middle>
      <Right>
        <Counter />
        <Calendar />
      </Right>
    </Container>
  );
};

export default Home;
