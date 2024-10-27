const domainUrl = 'http://192.168.128.88:8002/';

const mainUrl = domainUrl 
const imageServerUrl = domainUrl + 'application_api/';
const USER_TYPE = "User"
const base = {
  login: mainUrl + 'auth/login/',
  signUp: mainUrl + 'auth/signup/',
  addOneRelease: mainUrl + 'release/add-one-release',
}; 
export { base, domainUrl, imageServerUrl, USER_TYPE };
