import styled from "styled-components";
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;
export const ContainerBoxLabel = styled.div`
padding-top: 0.5rem;
font-weight: bold;
font-size:1.2rem;
color:white;
padding-bottom:1rem;
`;

export const ColorBox = styled.div`
  background-color: ${(props) =>
    typeof props.customColor !== "undefined" ? props.customColor : "#034f84"};
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
