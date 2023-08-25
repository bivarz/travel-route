import { Container, Content /*, ErrorMsg , Title*/ } from "./calendar.styles";
import { CustomInput } from "../InputField/index";

export const Calendar = () => {
  return (
    <Container>
      <Content>
        <CustomInput fullWidth={false} label="Date" type="date-field" />
      </Content>
      {/* <ErrorMsg>Select passengers</ErrorMsg> */}
    </Container>
  );
};
