import React, { useState } from 'react';

// Sample data (replace with your JSON array)


export default function SearchInput(props) {
    const {artistData,setSelectData}=props
  const [query, setQuery] = useState("");
  const [selectedArtists, setSelectedArtists] = useState([]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const addArtist = (artist) => {
    if (!selectedArtists.some(item => item.id === artist.id)) {
      setSelectedArtists([...selectedArtists, artist]);
      setSelectData([...selectedArtists, artist]);

    }
    setQuery("");
  };

  const removeArtist = (artistId) => {
    setSelectedArtists(selectedArtists.filter(artist => artist.id !== artistId));
  };

  const filteredArtists = artistData.filter(artist =>
    artist.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
         className="form-control"
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for an artist..."
        />
        {query && (
          <ul >
            {filteredArtists.map((artist) => (
              <li key={artist.id} onClick={() => addArtist(artist)}>
                {artist.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {selectedArtists.map((artist) => (
          <div key={artist.id} className="artist-item form-control">
            <img
              src="/img/placeholder.png" // Replace with artist image if available
              alt={artist.name}
              className="artist-image"
            />
            <span>{artist.name}</span>
            <div className="platform-icons">
              {artist.platforms.includes("apple") && (
                <span className="icon-apple">🍎</span>
              )}
              {artist.platforms.includes("spotify") && (
                <span className="icon-spotify">🎶</span>
              )}
            </div>
            <button onClick={() => removeArtist(artist.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
