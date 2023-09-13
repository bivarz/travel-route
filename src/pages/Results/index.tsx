import {
  Container,
  Middle,
  DataResultsArea,
  ButtonArea,
  Button,
  Content,
} from "./search-results.styles";
import { Timeline } from "../../components/Timeline/timeline.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Results: React.FC = () => {
  const { listOfFields } = useContext(GlobalContext);
  const error = true;
  console.log(listOfFields);
  const cities = ["Paris", "Montpellier"];
  const distance = 463.3;
  const passengers = 4;

  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Middle>
          {!error && <Timeline data={cities} />}
          <DataResultsArea className={error ? "error" : ""}>
            {error ? (
              <span>Oops! Something went wrong!</span>
            ) : (
              <>
                <p>
                  <span>{distance} km </span>is total distance
                </p>
                <p>
                  <span>{passengers} </span>passengers
                </p>
                <span>Feb 14, 2023</span>
              </>
            )}
          </DataResultsArea>
          <ButtonArea>
            <Button onClick={() => navigate("/travel-route/")}>Back</Button>
          </ButtonArea>
        </Middle>
      </Content>
    </Container>
  );
};

export default Results;
