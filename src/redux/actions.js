
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'


function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    candidates: json
  }
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`data/candidates.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)))
  }
}

function shouldFetchApps(state) {
  const candidates = state.candidates
  if (candidates.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}
