import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  /* background-color: red; */
  padding: 20px;
`;

export const BadgesContainer = styled.ScrollView`
  padding: 0px;
`;

export const BadgeBox = styled.View`
  height: 80;
  width: 100%;
  /* background-color: orange; */
  flex-direction: row;
  border-width: 1;
  border-color: #cecece;
  margin-bottom: 10px;
`;

export const IconBadge = styled.View`
  width: 25%;
  /* background-color: green; */
  align-items: center;
  justify-content: center;
`;

export const ContentBadge = styled.View`
  width: 75%;
  /* background-color: gray; */
  justify-content: center;
  padding: 0 5px;
`;
