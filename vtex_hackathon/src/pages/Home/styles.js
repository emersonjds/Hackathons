import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  /* width: ${metrics.screenWidth}; */
  /* background-color: orange; */
  /* flex: 1; */
  align-self: stretch;
`;

export const ContainerBanner = styled.View`
  height: 250px;
  width: ${metrics.screenWidth};
  background-color: pink;
`;

export const ContainerMiniBanner = styled.View`
  height: 150;
  background-color: orange;
  margin: 0 5px;
`;

export const ContainerPhoto = styled.View`
  width: ${metrics.screenWidth};
  /* background: orange; */
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
