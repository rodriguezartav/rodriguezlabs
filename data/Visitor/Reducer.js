export default (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "LOAD": {
      newState = { ...state, ...action.payload };
      break;
    }

    case "ADD_ALERT": {
      newState = { ...state, alerts: [...state.alerts, action.payload] };
      break;
    }

    case "REMOVE_ALERT": {
      newState = {
        ...state,
        alerts: state.alerts.filter((item) => item != action.payload),
      };
      break;
    }

    case "REGISTER_VISITOR": {
      newState = {
        ...state,
        visitor: { ...state.visitor, ...action.payload },
      };
      break;
    }
    case "VISITOR_COUNT": {
      newState = {
        ...state,
        visitors: action.payload,
      };
      break;
    }

    case "VIDEO_SETTINGS": {
      newState = {
        ...state,
        video: { ...state.video, ...action.payload },
      };
      break;
    }
  }
  if (window && window.localStorage)
    window.localStorage.setItem("store", JSON.stringify(newState));

  return newState;
};
