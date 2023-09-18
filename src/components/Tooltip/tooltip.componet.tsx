import React from "react";

import { Container, Typography } from "./tooltip.styles";
interface TooltipProps {
  data: string;
}

const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  return (
    <Container>
      <Typography>{data} km</Typography>
    </Container>
  );
};

export default Tooltip;
