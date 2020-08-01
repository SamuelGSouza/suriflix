const URL = window.location.hostname.includes('localhost')
  ? 'https://localhost:8080'
  : 'https://suriflix.herokuapp.com';

export default {
  URL,
};
