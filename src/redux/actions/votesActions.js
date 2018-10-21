import axios from "axios";

export const GET_VOTES = "GET_VOTES"
export const POST_VOTE = "POST_VOTE"

export function getVotes() {
  return dispatch => {
    axios.get("/votes").then(res => {
      dispatch({
        type: GET_VOTES,
        candidates: res.data
      });
    }).catch(err => {
      throw(err);
    });
  }
}

export function postVote(vote) {
  return (dispatch) => {
    axios.post("/vote", vote).then((res) => {
      dispatch({
        type: POST_VOTE,
        vote: vote
      })
    }).catch(((err) => {
      throw(err);
    }))
  }
}