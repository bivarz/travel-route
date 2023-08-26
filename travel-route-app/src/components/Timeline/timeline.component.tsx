import React from "react";
import Circle from "../../assets/icons/circe-icon.svg";
import LocationIcon from "../../assets/icons/location-point-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import { Tooltip } from "../Tooltip/tooltip.componet";
import {
  Container,
  Line,
  Image,
  AddNewPointButtonArea,
  AddNewPointButton,
  PointsArea,
  Point,
} from "./timeline.styles";

export const Timeline = () => {
  const points = [0, 1, 2];
  const cities = ["Paris", "Aix-en-Proence", "Montpellier"];

  return (
    <Container>
      <PointsArea>
        {points.map((index) => (
          <React.Fragment key={index}>
            {index > 0 && <Line key={index} />}
            <Point key={index}>
              <Image
                src={index === points.length - 1 ? LocationIcon : Circle}
                alt="point-icon"
              />
              {cities ? <p>{cities[index]}</p> : null}
              {index > 0 && <Tooltip />}
            </Point>
          </React.Fragment>
        ))}
      </PointsArea>
      <AddNewPointButtonArea>
        <AddNewPointButton>
          <Image src={PlusIcon} alt="point-icon" />
        </AddNewPointButton>
      </AddNewPointButtonArea>
    </Container>
  );
};
