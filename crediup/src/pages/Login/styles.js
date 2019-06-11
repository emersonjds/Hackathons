import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 18;
  font-weight: bold;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${colors.blue[5]};
  align-items: center;
  justify-content: center;
`;

export const DataLogin = styled.View`
  height: 60%;
`;

export const LoginText = styled.Text`
  color: ${colors.blue[5]};
  margin: 15px 20px;
  font-size: 15;
`;

export const FormDataLogin = styled.View`
  height: 220;
  width: 100%;
  padding-top: 20px;
`;

export const LoginButtons = styled.View`
  height: 10%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #063d54;
`;

export const NewAccount = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: #fff;
`;

export const SignIn = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue[5]};
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;
