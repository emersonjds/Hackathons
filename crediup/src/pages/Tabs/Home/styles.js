import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  /* background-color: blue; */
  padding: 20px;
`;

export const CardArea = styled.View`
  height: 200px;
  /* background-color: pink; */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ContainerUserData = styled.View`
  height: 80;
  width: 100%;
  /* background-color: yellow; */
  flex-direction: row;
  margin-bottom: ${metrics.basePadding}px;
  margin-top: ${metrics.basePadding}px;
`;
export const LeftArea = styled.View`
  height: 100%;
  width: 60%;
  /* background-color: orange; */
  padding: 15px;
`;

export const RightArea = styled.View`
  height: 100%;
  width: 40%;
  /* background-color: lightgray; */
  align-items: center;
  justify-content: center;
`;

export const GenerateCard = styled.TouchableOpacity`
  height: 80%;
  width: 80%;
  align-self: center;
  border-width: 2px;
  border-color: #063d54;
  border-radius: ${metrics.baseRadius};
  align-items: center;
  justify-content: center;
`;

export const ContainerOptions = styled.View`
  height: 25%;
  width: 100%;
  /* background-color: yellow; */
  margin-bottom: ${metrics.basePadding}px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsActions = styled.TouchableOpacity`
  height: 60;
  width: 100%;
  border-width: 2px;
  border-color: #063d54;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue[5]};
  margin-bottom: 15px;
  border-radius: 40px;
`;
