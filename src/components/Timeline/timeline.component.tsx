/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";
import Circle from "../../assets/icons/circe-icon.svg";
import LocationIcon from "../../assets/icons/location-point-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import Tooltip from "../Tooltip/tooltip.componet";
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
import useAdditionalStops from "../hooks/useAdditionalStops";
import { GlobalContext } from "../../context/GlobalContext";
import { AdditionalStop } from "../hooks/hooks.types";
import { distanceBetweenPoints } from "../../utils/distanceBetweenPoints";

type TimeLineProps = {
  data?: AdditionalStop[];
};

export const Timeline = ({ data }: TimeLineProps) => {
  const { listOfFields } = useContext(GlobalContext);
  const { addStop } = useAdditionalStops();
  const points = [...listOfFields];

  const reducedArray = (array: AdditionalStop[]) => {
    const formattedPoints: object[] = [];

    for (let i = 0; i < array.length; i++) {
      const segment = array[i];
      const formattedPoint = { la: `${segment.la}`, lo: `${segment.lo}` };
      formattedPoints.push(formattedPoint);
    }
    return formattedPoints;
  };
  reducedArray(points);

  return (
    <Container>
      <PointsArea>
        {points.map((_, index) => (
          <React.Fragment key={Math.random()}>
            {index > 0 && <Line />}
            <Point>
              <Image
                src={index === points.length - 1 ? LocationIcon : Circle}
                alt="point-icon"
              />
              {data?.length !== 0 ? (
                <CitiesName>{data?.[index].value}</CitiesName>
              ) : null}
              {index > 0 && data ? (
                <Tooltip
                  data={`${distanceBetweenPoints(
                    points[index - 1],
                    points[index]
                  )?.toFixed(2)}`}
                />
              ) : null}
            </Point>
          </React.Fragment>
        ))}
      </PointsArea>

      <AddNewPointButtonArea>
        {!data && listOfFields.length < 5 && (
          <AddNewPointButton onClick={() => addStop()}>
            <Image src={PlusIcon} alt="point-icon" />
          </AddNewPointButton>
        )}
      </AddNewPointButtonArea>
    </Container>
  );
};
