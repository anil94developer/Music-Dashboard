import React, { useState } from 'react';

// Sample data (replace with your JSON array)


export default function SearchInput(props) {
  const { artistData, setSelectData } = props
  const [query, setQuery] = useState("");
  const [linkStatus, setLinkStatus] = useState(false);
  const [link, setLink] = useState("");

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
        <div class="input-group input-group-sm">
          <input
            className="form-control"
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for an artist..."
          />
        </div>


        {query && (
          <ul>
            {
              filteredArtists.length > 0 ?
                filteredArtists.map((artist) => (
                  <li key={artist.id} onClick={() => addArtist(artist)} className="form-control">
                    {artist.name}
                  </li>
                ))
                :
                <div class="box">
                  <div class="box-body">
                    <div className="row"> 
                      <div className="col-md-6">
                        <div className="form-group"> 
                          <label htmlFor="primaryArtist">Artist Name</label>
                          <div class="input-group input-group-sm">
                            <input
                              className="form-control"
                              type="text"
                              value={query}
                              onChange={handleSearchChange}
                              placeholder="Search for an artist..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="primaryArtist">Add Link Id</label>
                          <div class="input-group input-group-sm ">
                            <input
                              className="form-control"
                              type="text"
                              value={link}
                              onChange={(e) => { setLink(e.target.value) }}
                              placeholder="Add Link Id..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-success btn-flat " type="button" onClick={() => { }}>Add Artist</button>
                  </div>
                </div>
            }
          </ul>
        )}
      </div>

      <div>
        {selectedArtists.map((artist) => (
          <div key={artist.id} className="artist-item form-control d-flex row">
            <img
              src="/img/placeholder.png" // Replace with artist image if available
              alt={artist.name}
              className="artist-image"
            />
            <span>{artist.name}</span>
            {/* <div className="platform-icons">
              {artist.platforms.includes("apple") && (
                <span className="icon-apple">🍎</span>
              )}
              {artist.platforms.includes("spotify") && (
                <span className="icon-spotify">🎶</span>
              )}
            </div> */}
            <button onClick={() => removeArtist(artist.id)} style={{ background: 'red', borderRadius: 20, color: '#fff' }}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
