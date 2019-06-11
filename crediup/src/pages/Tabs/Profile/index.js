import React, { Component } from 'react';
import {
  Text, Image, View, Alert, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  WhiteContainer,
  BlueContainer,
  UserContainer,
  ContainerPhoto,
  ContainerDataAccount,
  TotalLimtit,
  CurrentLimit,
  Separator,
  ContainerPoints,
  TextArea,
} from './styles';

import man from '../../../assets/img/man.png';
import api from '../../../services/api';

const options = {
  title: 'Enviar documento para analise',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export class Profile extends Component {
  static navigationOptions = {
    title: 'PERFIL',
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      avatarSource: '',
      limiteTotal: 1600,
    };
  }

  handleImagePicker = async () => {
    const url = 'http://hacka-febraban3-dev.us-west-2.elasticbeanstalk.com/upload-doc';

    ImagePicker.showImagePicker(options, async (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        const sourceBase64 = { uri: `data:image/jpeg;base64,${response.data}` };

        this.setState(
          {
            avatarSource: source,
            avatarSourceBase64: sourceBase64,
          },
          async () => {
            // Prepare FormData
            const formData = new FormData();

            formData.append('userId', 'teste123');

            formData.append('teste', {
              uri: this.state.avatarSourceBase64.uri,
              name: 'teste',
              type: 'image/jpg',
            });

            // const rawResponse = await fetch(url, {
            //   method: 'POST',
            //   body: formData,
            // });

            // const content = await rawResponse.json();

            // console.log(content);

            setTimeout(() => {
              Alert.alert('Imagem enviada para analise de Score!');

              setTimeout(() => {
                this.setState({
                  limiteTotal: 2000,
                }),
                () => {
                  Alert.alert('Aumento de credito concedido com sucesso!');
                };
              }, 3500);
            }, 3000);
          },
        );
      }
    });
  };

  render() {
    return (
      <Container>
        <WhiteContainer />
        <BlueContainer>
          <UserContainer>
            <ContainerPhoto>
              <Image source={man} resizeMode="cover" />
            </ContainerPhoto>
            <Separator />
            <ContainerDataAccount>
              <TotalLimtit>
                <Text style={{ color: '#063d54' }}>Seu Limite Total</Text>
                <Text style={{ fontSize: 24, color: '#063d54', fontWeight: 'bold' }}>
                  R$
                  {' '}
                  {this.state.limiteTotal}
                </Text>
              </TotalLimtit>
              <CurrentLimit>
                <Text style={{ color: '#063d54' }}>Seu Limite</Text>
                <Text style={{ fontSize: 24, color: '#063d54', fontWeight: 'bold' }}>R$ 800</Text>
              </CurrentLimit>
            </ContainerDataAccount>
          </UserContainer>

          <ContainerPoints>
            <Image
              source={this.state.avatarSource}
              style={{
                width: 100,
                height: 100,
                marginHorizontal: 20,
                marginBottom: 20,
              }}
            />
            <TouchableOpacity
              onPress={this.handleImagePicker}
              style={{
                backgroundColor: '#063d54',
                marginHorizontal: 20,
                height: 50,
                flexDirection: 'row',
                width: '90%',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                alignSelf: 'flex-end',
                zIndex: 1,
              }}
            >
              <Text style={{ color: '#FFF' }}>ENVIAR ARQUIVOS</Text>
              <Icon size={22} name="upload" color="#FFF" style={{ marginTop: 5 }} />
            </TouchableOpacity>
            <Text
              style={{
                color: '#063d54',
                alignSelf: 'center',
                marginTop: 10,
                fontSize: 15,
                marginHorizontal: 20,
              }}
            >
              Atualize com frequencia seus arquivos (nota fiscal com cpf, extrato bancario)
              lembre-se cada vez que voce atualiza seu limite pode aumentar =D
            </Text>
          </ContainerPoints>
        </BlueContainer>
      </Container>
    );
  }
}

export default Profile;
