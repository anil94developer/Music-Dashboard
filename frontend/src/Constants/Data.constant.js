const domainUrl = 'http://192.168.128.88:8002/';

const mainUrl = domainUrl 
const imageServerUrl = domainUrl + 'application_api/';
const USER_TYPE = "User"
const base = {
  login: mainUrl + 'login.php',
  signUp: mainUrl + 'signup.php',
  releaseStep1: mainUrl + 'release/step-one-release',

}; 
export { base, domainUrl, imageServerUrl, USER_TYPE };
