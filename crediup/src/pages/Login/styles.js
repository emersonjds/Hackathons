import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${colors.default_blue};
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
  font-size: 18;
  font-weight: bold;
`;
