const domainUrl = 'http://localhost:8002/';

const mainUrl = domainUrl
const imageServerUrl = domainUrl + 'application_api/';
const USER_TYPE = "User"
const base = {
  login: mainUrl + 'auth/login',
  signUp: mainUrl + 'auth/signup',
  changePassword: mainUrl + 'auth/user-change-password',
  addOneRelease: mainUrl + "release/add-one-release",
  releaseStep1: mainUrl + 'release/step-one-release',
  releaseStep2: mainUrl + 'release/step-two-release',
  releaseStep3: mainUrl + 'release/step-three-release',
  releaseStep5: mainUrl + 'release/step-five-release',
  releaseList: mainUrl + 'release/release-list',
  releaseDetails: mainUrl + 'release/release-details',
  addArtist: mainUrl + 'artist/add-artist',
  fetchArtistList: mainUrl + 'artist/artist-list',
  userProfile: mainUrl + 'auth/user-profile',
  addLabel: mainUrl + 'release/add-label',
  labelList: mainUrl + 'release/label-list',
  trackUpdate: mainUrl + 'release/tracks-update',
  addStore: mainUrl + 'release/step-four-release',
  listStore: mainUrl + 'release/list-store',
  tracksList: mainUrl + 'release/tracks-list',
  addSupport: mainUrl + 'support/add-support',
  supportList: mainUrl + 'support/support-list',
  

};
export { base, domainUrl, imageServerUrl, USER_TYPE };
