import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { images } from '../../assets/images';
import { base } from '../../Constants/Data.constant';
import { getData, postData } from '../../Services/Ops';

// Sample data (replace with your JSON array)


export default function SearchInput(props) {
  const { artistData=[], setSelectData, } = props
  const [query, setQuery] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [link, setLink] = useState("");

  const [selectedArtists, setSelectedArtists] = useState([]);
 
  useEffect(() => {
    fetchArtistList()
    setSelectedArtists(artistData)
    setSelectData(artistData)
  }, [artistData])

  const addArtist = (artist) => { 
    if (!selectedArtists.some(item => item._id === artist._id)) {
      setSelectedArtists([...selectedArtists, artist]);
      setSelectData([...selectedArtists, artist]);
    }
    setQuery("");
    setLink("");
  };

  const removeArtist = (artistId) => {
    setSelectedArtists(selectedArtists.filter(artist => artist._id !== artistId));
  };

  const filteredArtists = artistList.filter(artist =>
    artist.name.toLowerCase().includes(query.toLowerCase())
  );

  const addHandleSubmit = async () => {
    let body = {
      "name": query,
      "linkId": link
    }
    console.log(body)

    let result = await postData(base.addArtist, body);
    console.log(result)
    if (result.data.status === true) {
      Swal.fire("Success", result.message, result.message);
      fetchArtistList()
      setQuery("");
      setLink("");
    } else {
      Swal.fire("Error", result.message, result.message);
    }
  }
  const fetchArtistList = async () => {  
    let result = await getData(base.fetchArtistList);
    console.log(base.fetchArtistList + "===========>", result)
    if (result.data.status === true) {
      setArtistList(result.data.data)
    } else {
      // Swal.fire("Error", result.message, result.message);
    }
  }

  return (
    <div>
      <div>
        <div class="input-group input-group-sm">
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
            {
              filteredArtists.length > 0 ?
                filteredArtists.map((artist) => (
                  <li key={artist._id} onClick={() => addArtist(artist)} className="form-control">
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
                              onChange={(e) => setQuery(e.target.value)}
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
                    <button class="btn btn-success btn-flat " type="button" onClick={() => { addHandleSubmit() }}>Add Artist</button>
                  </div>
                </div>
            }
          </ul>
        )}
      </div>

      <div key={selectedArtists}>
        {selectedArtists && selectedArtists.map((artist) => (
          <div key={artist._id} className="artist-item form-control d-flex row">
            <img
              src={images.user} // Replace with artist image if available
              alt={artist.name}
              className="artist-image"
            />
            <span>{artist.name}</span>
            <button onClick={() => removeArtist(artist._id)} style={{ background: 'red', borderRadius: 20, color: '#fff' }}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
