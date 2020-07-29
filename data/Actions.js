import { query as api } from "./Api";
var mixpanel = require("mixpanel-browser");

export const load = (dispatch, iniState) => {
  if (window && window.localStorage && window.localStorage.getItem("store")) {
    const state = JSON.parse(
      window.localStorage.getItem("store") || JSON.stringify(iniState)
    );

    mixpanel.identify(state.visitor.uniqueId);

    dispatch({
      type: "LOAD",
      payload: state,
    });
  }
  api("visitors/visitor_count", {}).then((response) => {
    dispatch({ type: "VISITOR_COUNT", payload: response });
  });
};

export const alert = (dispatch, message) => {
  dispatch({ type: "ADD_ALERT", payload: message });
};

export const registerVisitor = async (dispatch, visitor) => {
  if (!visitor.id) delete visitor.id;
  const newVisitor = await api("visitors", {
    ...visitor,
    pages: Array.isArray(visitor.pages) ? visitor.pages.join(",") : "",
  });

  if (newVisitor.pages) newVisitor.pages = newVisitor.pages.split(",");

  dispatch({ type: "REGISTER_VISITOR", payload: newVisitor });
};
