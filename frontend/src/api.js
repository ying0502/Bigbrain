// change this when you integrate with the real API, or when u start using the dev server
const API_URL = 'http://localhost:5005';
const getJSON = (path, options) => fetch(path, options)
  .then((res) => res.json())
  .catch((err) => console.warn(`API_ERROR: ${err.message}`));
/**
 * This is a sample class API which you may base your code on.
 * You don't have to do this as a class.
 */
export class API {
  constructor(url = API_URL) {
    this.url = url;
  }

  makeAPIRequest(path, options) {
    // console.log(`options: ${options.body}`);
    return getJSON(`${this.url}/${path}`, options);
  }
}

export default API;
