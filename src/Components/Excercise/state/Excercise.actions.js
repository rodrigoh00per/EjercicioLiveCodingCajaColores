import { ExcerciseTypes } from "./Excercise.types";

export const changeColorValue = (color, value) => ({
  type: ExcerciseTypes.CHANGE_COLOR_VALUE,
  payload: { color, value },
});
