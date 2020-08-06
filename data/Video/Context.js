import { useReducer, useContext, createContext } from "react";
import Reducer from "./Reducer";
import { load } from "./Actions";
import { isMobile } from "../utils";
import generateConnectionOptions from "video/utils/generateConnectionOptions/generateConnectionOptions";
import useRoom from "data/Video/hooks/useRoom";
import useLocalTracks from "data/Video/hooks/useLocalTracks";

export const StateContext = createContext();
const DispatchContext = createContext();

const initState = {
  token: null,
  activeSinkId: null,
  settings: {
    trackSwitchOffMode: undefined,
    dominantSpeakerPriority: "standard",
    bandwidthProfileMode: "collaboration",
    maxTracks: isMobile ? "5" : "10",
    maxAudioBitrate: "16000",
    renderDimensionLow: "low",
    renderDimensionStandard: "960p",
    renderDimensionHigh: "wide1080p",
  },
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  const onErrorCallback = (error) => {
    console.log(`ERROR: ${error.message}`, error);
  };

  const connectionOptions = generateConnectionOptions(state.settings);

  const {
    localTracks,
    getLocalVideoTrack,
    getLocalAudioTrack,
    isAcquiringLocalTracks,
    removeLocalVideoTrack,
  } = useLocalTracks();

  const { room, isConnecting, connect } = useRoom(
    localTracks,
    onErrorCallback,
    connectionOptions
  );

  React.useEffect(() => {
    try {
      load(dispatch, initState);
    } catch (e) {}
  }, []);

  return (
    <StateContext.Provider
      value={{
        ...state,
        room,
        connect,
        connectionOptions,
        localTracks,
        getLocalVideoTrack,
        getLocalAudioTrack,
        isAcquiringLocalTracks,
        removeLocalVideoTrack,
      }}
    >
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useVideoState = () => {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCrmState must be used within a CountProvider");
  }
  return context;
};

export const useVideoDispatch = () => {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useCrmDispatch must be used within a CountProvider");
  }
  return context;
};
