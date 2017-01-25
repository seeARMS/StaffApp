/*
 * API TO DO STUFF
 */

const API_ROOT = ''

const paths = {
  login: ''
}

/*
 * Given a credentials object (email + password)
 * Logs a user in, returns a token which gets sent on all requests
 */
export function login (credentials) {
  // TODO: fix this
  return Promise.resolve()

  return fetch(paths.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(res => res.json())
}

/*
 * Logs the current user out
 */
export function logout () {
  return fetch(paths.logout, {

  })
}
