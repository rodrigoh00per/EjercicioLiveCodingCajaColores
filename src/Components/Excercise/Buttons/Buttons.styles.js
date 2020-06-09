import styled from "styled-components";
const styles = {
  background: {
    increase: "#b5e7a0",
    decrease: "#c94c4c",
  },
  colorFont: {
    increase: "black",
    decrease: "white",
  },
};

export const ContainerButtons = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  justify-content: space-around;
`;

export const ContainerButtonsLabel = styled.label`
  padding-top: 0.5rem;
  font-weight: bold;
  font-size:1.2rem;
  color:white;
  width:100px;
`;
export const CustomButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${(props) =>
    typeof props.customColor !== "undefined"
      ? styles.background[props.customColor]
      : "#034f84"};
  color: ${(props) =>
    typeof props.customColor !== "undefined"
      ? styles.colorFont[props.customColor]
      : "black"};
`;
