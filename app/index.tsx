import { Character } from '@/types/character';
import styled from 'styled-components/native';
import { FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { api } from '../services/api';
import { useState, useEffect } from 'react';
import InforBar from '../components/InfoBar';

export default function Index() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    loadCharacters(pages);
  }, [pages]);

  const loadCharacters = (page: number) => {
    api.get(`/?page=${page}`).then((response) => {
      setCharacters(prevCharacters => [
        ...prevCharacters,
        ...response.data.results.filter(
          (newCharacter: Character) => !prevCharacters.some(character => character.id === newCharacter.id)
        )
      ]);
    });
  };

  const loadMoreCharacters = () => {
    setPages(prevPage => prevPage + 1);
  };
  return  (
    <Container>
      <StatusBar style="dark" />

        <Title>Rick and Morty</Title>

        <FlatList
          data={characters}
          keyExtractor={(character) => character.id.toString()}
          onEndReached={loadMoreCharacters}
          onEndReachedThreshold={0.1}
          renderItem={({ item: character }) => (
            <InforBar character={character} />
          )}
        />
    </Container>
  )
}


//styled-components para a pagina index
export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121015;
  margin-top: 35px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #e1e1e6;
  font-weight: bold;
`;