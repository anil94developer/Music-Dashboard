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
  releaseStep3: mainUrl + 'release/step-three-release',
  releaseList: mainUrl + 'release/release-list',
  releaseDetails:mainUrl+'release/release-details',
  addArtist: mainUrl + 'artist/add-artist',
  fetchArtistList: mainUrl + 'artist/artist-list',
  userProfile: mainUrl + 'auth/user-profile',
  addLabel: mainUrl + 'release/add-label',
  labelList: mainUrl + 'release/label-list',
  trackUpdate: mainUrl + 'release/tracks-update',
  addStore: mainUrl + 'release/step-four-release',
  listStore:mainUrl + 'release/list-store',

};
export { base, domainUrl, imageServerUrl, USER_TYPE };
