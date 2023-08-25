import Circle from "../../assets/icons/circe-icon.svg";
import LocationIcon from "../../assets/icons/location-point-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import {
  Container,
  Line,
  Image,
  AddNewPointButtonArea,
  AddNewPointButton,
  PointsArea,
} from "./timeline.styles";

export const Timeline = () => {
  const points = [0, 1];
  return (
    <Container>
      <PointsArea>
        {points.map((index) => (
          <>
            {index > 0 && <Line />}
            <Image
              key={index}
              src={index === points.length - 1 ? LocationIcon : Circle}
              alt="point-icon"
            />
          </>
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
