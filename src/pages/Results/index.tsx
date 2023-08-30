import {
  Container,
  Middle,
  DataResultsArea,
  ButtonArea,
  Button,
} from "./search-results.styles";
import { Timeline } from "../../components/Timeline/timeline.component";
import { useNavigate } from "react-router-dom";

const Results: React.FC = () => {
  const error = false;
  const cities = ["Paris", "Montpellier"];
  const distance = 463.3;
  const passengers = 4;

  const navigate = useNavigate();
  return (
    <Container>
      <Middle>
        {!error && <Timeline data={cities} />}
        <DataResultsArea error={error}>
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
          <Button onClick={() => navigate("/")}>Back</Button>
        </ButtonArea>
      </Middle>
    </Container>
  );
};

export default Results;