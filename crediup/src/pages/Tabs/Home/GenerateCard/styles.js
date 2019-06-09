import styled from 'styled-components/native';
import { colors, metrics } from '../../../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  color: ${colors.blue[5]};
  font-weight: bold;
  margin-top: 30;
`;

export const Card = styled.View`
  height: 220;
  background-color: ${colors.blue[7]};
  width: 100%;
  margin: 0px 20px;
  margin-top: 20px;
  border-radius: 15px;
  position: relative;
  padding: 10px;
`;

export const LineOne = styled.View`
  height: 40;
  /* width: 100%; */
  /* background-color: yellow; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.View`
  width: 70%;
`;

export const TextGold = styled.View`
  width: 30%;
`;

export const SecondLine = styled.View`
  height: 40;
  width: 80%;
  /* background-color: orange; */
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Thirdline = styled.View`
  height: 40;
  width: 90%;
  /* background-color: lightgreen; */
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FourLine = styled.View`
  height: 40;
  width: 75%;
  /* background-color: pink; */
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
  padding: 0px 10px;
`;

export const CardNumber = styled.Text`
  color: white;
  font-size: 20;
`;

export const IconeMaster = styled.View`
  width: 30%;
`;

export const GenerateNewNumber = styled.TouchableOpacity`
  height: 50;
  width: 130;
  border-width: 2px;
  border-color: ${colors.blue[5]};
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ContainerAlert = styled.View`
  width: 100%;
  height: 80;
  background-color: ${colors.blue[5]};
  margin-top: 70px;
  padding: 10px;
`;
