import React from "react";
import { ContainerBox, ColorBox, ContainerBoxLabel } from "./Box.styles";

const Box = ({ red = 0, blue = 0, green = 0 }) => (
  <ContainerBox>
    <ContainerBoxLabel>
      rgb({red},{blue},{green})
    </ContainerBoxLabel>
    <ColorBox customColor={`rgb(${red},${blue},${green})`}></ColorBox>
  </ContainerBox>
);
export default Box;
