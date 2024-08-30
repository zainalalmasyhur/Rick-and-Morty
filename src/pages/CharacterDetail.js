import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
    }
  }
`;

function CharacterDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { id } });
  const dispatch = useDispatch();
  const [locationName, setLocationName] = useState('');

  const assignCharacter = () => {
    if (!locationName.trim()) {
      alert('Please enter a location name.');
      return;
    }
    
    dispatch({
      type: 'ADD_CHARACTER_TO_LOCATION',
      payload: { locationName, character: data.character },
    });
    setLocationName('');
  };

  if (loading) return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center text-red-600 font-semibold">Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <div className="p-6 text-center">
          <img
            src={data.character.image}
            alt={data.character.name}
            className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
          />
          <h1 className="text-2xl font-bold mb-2">{data.character.name}</h1>
          <p className="text-lg mb-1">Status: {data.character.status}</p>
          <p className="text-lg mb-1">Species: {data.character.species}</p>
          <p className="text-lg mb-4">Gender: {data.character.gender}</p>

          <input
            type="text"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder="Enter location name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={assignCharacter}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Assign to Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
