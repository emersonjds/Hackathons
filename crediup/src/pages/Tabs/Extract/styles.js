import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const WhiteContainer = styled.View`
  height: 90px;
  width: ${metrics.screenWidth}px;
  z-index: -1;
`;

export const BlueContainer = styled.View`
  height: 100%;
  width: ${metrics.screenWidth};
  background-color: ${colors.blue[5]};
  z-index: -1;
`;

export const UserContainer = styled.View`
  flex: 1;
  width: 90%;
  /* background-color: pink; */
  margin: 0px 20px;
  position: absolute;
  z-index: 1;
  padding: 2px;
  top: -50;
`;

export const ContainerPhoto = styled.View`
  height: 50%;
  width: 100%;
  /* background-color: green; */
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ContainerDataAccount = styled.View`
  height: 50%;
  width: 100%;
  /* background-color: gray; */
  padding: 2px;
  flex-direction: row;
  margin-top: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  margin-bottom: 10px;
`;

export const TotalLimtit = styled.View`
  width: 50%;
  /* background-color: yellow; */
  height: 90%;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: white;
`;

export const CurrentLimit = styled.View`
  width: 50%;
  /* background-color: white; */
  height: 85%;
  align-items: center;
  justify-content: center;
`;

export const Separator = styled.View`
  height: 5%;
  width: 100%;
`;

export const BoxBuy = styled.View`
  height: 40;
  width: 100%;
  /* background-color: yellow; */
  padding: 2px;
  flex-direction: row;
  margin-bottom: 10px;
  /* border-width: 1px;
  border-color: #fff; */
  /* border-bottom-width: 1px; */
  border-bottom-color: #fff;
`;

export const ProductDetails = styled.View`
  width: 70%;
  height: 100%;
  /* background-color: orange; */
  padding: 10px;
`;

export const PriceProduct = styled.View`
  width: 30%;
  height: 100%;
  /* background-color: brown; */
  padding: 10px;
  align-items: flex-end;
`;
