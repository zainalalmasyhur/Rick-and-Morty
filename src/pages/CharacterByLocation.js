import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CharacterByLocation() {
  const [filter, setFilter] = useState('');
  const locations = useSelector((state) => state.locations);

  // Filter locations based on the filter input
  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Group characters by location
  const groupedLocations = filteredLocations.reduce((acc, location) => {
    if (!acc[location.name]) {
      acc[location.name] = {
        name: location.name,
        characters: []
      };
    }
    acc[location.name].characters.push(...location.characters);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Characters by Location</h1>
      
      {/* Filter Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Filter by location name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Display Filtered Locations */}
      {Object.keys(groupedLocations).length === 0 ? (
        <p className="text-center text-lg text-gray-600">No locations found for the given filter.</p>
      ) : (
        Object.keys(groupedLocations).map((locationName) => {
          const location = groupedLocations[locationName];
          return (
            <div key={locationName} className="mb-8 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{location.name}</h2>
              {location.characters.length === 0 ? (
                <p className="text-center text-lg text-gray-600">No characters in this location.</p>
              ) : (
                location.characters.map((character) => (
                  <div key={character.id} className="flex items-center mb-4">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <p className="text-lg font-medium">{character.name}</p>
                  </div>
                ))
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default CharacterByLocation;
