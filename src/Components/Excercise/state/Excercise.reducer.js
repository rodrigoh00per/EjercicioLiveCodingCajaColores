import { ExcerciseTypes } from "./Excercise.types";

export const INITIAL_VALUE = { red: 0, green: 0, blue: 0 };

export default (state, action) => {
  switch (action.type) {
    case ExcerciseTypes.CHANGE_COLOR_VALUE:
      return action.payload.value <= 255 && action.payload.value >= 0
        ? { ...state, [action.payload.color]: action.payload.value }
        : state;
    default:
      return state;
  }
};
