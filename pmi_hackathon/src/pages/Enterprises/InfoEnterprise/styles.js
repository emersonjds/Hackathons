import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const BadgeButton = styled.TouchableOpacity`
  height: 50;
  width: 100%;
  background-color: blue;
  align-items: center;
  justify-content: center;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

export const BadgeBox = styled.View`
  height: 80;
  width: 100%;
  /* background-color: pink; */
  flex-direction: row;
  border-width: 1px;
  border-color: #cecece;
  border-radius: 10px;
  margin-top: 5px;
`;

export const LogoArea = styled.View`
  width: 25%;
  /* background-color: orange; */
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const InformationContent = styled.View`
  width: 75%;
  height: 100%;
  /* background-color: yellow; */
  padding-left: 5px;
  align-items: center;
  justify-content: center;
`;
