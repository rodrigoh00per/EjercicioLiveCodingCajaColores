import React, { useState } from "react";

import Buttons from "./Buttons/Buttons.component";
import Box from "./Box/Box.component";

import {
  ContainerExcercise,ContainerContent,TitleExcercise,
} from "./Excercise.styles";

const Excercise = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  

  const changeColorValue = (color, op) => {
    if (color === "red") {
      let value = op === "increase" ? red + 5 : red - 5;
      if (value <= 255 && value >= 0) setRed(value);
    } else if (color === "green") {
      let value = op === "increase" ? green + 5 : green - 5;
      if (value < 255 && value >= 0) setGreen(value);
    } else {
      let value = op === "increase" ? blue + 5 : blue - 5;
      if (value < 255 && value >= 0) setBlue(value);
    }

  };

  return (
    <ContainerExcercise>
      <ContainerContent>
        <TitleExcercise>Ejercicio caja de colores</TitleExcercise>
        <Buttons color="red" changeColorValue={changeColorValue} />
        <Buttons color="blue" changeColorValue={changeColorValue} />
        <Buttons color="green" changeColorValue={changeColorValue} />
        <Box red={red} blue={blue} green={green} />
      </ContainerContent>
    </ContainerExcercise>
  );
};
export default Excercise;
