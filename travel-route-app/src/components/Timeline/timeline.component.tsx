/* eslint-disable @typescript-eslint/no-explicit-any */
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
  CitiesName,
} from "./timeline.styles";
type TimeLineProps = {
  data?: string[];
};

export const Timeline = ({ data }: TimeLineProps) => {
  const points = [0, 1];

  return (
    <Container>
      <PointsArea>
        {points.map((index) => (
          <React.Fragment key={Math.random()}>
            {index > 0 && <Line />}
            <Point>
              <Image
                src={index === points.length - 1 ? LocationIcon : Circle}
                alt="point-icon"
              />
              {data?.length !== 0 ? (
                <CitiesName>{data?.[index] || ""}</CitiesName>
              ) : null}
              {index > 0 && data ? <Tooltip /> : null}
            </Point>
          </React.Fragment>
        ))}
      </PointsArea>
      <AddNewPointButtonArea>
        {data === undefined && (
          <AddNewPointButton>
            <Image src={PlusIcon} alt="point-icon" />
          </AddNewPointButton>
        )}
      </AddNewPointButtonArea>
    </Container>
  );
};
