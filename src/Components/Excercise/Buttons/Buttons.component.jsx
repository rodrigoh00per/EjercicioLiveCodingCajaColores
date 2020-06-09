import React from "react";
import {
  ContainerButtons,
  CustomButton,
  ContainerButtonsLabel,
} from "./Buttons.styles";
const Buttons = ({ color, changeColorValue }) => (
  <ContainerButtons>
    <ContainerButtonsLabel>{color.toUpperCase()}</ContainerButtonsLabel>
    <CustomButton
      customColor="increase"
      onClick={() => changeColorValue(color, "increase")}
    >
      +
    </CustomButton>
    <CustomButton
      customColor="decrease"
      onClick={() => changeColorValue(color, "decrease")}
    >
      -
    </CustomButton>
  </ContainerButtons>
);
export default Buttons;
