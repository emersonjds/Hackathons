import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  align-self: stretch;
`;

export const ContainerBanner = styled.View`
  height: 250px;
  width: ${metrics.screenWidth};
  background-color: pink;
`;

export const ContainerMiniBanner = styled.TouchableOpacity`
  height: 150;
  background-color: orange;
  margin: 0 5px;
`;

export const ContainerPhoto = styled.View`
  width: ${metrics.screenWidth};
  justify-content: space-around;
  /* flex-wrap: wrap; */
`;

export const ContainerPhotos = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Photo = styled.Image`
  width: 49%;
  margin-top: 2px;
  height: 180;
`;
