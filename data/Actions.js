import { query as api } from "./Api";

export const load = (dispatch) => {
  if (window && window.localStorage && window.localStorage.getItem("store")) {
    dispatch({
      type: "LOAD",
      payload: JSON.parse(window.localStorage.getItem("store") || "{}"),
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
