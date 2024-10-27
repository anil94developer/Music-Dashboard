const domainUrl = 'https://asiangameclub.com/';

const mainUrl = domainUrl + 'matka/application_api/';
const imageServerUrl = domainUrl + 'application_api/';
const USER_TYPE = "User"
const base = {
  login: mainUrl + 'login.php',
  signUp: mainUrl + 'signup.php',
}; 
export { base, domainUrl, imageServerUrl, USER_TYPE };
