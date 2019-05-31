import styled from "styled-components/native";
import { metrics, colors } from "../../styles";

export const Container = styled.View`
  flex: 1;
  /* background-color: tomato; */
  padding: 20px;
`;

export const Order = styled.View`
  height: 180;
  width: 100%;
  background-color: ${colors.lighter};
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const OrderComplete = styled.View`
  height: 180;
  width: 100%;
  background-color: light-green;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
`;

export const OrderId = styled.View`
  height: 40;
  background-color: #cecece;
  width: 100%;
  justify-content: center;
  border-radius: 10;
  padding-left: 10px;
`;

export const TextId = styled.Text`
  font-size: 18;
  font-weight: bold;
`;

export const DataLine = styled.View`
  height: 22;
  width: 100%;
  padding-left: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
