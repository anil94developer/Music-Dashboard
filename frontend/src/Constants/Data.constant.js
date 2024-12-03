// const domainUrl = 'https://api.tuneplus.org/';
const domainUrl = 'http://localhost:8002/';
// const domainUrl = 'http://192.168.162.81:8002/';



const mainUrl = domainUrl
const imageServerUrl = domainUrl + '';
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
  finalReleaseSubmit: mainUrl + 'release/submitFinalRelease',
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
  addBank: mainUrl + 'bank/add-bank',
  bankDetails: mainUrl + 'bank/bank-details',
  updateProfile: mainUrl + 'auth/profile-update',
  addPermission: mainUrl + 'permission/add-permission',
  myPermission: mainUrl + 'permission/my-permission',
  getUserList: mainUrl + 'permission/my-user-list',
  sendWithdrawal: mainUrl + 'wallet/send-withdrawal',
  getWithdraw: mainUrl + 'wallet/list-transactions',
  updatePermission: mainUrl + 'permission/update-permission',
  userList: mainUrl + 'auth/user-list',
  deleteUser: mainUrl + 'auth/user-delete',
  getWithdrawList: mainUrl + 'wallet/get-withdraw-request',
  withdrawStatus: mainUrl + 'wallet/withdraw-status',
  uploadTracks: mainUrl + 'excel/send-track',
  getTracks: mainUrl + 'excel/get-track',
  uploadStore:mainUrl+'excel/sent-store',
  getStore:mainUrl+'excel/get-store',
  uploadMarket:mainUrl+'excel/sent-market',
  getMarket:mainUrl+'excel/get-market',
  sendStream:mainUrl + 'excel/sent-stream',
  getStream:mainUrl + 'excel/get-stream'



  







};
export { base, domainUrl, imageServerUrl, USER_TYPE };
