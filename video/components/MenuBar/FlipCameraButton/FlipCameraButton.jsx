import React, { useCallback, useEffect, useState } from 'react';
import { DEFAULT_VIDEO_CONSTRAINTS } from '../../../constants';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';
import { IconButton } from '@material-ui/core';
import useMediaStreamTrack from '../../../hooks/useMediaStreamTrack/useMediaStreamTrack';
import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';
export default function FlipCameraButton() {
  const { localTracks } = useVideoContext();
  const [supportsFacingMode, setSupportsFacingMode] = useState(null);
  const videoTrack = localTracks.find(track => track.name.includes('camera'));
  const mediaStreamTrack = useMediaStreamTrack(videoTrack);
  useEffect(() => {
    // The 'supportsFacingMode' variable determines if this component is rendered
    // If 'facingMode' exists, we will set supportsFacingMode to true.
    // However, if facingMode is ever undefined again (when the user unpublishes video), we
    // won't set 'supportsFacingMode' to false. This prevents the icon from briefly
    // disappearing when the user switches their front/rear camera.
    const currentFacingMode =
      mediaStreamTrack === null || mediaStreamTrack === void 0 ? void 0 : mediaStreamTrack.getSettings().facingMode;
    if (currentFacingMode && supportsFacingMode === null) {
      setSupportsFacingMode(true);
    }
  }, [mediaStreamTrack, supportsFacingMode]);
  const toggleFacingMode = useCallback(() => {
    const newFacingMode =
      (mediaStreamTrack === null || mediaStreamTrack === void 0
        ? void 0
        : mediaStreamTrack.getSettings().facingMode) === 'user'
        ? 'environment'
        : 'user';
    videoTrack.restart(Object.assign(Object.assign({}, DEFAULT_VIDEO_CONSTRAINTS), { facingMode: newFacingMode }));
  }, [mediaStreamTrack, videoTrack]);
  return supportsFacingMode ? (
    <IconButton onClick={toggleFacingMode} disabled={!videoTrack}>
      <FlipCameraIosIcon />
    </IconButton>
  ) : null;
}
