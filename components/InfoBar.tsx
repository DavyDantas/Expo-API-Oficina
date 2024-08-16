import { Character } from '../types/character';
import { styled } from 'styled-components/native';

interface InfoBarProps {
    character: Character;
}

export default function InfoBar({character}: InfoBarProps) {
    return (
        <Container>
            <Content>
                <Image source={{ uri: character.image }} />
                <Name>{character.name}</Name>
            </Content>
        </Container>
    );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const Content = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 15px;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    `;

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const Name = styled.Text`
  color: #1d1d1d;
  font-size: 16px;
  margin-left: 10px;
`;