import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  /* background-color: orange; */
  padding: 20px;
`;

export const Titulo = styled.Text`
  font-size: 18;
  font-weight: bold;
`;

export const ContainerProduct = styled.View`
  height: 70;
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  border-width: 1px;
  border-color: #cecece;
`;

export const FotoProduto = styled.View`
  width: 30%;
  /* background-color: pink; */
  height: 100%;
  padding: 2px;
`;

export const Description = styled.View`
  width: 50%;
  /* background-color: blue; */
  height: 100%;
  padding: 10px;
  justify-content: center;
`;

export const IconHeart = styled.View`
  width: 20%;
  /* background-color: yellow; */
  height: 100%;
  justify-content: center;
  align-items: center;
`;
