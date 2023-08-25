import React from "react";
import { Form } from "../../components/Form";

import { Container } from "./home.styles";
import { Timeline } from "../../components/Timeline/timeline.component";

const Home: React.FC = () => {
  return (
    <Container>
      <Timeline />
      <Form />
    </Container>
  );
};

export default Home;
