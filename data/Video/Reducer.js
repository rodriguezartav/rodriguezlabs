export default (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "LOAD": {
      newState = { ...state, ...action.payload };
      break;
    }

    case "VIDEO_SETTINGS": {
      newState = {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };
      break;
    }

    case "TOKEN": {
      newState = {
        ...state,
        token: action.payload,
      };
      break;
    }

    case "ACTIVE_SINK": {
      newState = {
        ...state,
        activeSink: action.payload,
      };
      break;
    }
  }
  if (window && window.localStorage)
    window.localStorage.setItem("video", JSON.stringify(newState));

  return newState;
};
