import { useContext } from "react";
import { StateContext } from "data/Video/Context";

export default function useVideoContext() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
}
