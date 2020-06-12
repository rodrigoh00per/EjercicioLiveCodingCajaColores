import React, { useReducer } from "react";
import Buttons from "./Buttons/Buttons.component";
import Box from "./Box/Box.component";
import reducer, { INITIAL_VALUE } from "./state/Excercise.reducer";
import {
  ContainerExcercise,
  ContainerContent,
  TitleExcercise,
} from "./Excercise.styles";
import { changeColorValue } from "./state/Excercise.actions";

const Excercise = () => {
  const [colors, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const changeValue = (color, op) =>
    dispatch(
      changeColorValue(
        color,
        op === "increase" ? colors[color] + 5 : colors[color] - 5
      )
    );

  return (
    <ContainerExcercise>
      <ContainerContent>
        <TitleExcercise>Ejercicio caja de colores</TitleExcercise>
        <Buttons color="red" changeColorValue={changeValue} />
        <Buttons color="blue" changeColorValue={changeValue} />
        <Buttons color="green" changeColorValue={changeValue} />
        <Box {...colors} />
      </ContainerContent>
    </ContainerExcercise>
  );
};
export default Excercise;
