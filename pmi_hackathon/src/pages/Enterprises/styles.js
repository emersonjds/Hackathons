import styled from "styled-components/native";

export const Container = styled.View`
  background: orange;
  flex: 1;
  padding: 20px 10px;
  position: relative;
`;

export const EnterpriseContainer = styled.View`
  height: 80;
  background: white;
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const EnterpriseLogoContainer = styled.View`
  height: 100%;
  width: 20%;
`;

export const EntrepriseInformations = styled.View`
  width: 60%;
  background: pink;
`;

export const ContainerButtons = styled.View`
  height: 100%;
  width: 20%;
  background: blue;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50;
  width: 50;
  position: absolute;
  bottom: 50;
  right: 20;
  background: #cecece;
  border-radius: 100;
  align-items: center;
  justify-content: center;
`;
