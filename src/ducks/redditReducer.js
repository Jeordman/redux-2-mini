import axios from "axios";

const initialState = {
  loading: false,
  articles: []
};

export const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export const requestArticles = () => {
  let articles = axios.get("/api/reddit").then(res => res.data);
  return {
    type: REQUEST_ARTICLES,
    payload: articles
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case REQUEST_ARTICLES + "_PENDING":
      return { ...state, loading: true };
    case REQUEST_ARTICLES + "_FULFILLED":
      return { articles: payload, loading: false };
    case REQUEST_ARTICLES + "_REJECTED":
      return { ...state, loading: false };
    default:
      return state;
  }
}
