import Circle from "../../assets/icons/circe-icon.svg";
import LocationIcon from "../../assets/icons/location-point-icon.svg";
import { Container, Line, Image } from "./timeline.styles";

export const Timeline = () => {
  const points = [0, 1];
  return (
    <Container>
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
    </Container>
  );
};
