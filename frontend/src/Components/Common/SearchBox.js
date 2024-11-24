import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { images } from '../../assets/images';
import { base } from '../../Constants/Data.constant';
import { getData, postData } from '../../Services/Ops';

export default function SearchInput(props) {
  const { artistData = [], setSelectData } = props;
  const [query, setQuery] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [link, setLink] = useState("");
  const [itunesLinkId, setItunesLinkId] = useState("");

  const [selectedArtists, setSelectedArtists] = useState(Array.isArray(artistData) ? artistData : []);

  // Fetch artist list once on component mount
  useEffect(() => {
    fetchArtistList();
  }, []);

  // Update selected artists when artistData prop changes
  useEffect(() => {
    if (Array.isArray(artistData)) {
      setSelectedArtists(artistData);
    }
  }, [artistData]);

  const addArtist = (artist) => {
    // Prevent duplicate artist entries
    if (!selectedArtists.some(item => item._id === artist._id)) {
      const updatedArtists = [...selectedArtists, artist];
      console.log("updatedArtists-----",updatedArtists)
      setSelectedArtists(updatedArtists);
      setSelectData(updatedArtists);  // Update parent component
    }
    
    setQuery("");
    setLink("");
    setItunesLinkId("")
  };

  const removeArtist = (artistId) => {
    const updatedArtists = selectedArtists.filter(artist => artist._id !== artistId);
    setSelectedArtists(updatedArtists);
    setSelectData(updatedArtists);  // Update parent component
  };

  const filteredArtists = artistList.filter(artist =>
    artist.name.toLowerCase().includes(query.toLowerCase())
  );

  const addHandleSubmit = async () => {
    let body = { name: query, linkId: link, itunesLinkId: itunesLinkId };
    console.log("artiest body======",body)
    let result = await postData(base.addArtist, body);
    if (result.data.status === true) {
      Swal.fire("Success", result.message, "success");
      fetchArtistList();
      setQuery("");
      setLink("");
      setItunesLinkId("")
    } else {
      Swal.fire("Error", result.message, "error");
    }
  }

  const fetchArtistList = async () => {
    let result = await getData(base.fetchArtistList);
    if (result.status === true) {
      setArtistList(result.data);
    } else {
      Swal.fire("Error", "Failed to fetch artist list", "error");
    }
  }

  return (
    <div>
      <div className="input-group input-group-sm">
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an artist..."
        />
      </div>

      {query && (
        <ul>
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <li key={artist._id} onClick={() => addArtist(artist)}  className="form-control">
                <span >{artist.name}</span> 
                {artist.linkId && <a href={artist.linkId} target="_blank"> <img src='https://static.believedigital.com/images/logos/stores/204.svg' height="20" width="20"></img></a>}
                {artist.itunesLinkId && <a href={artist.itunesLinkId} target="_blank"> <img src='https://static.believedigital.com/images/logos/stores/408.svg' height="20" width="20"></img></a>}

              </li>
            ))
          ) : (
            <div className="box">
              <div className="box-body">
                <div className="row">
                  <div className="col-md-6">
                    <label>Artist Name</label>
                    <input
                      className="form-control"
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Enter artist name..."
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Add Spotify Link Id</label>
                    <input
                      className="form-control"
                      type="text"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="Add Spotify Link Id..."
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Itunes Link Id</label>
                    <input
                      className="form-control"
                      type="text"
                      value={itunesLinkId}
                      onChange={(e) => setItunesLinkId(e.target.value)}
                      placeholder="Add Itunes Link Id..."
                    />
                  </div>
                  <div className="col-md-6">
                    <label></label>
                    <button
                      className="btn btn-success btn-flat form-control "
                      type="button"
                      onClick={addHandleSubmit}
                    >
                      Add Artist
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </ul>
      )}

      <div>
        {selectedArtists.map((artist) => (
          <div key={artist._id} className="artist-item form-control d-flex row">
            <img
              src={images.user}
              className="artist-image"
            />
            <span>{artist.name}</span>
            {artist.linkId && <a href={artist.linkId} target="_blank"> <img src='https://static.believedigital.com/images/logos/stores/204.svg' className="artist-image"></img></a>}
            {artist.itunesLinkId && <a href={artist.itunesLinkId} target="_blank"> <img src='https://static.believedigital.com/images/logos/stores/408.svg' className="artist-image"></img></a>}

            <button
              onClick={() => removeArtist(artist._id)}
              style={{ background: 'red', borderRadius: 20, color: '#fff' }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
