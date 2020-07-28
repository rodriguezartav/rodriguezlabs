import { useReducer, useContext, createContext } from "react";
import Reducer from "./Reducer";
import { load } from "./Actions";

const StateContext = createContext();
const DispatchContext = createContext();

const initState = {
  visitors: { count: 0 },
  visitor: {
    name: "",
    id: null,
    pages: [],
  },
  contact: {
    phone: null,
  },
  shop: {},
  cart: {},
  alerts: [],
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  React.useEffect(() => {
    try {
      load(dispatch);
    } catch (e) {}
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useNotify = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return [
    (message) => {
      dispatch({ type: "ADD_ALERT", payload: message });
      setTimeout(() => {
        dispatch({ type: "REMOVE_ALERT", payload: message });
      }, 3000);
    },
    () => {
      dispatch({
        type: "REMOVE_ALERT",
        payload: state.alerts[state.alerts.length - 1] || "",
      });
    },
  ];
};

export const useGlobalState = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCrmState must be used within a CountProvider");
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useCrmDispatch must be used within a CountProvider");
  }
  return context;
};