import { query as api } from "data/Api";
//var mixpanel = require("mixpanel-browser");

export const load = (dispatch, iniState) => {
  if (window && window.localStorage && window.localStorage.getItem("video")) {
    const state = JSON.parse(
      window.localStorage.getItem("video") || JSON.stringify(iniState)
    );

    //mixpanel.identify(state.visitor.uniqueId);

    dispatch({
      type: "LOAD",
      payload: state,
    });
  }
};

export const updateToken = async (dispatch, token) => {
  dispatch({ type: "SETTINGS", payload: settings });
};

export const updateActiveSync = async (dispatch, activeSync) => {
  dispatch({ type: "ACTIVE_SYNC", payload: settings });
};

export const getVideoToken = async (dispatch, identity, roomName) => {
  const headers = new window.Headers();
  const endpoint =
    process.env.REACT_APP_TOKEN_ENDPOINT ||
    "https://rodriguezlab.ngrok.io/tokens";
  const params = new window.URLSearchParams({ identity, roomName });
  const res = await fetch(`${endpoint}?${params}`, { headers });
  const token = await res.text();
  dispatch({ type: "TOKEN", payload: token });
};
