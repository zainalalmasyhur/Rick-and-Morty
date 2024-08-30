import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        species
        status
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;

const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
  min-height: 100vh;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #222;
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
`;

const CharacterCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 500px; /* Adjusted height for better image display */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 300px; /* Increased height */
  object-fit: cover;
  border-bottom: 1px solid #ddd; /* Border to separate image from details */
`;

const CharacterDetails = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const CharacterName = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const CharacterInfo = styled.p`
  margin: 5px 0;
  color: #666;
`;

const CharacterStatus = styled.span`
  font-weight: 600;
  color: ${({ status }) =>
    status === 'Alive' ? '#4caf50' : status === 'Dead' ? '#f44336' : '#ff9800'};
`;

function CharacterList() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Title>Rick and Morty Character List</Title>
      <CharacterGrid>
        {data.characters.results.map((character) => (
          <Link key={character.id} to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
            <CharacterCard>
              <CharacterImage src={character.image} alt={character.name} />
              <CharacterDetails>
                <CharacterName>{character.name}</CharacterName>
                <CharacterInfo>
                  <CharacterStatus status={character.status}>
                    ● {character.status}
                  </CharacterStatus>{' '}
                  - {character.species}
                </CharacterInfo>
                <CharacterInfo>Last known location: {character.location.name}</CharacterInfo>
                <CharacterInfo>First seen in: {character.episode[0].name}</CharacterInfo>
              </CharacterDetails>
            </CharacterCard>
          </Link>
        ))}
      </CharacterGrid>
    </Container>
  );
}

export default CharacterList;
