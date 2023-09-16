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
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Results: React.FC = () => {
  const { listOfFields, totalDistance } = useContext(GlobalContext);

  const navigate = useNavigate();
  const [errorView, setErrorView] = useState(false);
  const passengers = 4;

  useEffect(() => {
    if (listOfFields[0].value === "") {
      setErrorView(true);
    }
  }, [listOfFields]);

  return (
    <Container>
      <Content>
        <Middle>
          {!errorView && <Timeline data={listOfFields} />}
          <DataResultsArea className={errorView ? "error" : ""}>
            {errorView ? (
              <span>Oops! Something went wrong!</span>
            ) : (
              <>
                <p>
                  <span>{totalDistance} km </span>is total distance
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
