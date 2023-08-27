import {
  Container,
  Middle,
  DataResultsArea,
  ButtonArea,
  Button,
} from "./search-results.styles";
import { Timeline } from "../../components/Timeline/timeline.component";

export const SearchResults = () => {
  const error = true;
  const cities = ["Paris", "Aix-en-Proence", "Montpellier"];
  const distance = 765.3;
  const passengers = 10;
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
          <Button>Back</Button>
        </ButtonArea>
      </Middle>
    </Container>
  );
};
