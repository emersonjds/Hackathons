import styled from "styled-components";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  background-color: red;
`;

export const ContainerProduct = styled.View`
  height: 250;
`;

export const ContainerBanner = styled.View`
  height: 250px;
  width: ${metrics.screenWidth};
  /* background-color: pink; */
`;

export const Line = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #000;
  margin-bottom: 10px;
`;

export const ContainerDetails = styled.View`
  width: ${metrics.screenWidth};
  height: 330;
  /* background-color: pink; */
  padding: 10px 20px;
`;

export const Titulo = styled.Text`
  font-size: 16;
`;

export const ContainerButtons = styled.View`
  height: 45;
  /* background-color: orange; */
  flex-direction: row;
  margin-top: 10px;
  padding-top: 10px;
  justify-content: space-around;
`;

export const ButtonsActions = styled.TouchableOpacity`
  height: 30;
  width: 120;
  background-color: #cecece;
  align-items: center;
  justify-content: center;
  border-radius: 15;
`;

export const ContainerInformation = styled.View``;

export const ButtonPayment = styled.TouchableOpacity`
  height: 50;
  width: 80%;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
  border-radius: 10;
  margin-top: 20px;
`;
