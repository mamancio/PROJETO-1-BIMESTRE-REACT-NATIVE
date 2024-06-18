import React, {Component} from 'react';
import {Avatarperfil, Container, Status} from './style';
import {Text} from 'react-native-elements';

export default class Personagem extends Component {
  state = {
    character: {},
  };

  async componentDidMount() {
    const {route} = this.props;
    const character = route.params.character;

    this.setState({character});
  }

  render() {
    const character = this.state.character;

    return (
      <Container>
        <Avatarperfil source={{uri: character.image}} />
        <Status>
          Status:
          <Text>{character.status}</Text>
        </Status>
        {character.species && (
          <Status>
            Species:
            <Text>{character.species}</Text>
          </Status>
          
                )}
        {character.type && (
          <Status>
            Type:
            <Text>{character.type}</Text>
          </Status>
        )}
        {character.gender && (
          <Status>
            Gender:
            <Text>{character.gender}</Text>
          </Status>
        )}
        {character.origin && (
          <Status>
            Origin:
            <Text>{character.origin.name}</Text>
          </Status>
        )}
        {character.location && (
          <Status>
            Location:
            <Text>{character.location.name}</Text>
            <Text>{character.episode}</Text>
          </Status>
        )}
      </Container>
    );
  }
}
