const domainUrl = 'http://localhost:8002/';

const mainUrl = domainUrl
const imageServerUrl = domainUrl + 'application_api/';
const USER_TYPE = "User"
const base = {
  login: mainUrl + 'auth/login',
  signUp: mainUrl + 'auth/signup',
  addOneRelease: mainUrl + "release/add-one-release",
  releaseStep1: mainUrl + 'release/step-one-release',
  releaseStep2: mainUrl + 'release/step-two-release',
  addArtist: mainUrl + 'artist/add-artist',
  fetchArtistList: mainUrl + 'artist/artist-list',
  userProfile: mainUrl + 'auth/user-profile',


};
export { base, domainUrl, imageServerUrl, USER_TYPE };
