import React, { Fragment } from "react";
import "./App.css";
import Excercise from "./Excercise/Excercise.component";
import { GlobalStyle } from "./App.styles";
const App = () => (
  <Fragment>
    <GlobalStyle />
    <Excercise/>
  </Fragment>
);

export default App;
