import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import {
  Container,
  BadgesContainer,
  BadgeBox,
  IconBadge,
  ContentBadge
} from "./styles";
import icon1 from "../../../assets/imgs/1.png";
import icon2 from "../../../assets/imgs/2.png";
import icon3 from "../../../assets/imgs/3.png";

export class Badges extends Component {
  static navigationOptions = {
    title: "MINHAS CONQUISTAS"
  };
  render() {
    return (
      <Container>
        <BadgesContainer>
          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon1} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon2} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>

          <BadgeBox>
            <IconBadge>
              <Image style={{ width: 72, height: 72 }} source={icon3} />
            </IconBadge>
            <ContentBadge>
              <Text>Doador do Ano</Text>
              <Text>
                Minim sit voluptate quis labore laboris nisi esse. Cupidatat
              </Text>
            </ContentBadge>
          </BadgeBox>
        </BadgesContainer>
      </Container>
    );
  }
}

export default Badges;
